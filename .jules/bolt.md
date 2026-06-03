## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2026-06-03 - Eagerly load initial route for better FCP
**Learning:** Using `React.lazy()` for the initial/root route component (e.g., `Home` in `App.tsx`) introduces an unnecessary network roundtrip that delays the First Contentful Paint (FCP). The browser has to wait for the JavaScript bundle to load, execute, and then fetch the lazy-loaded chunk before rendering anything meaningful.
**Action:** Always eagerly import the critical initial route components while keeping other less frequently accessed routes lazy-loaded.
