## 2024-05-17 - In-Memory Rate Limiter Memory Leak
**Vulnerability:** The in-memory rate limiter for the `/api/quote` Cloudflare function used a `Map` that only grew and never removed expired entries, leading to a memory leak in long-lived isolates (Out-Of-Memory / Denial-of-Service risk).
**Learning:** In edge functions or workers where variables persist across requests (isolates), unbound memory growth is a critical vulnerability.
**Prevention:** Implement a time-throttled garbage collection mechanism (`lastCleanup`) that periodically deletes expired keys from the `Map`. Avoid calling `map.clear()` blindly (which bypasses limits) and ensure O(N) cleanup iteration is throttled to prevent CPU starvation on the hot path.
