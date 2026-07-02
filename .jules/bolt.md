## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-18 - Avoid lazy loading for critical initial routes
**Learning:** Using `React.lazy()` for the initial root route component (e.g., `Home`) introduces an unnecessary network roundtrip that delays the First Contentful Paint (FCP). It's an anti-pattern to lazy load the very first thing the user needs to see.
**Action:** Always eagerly import the critical initial route(s) in the application. Reserve `React.lazy()` for routes or components that are not immediately visible upon initial load.
