## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.

## 2024-05-25 - Prevent Redundant Object Allocation in .map Loops
**Learning:** Defining static mapping objects (like `imgMap`) inside a `.map` callback or within the render loop causes unnecessary memory allocation and garbage collection pressure on every iteration and component render cycle.
**Action:** Move static data structures (arrays, objects) that do not depend on component state or props outside the component to module scope.
