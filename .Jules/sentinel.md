## 2025-02-24 - Rate Limit Memory Leak and Temporary Bypass
**Vulnerability:** The `rateLimitHits` Map in the serverless environment could grow unbounded without cleanup, eventually causing memory leaks. When clearing, naive implementations use `Map.clear()`, which causes temporary rate limit bypasses for all concurrent users during high-traffic bursts.
**Learning:** Map limits in long-lived serverless isolates need garbage collection to prevent memory exhaustion. Blindly clearing maps breaks security controls globally.
**Prevention:** Iteratively filter and remove expired map entries based on timestamp rather than executing `Map.clear()`.

## 2025-02-24 - Unhandled 500 Crash via Null JSON Payload
**Vulnerability:** A `null` or Array JSON body sent to `/api/quote` bypassed the `try { await request.json() }` syntax validation, passing validly but crashing later as `TypeError` in functions like `sanitizeObject` and `getValidationError` that expect standard objects, leading to an unhandled HTTP 500. This could be abused for resource exhaustion (DoS).
**Learning:** `JSON.parse` or `request.json()` outputs must be strictly type-checked (`!data || typeof data !== 'object' || Array.isArray(data)`) before destructuring or calling object methods.
**Prevention:** Always implement explicit null and array validation directly following JSON payload parsing in Cloudflare Workers endpoints.

## 2025-02-24 - DoS Risk in Rate Limit Memory Cleanup
**Vulnerability:** In an attempt to prevent memory leaks, an O(N) cleanup iteration over the in-memory map of IP addresses was introduced when size > 1000. However, during a high-traffic burst (legitimate or attack), active unexpired IPs remain in the map, so size > 1000 is still true, and EVERY subsequent request triggers the O(N) iteration, causing massive CPU exhaustion on strict serverless isolates.
**Learning:** O(N) cache or memory-limit cleanup logic must be carefully throttled or avoided on the hot-path in long-running processes to prevent degrading linear performance into quadratic CPU DoS.
**Prevention:** Implement a time-based throttle (e.g., `now - lastCleanup > windowMs`) around cache invalidation routines, ensuring garbage collection happens at most once per cache expiration window.
