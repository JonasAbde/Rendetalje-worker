## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.

## 2024-05-24 - Prevent Redundant Memory Allocation in Loops and Renders
**Learning:** Defining static mappings (arrays or objects) inside React component definitions or `.map()` loops causes them to be re-allocated on every iteration and render cycle. This causes unnecessary garbage collection pressure and can lead to performance regressions.
**Action:** Always move static arrays and objects that map values outside the component to module scope as constants.
