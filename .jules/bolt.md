## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Eagerly Load Initial Routes for Faster FCP
**Learning:** Using `React.lazy()` for the initial root route (e.g., the Home component) introduces an unnecessary network roundtrip that delays the First Contentful Paint (FCP) by waiting for the JS bundle to be fetched and parsed before rendering.
**Action:** Always eagerly import the critical initial route components to ensure immediate rendering, and only lazy-load secondary routes that the user might navigate to later.
