## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Avoid Static Arrays/Objects Inside Components
**Learning:** React components that define static arrays or objects inside the component body, such as `navLinks` in `Header` or `imgMap` in `Home`, trigger a re-allocation of these data structures on every render cycle. This increases garbage collection pressure and can unnecessarily impact performance, especially in components that re-render frequently.
**Action:** Move static data structures like configuration arrays and constant mapping objects outside of component definitions into the module scope.
