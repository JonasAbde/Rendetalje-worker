## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-12 - Prevent Redundant Object Allocation in Render Loops
**Learning:** Defining static objects or arrays inside mapping functions within a React component's render method (e.g., `coreServices.map(() => { const imgMap = { ... }; })`) forces the JavaScript engine to re-allocate memory for that object on every iteration and every component re-render, creating unnecessary garbage collection pressure and reducing rendering performance.
**Action:** Extract static mapping objects or arrays to the module scope outside the component function so they are only allocated once during initialization.
