## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-18 - Improve FCP with eager initial route loading
**Learning:** In React Router setups using `React.lazy()` for code splitting, lazily loading the initial/root route component (e.g., `Home` in `App.tsx`) creates an unnecessary network roundtrip on initial page load, delaying the First Contentful Paint (FCP).
**Action:** Always eagerly import the initial route component using a direct `import` statement. Reserve `React.lazy()` for routes that are navigated to after the initial load.
