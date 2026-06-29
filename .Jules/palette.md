## 2024-05-04 - Explicit ARIA Radiogroups for Custom Controls
**Learning:** Custom input groups acting as radio buttons (like button-based selection arrays) are not inherently connected by standard HTML linkage (`htmlFor`). They require explicit ARIA grouping using `role="radiogroup"` and `aria-labelledby` on the container, and `role="radio"` and `aria-checked` on the items to ensure screen reader users understand the relationship and state of the options.
**Action:** Always apply `role="radiogroup"`, `aria-labelledby`, `role="radio"`, and `aria-checked` to custom button-based selection options instead of relying on standard inputs, and pair this with clear `focus-visible` styling for keyboard navigators.

## 2024-05-03 - Complex Form Labelling
**Learning:** In step-based or dynamic forms like `MultiStepForm` and `PriceCalculator`, form elements and `<label>` tags are sometimes visually separated or functionally wrapped, causing developers to forget `htmlFor` and `id` linking. Furthermore, custom components acting like radio buttons (e.g. Frequency Selector) need explicitly defined `role="radiogroup"` on the wrapper and `role="radio"`, `aria-checked` on the buttons to remain accessible to screen readers, instead of standard `htmlFor` label linkage.
**Action:** When adding new form fields or complex multi-step wizards, always ensure standard `<input>`/`<textarea>` elements use paired `htmlFor`/`id` combinations. For custom input groups (like button-based selection arrays), explicitly apply ARIA grouping (`radiogroup`) and states (`aria-checked`).

## 2024-05-01 - Accessible Navigation and Danish Localization
**Learning:** Using `focus-visible` classes ensures that keyboard users still receive focus rings while mouse users do not, which improves the UX by preventing unwanted rings on click. Additionally, accessibility attributes like `aria-label` must be localized properly (e.g., from 'Toggle menu' to 'Åbn menu'/'Luk menu' in Danish) to ensure screen readers communicate properly in the application's locale.
**Action:** Use `focus-visible` classes instead of generic `focus` classes for all newly added interactive elements, and verify that ARIA strings match the application's native language context.

## 2026-06-29 - Mobile Menu ARIA & Keyboard Accessibility
**Learning:** Toggle buttons that control expandable sections (like a mobile menu) require `aria-expanded` to reflect their state and `aria-controls` to point to the expandable container's ID, so screen readers understand the relationship. Additionally, custom mobile menus should include an `Escape` key listener to allow keyboard users to easily dismiss the menu without having to tab back to the close button.
**Action:** Always pair `aria-expanded` and `aria-controls` on disclosure widgets/toggles and ensure full keyboard support by adding `Escape` key handlers to easily dismiss dynamic overlays.
