## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-06-10 - Hoisting Static Data

**Learning:** Large static objects like JSON-LD schemas in React components recreate on every render causing unnecessary garbage collection pressure and potentially performance drops.
**Action:** Hoist these objects to the module scope so they are only created once, preserving any dynamically generated schemas like `breadcrumbSchema` inside the component.
