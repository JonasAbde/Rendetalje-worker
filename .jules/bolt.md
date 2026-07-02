## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-24 - Improve FCP by eagerly loading the initial route
**Learning:** Using `React.lazy()` for the initial/root route component (e.g., `Home` in `src/App.tsx`) creates a network waterfall on initial load. The browser must download and execute the main bundle before it even knows it needs to fetch the `Home` chunk, delaying the First Contentful Paint (FCP).
**Action:** Always eagerly import the initial route component directly (e.g., `import Home from "./routes/Home";`) while continuing to lazy-load secondary routes.
