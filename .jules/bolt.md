## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Prevent Re-allocation of Static Arrays
**Learning:** Initializing static arrays or objects directly inside a React component's render loop (like inline arrays passed to `.map()`) causes them to be re-allocated on every single render. This introduces unnecessary garbage collection pressure and can impact performance, particularly on complex pages like Home.
**Action:** Extract static arrays and objects (e.g., features, steps, simple maps) outside of the component definition entirely. This ensures they are only allocated once when the module loads, avoiding redundant allocations during render cycles.
