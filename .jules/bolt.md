## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Eagerly import initial route to improve FCP
**Learning:** Using `React.lazy()` for the root or initial route (like `Home`) introduces an unnecessary extra network roundtrip. This delays the First Contentful Paint (FCP) in a way that is specific to how routing boundaries align with initial chunks.
**Action:** Always eagerly import the primary/initial route component (e.g. `Home` in `App.tsx`) to avoid the extra request overhead and speed up initial page load, while reserving lazy loading for secondary routes.
