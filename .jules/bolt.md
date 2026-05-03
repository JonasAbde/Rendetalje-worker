## 2024-05-24 - Avoid `useEffect` for Synchronous State Derivation
**Learning:** In React, deriving state from props using `useState` and `useEffect` causes an unnecessary second render cycle (initial render -> effect fires -> state updates -> re-render). In components like `PriceCalculator.tsx`, where derived calculations are purely synchronous, this is an anti-pattern that bloats render time.
**Action:** Always use `useMemo` to compute derived state synchronously during the render phase when the calculation depends solely on props. This prevents the extra render cycle entirely.
