#!/usr/bin/env python3
"""
Ejendomsmægler Outreach Generator — Reads agent data from EJENDOMSMAGGLERE.md
and generates personalized outreach emails saved to EJENDOMSMAGGLERE_OUTREACH.md.

Usage:
    python3 ejendomsmagler-outreach.py
"""

import re
from datetime import datetime
from pathlib import Path

# ---------------------------------------------------------------------------
# CONFIGURATION
# ---------------------------------------------------------------------------

AGENTS_FILE = Path("/home/ubuntu/rendetalje-worker/docs/EJENDOMSMAGGLERE.md")
OUTREACH_FILE = Path("/home/ubuntu/rendetalje-worker/docs/EJENDOMSMAGGLERE_OUTREACH.md")

# ---------------------------------------------------------------------------
# Parsing helpers
# ---------------------------------------------------------------------------


def parse_agents_md(filepath: Path) -> list:
    """
    Parse EJENDOMSMAGGLERE.md and extract agent/office information.

    The file has this structure:
    - Group headers: ### Danbolig, ### Estate, ### EDC PEB, etc.
    - Tables with columns: Kontor | Område | Telefon | Email

    Returns a list of dicts with keys:
        group, office, area, phone, email
    """
    if not filepath.exists():
        print(f"ERROR: File not found: {filepath}")
        return []

    text = filepath.read_text(encoding="utf-8")
    lines = text.split("\n")

    agents = []
    current_group = "Ukendt"

    # Pattern to match group headers: ### GroupName
    group_pattern = re.compile(r"^###\s+(.+)")
    # Pattern to match table rows: | value | value | value | value |
    row_pattern = re.compile(r"^\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.*?)\s*\|")
    # Pattern to match separator rows (|---|---|)
    sep_pattern = re.compile(r"^\|[\s\-:]+\|")

    for line in lines:
        line_stripped = line.strip()

        # Detect group header
        gm = group_pattern.match(line_stripped)
        if gm:
            current_group = gm.group(1).strip()
            continue

        # Detect table row
        rm = row_pattern.match(line_stripped)
        if rm:
            # Skip header row if it looks like Kontor/Område/Telefon/Email
            col1 = rm.group(1).strip().lower()
            if col1 in ("kontor", "kontor/"):
                continue
            # Skip separator rows
            if sep_pattern.match(line_stripped):
                continue

            office = rm.group(1).strip()
            area = rm.group(2).strip()
            phone = rm.group(3).strip()
            email = rm.group(4).strip()

            if office and office != "-":
                agents.append({
                    "group": current_group,
                    "office": office,
                    "area": area,
                    "phone": phone,
                    "email": email,
                })

    return agents


def generate_outreach_email(agent: dict) -> str:
    """
    Generate a personalized outreach email for a given agent.
    """
    company_name = agent["office"]
    area = agent["area"]
    email_addr = agent["email"]
    phone = agent["phone"]

    # Extract just the company brand from the full office name
    # e.g. "Danbolig Aarhus Ø" → "Danbolig"
    # but keep the full name for the subject
    if agent["group"] in ("Lokale / Uafhængige",):
        brand = company_name
    else:
        # For branded chains, use just the brand name
        brand = agent["group"] if agent["group"] not in ("Lokale / Uafhængige",) else company_name

    # Build the personalized greeting
    greeting = f"Kære team hos {company_name}"
    if email_addr and "@" in email_addr and not email_addr.startswith("(se") and not email_addr.startswith("("):
        greeting = f"Hej"

    subject = f"Samarbejde om flytterengøring — {company_name}"

    body = f"""Emne: {subject}

{greeting}

Jeg er medstifter af Rendetalje, et rengøringsfirma i Aarhus der specialiserer sig i flytterengøring.

Jeg vil gerne foreslå et partnerskab: Når I har solgt en bolig og køberen skal bruge flytterengøring (eller sælgeren skal have tømt/tømme deres ejendom før overlevering), kan vi klare rengøringsdelen professionelt og til tiden.

Vi tilbyder:
- Fast track booking (1-3 dages varsel)
- Dokumenteret kvalitet med billeder før/efter
- Fast rabat til jeres kunder

Område: {area} — vi dækker hele Aarhus-området, inkl. {area}.

Giver det mening at tage en kort uforpligtende snak? Jeg ringer gerne forbi jeres kontor.

Med venlig hilsen
Jonas
Rendetalje.dk - 22 65 02 26
"""
    return body.strip()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print("=" * 60)
    print("  EJENDOMSMÆGLER OUTREACH GENERATOR")
    print(f"  Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)

    # Parse agents
    agents = parse_agents_md(AGENTS_FILE)

    if not agents:
        print(f"\nERROR: No agents found in {AGENTS_FILE}")
        print("Make sure the file exists and has the expected format.")
        return 1

    print(f"\nFound {len(agents)} agent offices:")
    print(f"  Groups detected: {sorted(set(a['group'] for a in agents))}")
    print()

    # Generate outreach content
    lines = []
    lines.append("# Ejendomsmægler-partnerskab — Outreach Plan (Genereret)")
    lines.append("")
    lines.append(f"*Genereret: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*")
    lines.append("")
    lines.append(f"*Baseret på {len(agents)} mæglerkontorer i Aarhus-området*")
    lines.append("")
    lines.append("---")
    lines.append("")

    for i, agent in enumerate(agents, 1):
        company_name = agent["office"]
        area = agent["area"]
        group = agent["group"]
        email = agent["email"]
        phone = agent["phone"]

        email_body = generate_outreach_email(agent)

        lines.append(f"## {i}. {company_name}")
        lines.append("")
        lines.append(f"**Gruppe:** {group}")
        lines.append(f"**Område:** {area}")
        lines.append(f"**Telefon:** {phone}")
        lines.append(f"**Email:** {email}")
        lines.append("")
        lines.append("### Udkast til e-mail")
        lines.append("")
        lines.append("```")
        lines.append(email_body)
        lines.append("```")
        lines.append("")
        lines.append("---")
        lines.append("")
        lines.append("")

    # Write outreach file
    content = "\n".join(lines)
    OUTREACH_FILE.write_text(content, encoding="utf-8")

    print(f"✅ Wrote {len(agents)} outreach emails to {OUTREACH_FILE}")
    print(f"\nSummary:")
    print(f"  Total agents:     {len(agents)}")
    print(f"  Groups:           {len(set(a['group'] for a in agents))}")
    print(f"  Output file:      {OUTREACH_FILE}")

    # Print first email as preview
    print(f"\n{'─' * 60}")
    print("  PREVIEW — First email:")
    print(f"{'─' * 60}")
    print(generate_outreach_email(agents[0]))
    print()

    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
