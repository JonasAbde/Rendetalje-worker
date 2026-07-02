## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-06-17 - Eager loading initial routes for optimal FCP
**Learning:** Using React.lazy() for the initial route component introduces an unnecessary network roundtrip on the first page load, delaying First Contentful Paint (FCP).
**Action:** Always eagerly import the critical initial route components (like the main page component in App.tsx) instead of lazy-loading them.
