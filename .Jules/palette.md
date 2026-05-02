## 2024-05-02 - Form Labels Accessibility
**Learning:** Isolated form fields in complex step-based forms (like MultiStepForm) often lack explicit `id` and `htmlFor` binding, preventing screen readers from associating the label with the input and preventing users from clicking labels to focus fields.
**Action:** Always ensure standard form `<label>` and `<input>`/`<textarea>` pairs use explicit `htmlFor` and `id` attributes when they are not nested.
