## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.

## 2024-05-24 - Hoist Large Static Objects to Module Scope
**Learning:** In React components, declaring large, deeply nested static objects (like massive JSON-LD schemas or huge geographical lists) inside the component body forces them to be completely recreated on every single render cycle or route change. While garbage collection handles this, the continuous allocation and deallocation pressure causes measurable micro-stutters and main-thread delays, especially during frequent state updates or navigation.
**Action:** Always hoist completely static arrays, complex nested objects, and pre-computed reference data to the module scope (outside the React component). Only define objects inside the component if their structure directly depends on props, state, or hooks (like dynamic paths).
