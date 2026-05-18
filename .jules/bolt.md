## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.

## 2024-05-25 - Prevent Re-allocation in map Callbacks
**Learning:** Instantiating static objects (e.g. `const imgMap = {...}`) inside a `.map()` callback or within a component body causes the object to be newly allocated on every iteration/render. This creates unnecessary garbage collection overhead.
**Action:** Move static mapping objects out of the component body to module scope so they are only allocated once.
