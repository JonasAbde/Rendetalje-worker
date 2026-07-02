## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2025-03-05 - Eagerly load initial route to improve First Contentful Paint (FCP)
**Learning:** Avoid using `React.lazy()` for the initial/root route component (e.g., `Home` in `src/App.tsx`). It introduces an unnecessary network roundtrip that delays the First Contentful Paint (FCP).
**Action:** Always import critical initial routes directly (eagerly), and use lazy loading only for non-critical/secondary routes. Follow clean code practices by using named imports (`import { lazy } from 'react'`) instead of `React.lazy()`.
