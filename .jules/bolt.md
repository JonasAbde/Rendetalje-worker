## 2026-05-02 - React Anti-Pattern: Derived State with useEffect
**Learning:** Found a classic React anti-pattern in `PriceCalculator.tsx`: using `useState` combined with `useEffect` to derive state from component props. This triggers an unnecessary double re-render loop (initial render -> effect fires -> state updates -> second render).
**Action:** Always prefer `useMemo` for deriving values from props directly during the render phase to skip the extra render cycle entirely.
