#!/usr/bin/env python3
"""
CVR Lead Engine — Finds new businesses in Aarhus that need cleaning services.
Uses cvrapi.dk (free) to search for Danish businesses by postal code + industry keywords.

Usage:
    python3 cvr-lead-engine.py              # Real API mode (respects rate limits)
    USE_MOCK=1 python3 cvr-lead-engine.py   # Mock mode for testing
"""

import json
import os
import re
import sys
import time
from datetime import datetime
from pathlib import Path

# ---------------------------------------------------------------------------
# CONFIGURATION — Edit these constants
# ---------------------------------------------------------------------------

POSTAL_CODES = [
    "8000",  # Aarhus C
    "8200",  # Aarhus N
    "8210",  # Aarhus V
    "8240",  # Risskov
    "8270",  # Højbjerg
    "8260",  # Viby J
    "8381",  # Tilst
    "8220",  # Brabrand
    "8361",  # Hasselager
]

# Search terms for companies that NEED cleaning (not cleaning companies themselves)
SEARCH_TERMS = [
    "Ejendomsadministration",  # Property management — prime target
    "Restaurant",
    "Kontor",
    "Detail",
]

OUTPUT_DIR = Path("/home/ubuntu/rendetalje-worker/docs")
EXISTING_LEADS_FILE = OUTPUT_DIR / "CVR_LEADS.txt"
NEW_LEADS_FILE = OUTPUT_DIR / "CVR_LEADS_NEW.txt"

RATE_LIMIT_DELAY = 2  # seconds between API requests
USE_MOCK = os.environ.get("USE_MOCK", "0") in ("1", "true", "True", "yes")

# Best prospect: companies with 3-50 employees
EMPLOYEES_MIN = 3
EMPLOYEES_MAX = 50

# ---------------------------------------------------------------------------
# Mock data for testing (avoids hitting the real API)
# ---------------------------------------------------------------------------

MOCK_DATA = {
    ("8000", "Ejendomsadministration"): [
        {
            "cvr": 12345678,
            "name": "Aarhus Ejendomsadministration A/S",
            "address": "Søndergade 25",
            "zipcode": "8000",
            "city": "Aarhus C",
            "phone": "86123456",
            "email": "info@aarhus-ejendom.dk",
            "industrydesc": "Administration af fast ejendom på kontraktbasis",
            "employees": 12,
        },
        {
            "cvr": 23456789,
            "name": "City Property Management ApS",
            "address": "Åboulevarden 88",
            "zipcode": "8000",
            "city": "Aarhus C",
            "phone": "86123457",
            "email": "kontakt@cityproperty.dk",
            "industrydesc": "Administration af fast ejendom på kontraktbasis",
            "employees": 8,
        },
    ],
    ("8200", "Ejendomsadministration"): [
        {
            "cvr": 34567890,
            "name": "Nordre Ejendomsservice A/S",
            "address": "Vestre Ringgade 110",
            "zipcode": "8200",
            "city": "Aarhus N",
            "phone": "87123456",
            "email": "info@nordre-ejendom.dk",
            "industrydesc": "Ejendomsadministration og -service",
            "employees": 5,
        },
    ],
    ("8210", "Ejendomsadministration"): [
        {
            "cvr": 45678901,
            "name": "Aarhus V Ejendomsforvaltning ApS",
            "address": "Silkeborgvej 2",
            "zipcode": "8210",
            "city": "Aarhus V",
            "phone": "86123458",
            "email": "admin@aarhusv-ejendom.dk",
            "industrydesc": "Administration af fast ejendom på kontraktbasis",
            "employees": 15,
        },
    ],
    ("8240", "Ejendomsadministration"): [
        {
            "cvr": 56789012,
            "name": "Risskov Boligadministration I/S",
            "address": "Nordre Strandvej 25",
            "zipcode": "8240",
            "city": "Risskov",
            "phone": "86123459",
            "email": "info@risskov-bolig.dk",
            "industrydesc": "Ejendomsadministration",
            "employees": 4,
        },
    ],
    ("8260", "Restaurant"): [
        {
            "cvr": 67890123,
            "name": "Restaurant Mefisto ApS",
            "address": "Sønderhøj 2",
            "zipcode": "8260",
            "city": "Viby J",
            "phone": "86123460",
            "email": "info@mefisto.dk",
            "industrydesc": "Restauranter",
            "employees": 25,
        },
    ],
    ("8000", "Kontor"): [
        {
            "cvr": 78901234,
            "name": "Aarhus Erhvervskontor A/S",
            "address": "Park Allé 5",
            "zipcode": "8000",
            "city": "Aarhus C",
            "phone": "86123461",
            "email": "kontakt@erhvervskontor.dk",
            "industrydesc": "Kontor- og erhvervsservice",
            "employees": 20,
        },
    ],
    ("8000", "Detail"): [
        {
            "cvr": 89012345,
            "name": "Magasin Aarhus A/S",
            "address": "Immervad 1",
            "zipcode": "8000",
            "city": "Aarhus C",
            "phone": "86123462",
            "email": "info@magasin.dk",
            "industrydesc": "Detailhandel med blandet sortiment",
            "employees": 45,
        },
    ],
}


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def log(msg: str):
    timestamp = datetime.now().strftime("%H:%M:%S")
    print(f"[{timestamp}] {msg}")


def extract_cvrs_from_existing(filepath: Path) -> set:
    """
    Parse existing CVR_LEADS.txt and extract any CVR numbers present.
    Returns a set of int CVR numbers already known.
    """
    cvrs = set()
    if not filepath.exists():
        return cvrs

    text = filepath.read_text(encoding="utf-8")
    # Look for CVR patterns: 8-digit numbers
    for match in re.finditer(r"\bcvr[:\s]*(\d{8})\b", text, re.IGNORECASE):
        cvrs.add(int(match.group(1)))
    # Also find bare 8-digit numbers that look like CVRs
    # (8-digit numbers not part of phone numbers or zip codes)
    for match in re.finditer(r"(?<!\d)(\d{8})(?!\d)", text):
        num = int(match.group(1))
        # Filter out phone-like numbers (starting with common prefixes)
        # and zip codes (4-digit)
        if num >= 10000000:
            cvrs.add(num)

    return cvrs


def extract_company_names_from_existing(filepath: Path) -> set:
    """
    Extract normalized company names from existing leads for secondary dedup.
    """
    names = set()
    if not filepath.exists():
        return names

    text = filepath.read_text(encoding="utf-8")
    # Look for "Name:" or "Navn:" lines
    for match in re.finditer(
        r"(?:Name|Navn):\s+(.+)$", text, re.MULTILINE | re.IGNORECASE
    ):
        names.add(normalize_name(match.group(1).strip()))
    return names


def normalize_name(name: str) -> str:
    """Normalize company name for comparison."""
    return (
        name.lower()
        .replace("a/s", "")
        .replace("aps", "")
        .replace("aps", "")
        .replace("i/s", "")
        .replace("ivs", "")
        .replace("v/", "")
        .strip()
        .replace("  ", " ")
    )


# ---------------------------------------------------------------------------
# CVR API functions
# ---------------------------------------------------------------------------

import requests


def search_cvrapi(search_term: str, postal_code: str) -> list:
    """
    Search cvrapi.dk for companies matching a search term and postal code.
    Returns a list of company dicts.
    """
    url = "https://cvrapi.dk/api"
    params = {
        "search": search_term,
        "country": "dk",
        "postal": postal_code,
    }

    try:
        response = requests.get(url, params=params, timeout=15)
        log(f"  GET cvrapi.dk?search={search_term}&postal={postal_code} → {response.status_code}")

        if response.status_code == 429 or response.status_code == 403:
            log(f"  ⚠️ RATE LIMIT HIT ({response.status_code}). Exiting gracefully.")
            return None  # Signal rate limit

        data = response.json()

        if "error" in data:
            if "QUOTA_EXCEEDED" in str(data.get("error", "")):
                log(f"  ⚠️ QUOTA_EXCEEDED: {data.get('message', '')}")
                return None
            log(f"  ⚠️ API error: {data}")
            return []

        # The API can return either a single result or a list
        if isinstance(data, list):
            return data
        elif isinstance(data, dict):
            # Single result
            if "cvr" in data or "name" in data:
                return [data]
            # "results" key
            if "results" in data:
                return data["results"]
            # "companies" key
            if "companies" in data:
                return data["companies"]

        return []

    except requests.exceptions.Timeout:
        log("  ⚠️ Request timed out")
        return []
    except requests.exceptions.ConnectionError:
        log("  ⚠️ Connection error")
        return []
    except json.JSONDecodeError:
        log("  ⚠️ Invalid JSON response")
        return []
    except Exception as e:
        log(f"  ⚠️ Unexpected error: {e}")
        return []


def get_mock_data(search_term: str, postal_code: str) -> list:
    """Return mock data for testing."""
    return MOCK_DATA.get((postal_code, search_term), [])


# ---------------------------------------------------------------------------
# Lead evaluation
# ---------------------------------------------------------------------------

def is_good_prospect(company: dict) -> bool:
    """
    Evaluate if a company is a good prospect for cleaning services.
    Returns True if it looks promising.
    """
    # Check employee count if available
    employees = company.get("employees")
    if employees is not None:
        try:
            emp_count = int(employees)
            if emp_count < EMPLOYEES_MIN or emp_count > EMPLOYEES_MAX:
                log(f"    ⏭️ Skip: {emp_count} employees (outside {EMPLOYEES_MIN}-{EMPLOYEES_MAX})")
                return False
        except (ValueError, TypeError):
            pass  # No employee data — still consider

    return True


def format_lead_line(company: dict) -> str:
    """Format a compact lead line for output."""
    cvr = company.get("cvr", "N/A")
    name = company.get("name", "Unknown") or "Unknown"
    address = company.get("address", "N/A") or "N/A"
    postal = company.get("zipcode", "") or ""
    city = company.get("city", "") or ""
    phone = company.get("phone", "N/A") or "N/A"
    industry = company.get("industrydesc", "N/A") or "N/A"

    return f"[{cvr}] {name} - {address}, {postal} {city} - {phone} - {industry}"


def format_full_details(company: dict, search_term: str) -> str:
    """Format full company details for the new leads file."""
    cvr = company.get("cvr", "N/A")
    name = company.get("name", "Unknown")
    address = company.get("address", "N/A")
    postal = company.get("zipcode", "")
    city = company.get("city", "")
    phone = company.get("phone", "N/A")
    email = company.get("email", "N/A")
    industry = company.get("industrydesc", "N/A")
    employees = company.get("employees", "N/A")

    lines = [
        f"── New Lead ──────────────────────────────────────────",
        f"  CVR:      {cvr}",
        f"  Name:     {name}",
        f"  Address:  {address}, {postal} {city}",
        f"  Phone:    {phone}",
        f"  Email:    {email}",
        f"  Industry: {industry}",
        f"  Employees: {employees}",
        f"  Found via: {search_term}",
        f"",
    ]
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Main engine
# ---------------------------------------------------------------------------

def main():
    log("=" * 60)
    log("  CVR LEAD ENGINE — Aarhus Commercial Cleaning Prospects")
    log(f"  Mode: {'MOCK' if USE_MOCK else 'LIVE (API)'}")
    log(f"  Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    log("=" * 60)

    # Ensure output dir exists
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Load existing CVR numbers for dedup (from both files)
    existing_cvrs = extract_cvrs_from_existing(EXISTING_LEADS_FILE)
    existing_cvrs |= extract_cvrs_from_existing(NEW_LEADS_FILE)
    existing_names = extract_company_names_from_existing(EXISTING_LEADS_FILE)
    existing_names |= extract_company_names_from_existing(NEW_LEADS_FILE)
    log(f"Loaded {len(existing_cvrs)} CVR numbers from existing leads")
    log(f"Loaded {len(existing_names)} company names from existing leads")

    all_new_leads = []
    total_requests = 0
    rate_limited = False

    # Iterate over postal codes and search terms
    for postal_code in POSTAL_CODES:
        for search_term in SEARCH_TERMS:
            log(f"\nSearching: '{search_term}' in {postal_code}...")

            if USE_MOCK:
                companies = get_mock_data(search_term, postal_code)
            else:
                companies = search_cvrapi(search_term, postal_code)
                total_requests += 1

                if companies is None:
                    rate_limited = True
                    break

                # Rate limit delay between requests
                time.sleep(RATE_LIMIT_DELAY)

            if not companies:
                log(f"  No results")
                continue

            log(f"  Found {len(companies)} companies")

            for company in companies:
                cvr = company.get("cvr")
                name = company.get("name", "Unknown")

                # Skip if no CVR or name
                if not cvr and not name:
                    continue

                # Dedup by CVR
                if cvr and int(cvr) in existing_cvrs:
                    log(f"  ⏭️ Already exists (CVR {cvr}): {name}")
                    continue

                # Dedup by name
                if name and normalize_name(name) in existing_names:
                    log(f"  ⏭️ Already exists (name): {name}")
                    continue

                # Skip if this is a cleaning company itself
                name_lower = (name or "").lower()
                industry_lower = (company.get("industrydesc", "") or "").lower()
                if any(
                    keyword in name_lower or keyword in industry_lower
                    for keyword in ["rengøring", "rengoering", "rengoring", "cleaning", "renhold"]
                ):
                    log(f"  ⏭️ Skip (cleaning company): {name}")
                    continue

                # Evaluate prospect quality
                if not is_good_prospect(company):
                    continue

                # This is a NEW lead!
                log(f"  ✅ NEW LEAD: {name} (CVR: {cvr})")
                all_new_leads.append((company, search_term))

                # Add to existing sets to prevent duplicate processing within this run
                if cvr:
                    existing_cvrs.add(int(cvr))
                if name:
                    existing_names.add(normalize_name(name))

        if rate_limited:
            break

    # -----------------------------------------------------------------------
    # Output results
    # -----------------------------------------------------------------------

    print("\n" + "=" * 60)
    log(f"RESULTS: {len(all_new_leads)} new leads found\n")

    if all_new_leads:
        # Print compact format to stdout
        for company, search_term in all_new_leads:
            print(f"  {format_lead_line(company)}")

        # Append full details to new leads file
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        with open(NEW_LEADS_FILE, "a", encoding="utf-8") as f:
            f.write(f"\n{'=' * 60}\n")
            f.write(f"  CVR LEADS — New Batch: {timestamp}\n")
            f.write(f"{'=' * 60}\n\n")
            for company, search_term in all_new_leads:
                f.write(format_full_details(company, search_term))
        log(f"\nAppended {len(all_new_leads)} leads to {NEW_LEADS_FILE}")

    else:
        log("  No new leads found.")

    # Summary
    print(f"\n{'─' * 60}")
    log(f"  Total API requests made: {total_requests}")
    log(f"  Total new leads:         {len(all_new_leads)}")
    if rate_limited:
        log(f"  ⚠️  Search stopped early due to rate limiting")
    log(f"  Completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'─' * 60}")

    return 0 if not rate_limited else 1


if __name__ == "__main__":
    sys.exit(main())
