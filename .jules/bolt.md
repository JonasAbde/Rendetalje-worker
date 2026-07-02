## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2025-03-08 - Eager Loading Initial Route
**Learning:** Code-splitting the default/initial route (e.g., using `React.lazy` for `Home` in `App.tsx`) is a common anti-pattern that delays First Contentful Paint (FCP) because the browser must wait for React to initialize before fetching the required JS chunk.
**Action:** Always eagerly load the initial landing page/root component and only apply lazy loading to secondary routes that the user navigates to later.
