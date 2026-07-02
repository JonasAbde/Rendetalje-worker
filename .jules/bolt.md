## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Eagerly Load Initial Routes
**Learning:** Using `React.lazy()` for the initial/root route component introduces an unnecessary network roundtrip that delays the First Contentful Paint (FCP) and negates the benefits of code splitting since the initial route is always required on load.
**Action:** Eagerly import critical initial routes (like the `Home` page) to optimize FCP and reserve `React.lazy()` for secondary routes that aren't immediately necessary.
