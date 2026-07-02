
## 2024-05-25 - Prevent Re-allocation in map Callbacks
**Learning:** Instantiating static objects (e.g. `const imgMap = {...}`) inside a `.map()` callback or within a component body causes the object to be newly allocated on every iteration/render. This creates unnecessary garbage collection overhead.
**Action:** Move static mapping objects out of the component body to module scope so they are only allocated once.
