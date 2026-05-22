## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Hoist massive static schemas to module scope
**Learning:** Large static objects like JSON-LD schemas declared inside React components are re-created on every render, adding unnecessary memory overhead and garbage collection pressure.
**Action:** Move massive static structures (e.g. `localBusinessSchema`, `organizationSchema`) to the module scope outside of the component to improve performance. Maintain dynamic state structures inside the component.
