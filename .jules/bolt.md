## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.

## 2026-06-29 - Eager Load Initial Routes for Faster FCP
**Learning:** Using `React.lazy()` for the initial/root route component (e.g., `Home` in `src/App.tsx`) introduces an unnecessary network roundtrip that delays the First Contentful Paint (FCP).
**Action:** Always eagerly import the critical initial route components instead of lazy-loading them to avoid this penalty.
