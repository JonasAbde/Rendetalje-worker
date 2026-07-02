## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Eagerly import initial route to reduce network roundtrip
**Learning:** Using `React.lazy()` for the initial/root route component (e.g., `Home` in `src/App.tsx`) introduces an unnecessary network roundtrip that delays the First Contentful Paint (FCP) because the browser has to first download the main bundle, render the component tree, and then fetch the home route chunk.
**Action:** Eagerly import the critical initial route components instead of lazy-loading them.
