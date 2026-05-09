## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Prevent Reallocation in Render Loops
**Learning:** In React components like `Home.tsx`, defining static arrays or mappings (e.g. `imgMap`) inside `.map` render loops causes unnecessary dictionary reallocation on every iteration and render cycle, applying pressure on the garbage collector. While minor on its own, this is an anti-pattern that can compound in large lists.
**Action:** Move static data objects to the module scope (outside component functions) and ensure to document the performance impact directly in the code with comments as per strict role guidelines.
