## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.

## 2024-05-30 - Prevent Network Waterfall on Initial Load
**Learning:** In a single-page application heavily utilizing `React.lazy()` for route-based code splitting, lazy loading the *initial root route* (e.g., `Home.tsx` in `App.tsx`) causes a critical performance bottleneck. It forces the browser into a network waterfall: fetch the main JS bundle -> parse -> discover it needs the Home chunk -> fetch the Home chunk -> render. This significantly delays the First Contentful Paint (FCP).
**Action:** Always eagerly import the initial root route (`Home`) using a standard import, while keeping secondary routes lazy loaded. This ensures the initial UI renders instantly alongside the main bundle while preserving the code-splitting benefits for the rest of the application.
