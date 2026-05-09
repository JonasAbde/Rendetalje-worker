## 2024-05-18 - Improved Mobile Menu Accessibility
**Learning:** For accessibility, mobile menu toggle buttons must include `aria-expanded` reflecting the menu state, `aria-controls` pointing to the menu container's ID, and an `Escape` key listener on the document to ensure correct keyboard and screen reader support.
**Action:** Always verify if dynamic menus, dialogs, and toggles include proper ARIA state attributes and keyboard dismiss controls when auditing components.
