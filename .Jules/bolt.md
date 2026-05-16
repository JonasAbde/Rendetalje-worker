## 2024-10-24 - Static Map Objects Inside Render Loops
**Learning:** Instantiating static objects (like `imgMap` mapping) inside a `.map` loop within a React render creates unnecessary object allocations on every render cycle, increasing garbage collection pressure and potentially causing micro-stutters in UI.
**Action:** Always move static configuration objects to module scope outside of the React component entirely.
