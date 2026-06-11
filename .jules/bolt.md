## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Eagerly Load Critical Initial Routes for Better FCP
**Learning:** Using `React.lazy()` for the initial or root route component (e.g., `Home` in `src/App.tsx`) introduces an unnecessary network roundtrip to fetch the chunk, which noticeably delays the First Contentful Paint (FCP) of the application.
**Action:** Eagerly import the critical initial route components using standard static imports, reserving `React.lazy()` for non-initial routes or heavy components loaded below the fold.
