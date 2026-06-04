## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.

## 2024-06-04 - Eager Load Initial Route for Faster FCP
**Learning:** Using `React.lazy()` for the initial/root route component (e.g., `Home` in `src/App.tsx`) introduces an unnecessary network roundtrip that delays the First Contentful Paint (FCP).
**Action:** Eagerly import critical initial routes instead of lazy loading them to prevent loading spinner flashes and improve perceived performance.
