## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.

## 2024-05-24 - Prevent Re-allocation of Static Arrays in React Components
**Learning:** In React components, inline arrays or objects used for mapping (e.g. `{[1, 2, 3].map(...)}`) are re-allocated on every single render. This causes unnecessary garbage collection and memory churn.
**Action:** Extract static arrays and objects to constant variables outside the component definition to ensure they are only allocated once.
