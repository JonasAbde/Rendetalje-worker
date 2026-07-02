## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Prevent Re-allocation of Static Arrays
**Learning:** Static arrays or objects used inside React components (e.g., `const navLinks = [...]` inside `Header`) are unnecessarily re-allocated and garbage-collected on every re-render.
**Action:** Move static data structures outside the component function body to the module scope to improve render performance and reduce memory pressure.
