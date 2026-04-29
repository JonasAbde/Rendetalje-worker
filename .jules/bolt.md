## 2026-04-29 - Memoization in PriceCalculator
**Learning:** React re-calculates state variables every time a component re-renders unless wrapped in useMemo. In `PriceCalculator.tsx`, price calculations were running on every re-render (which can happen frequently during form input changes).
**Action:** Always consider `useMemo` for calculations that depend on specific inputs, especially when components might re-render often due to parent state updates or other un-related state changes.
