## 2024-05-24 - Prevent Redundant Computations with useMemo
**Learning:** In React components like `PriceCalculator`, using `useEffect` to derive state from props and update local state (e.g. `estimate`) causes an immediate secondary re-render.
**Action:** Replace `useEffect` that only sets state with `useMemo` to compute derived data synchronously during render, saving unnecessary render cycles.
## 2024-05-29 - Use `replace_with_git_merge_diff` instead of `patch` for SEARCH/REPLACE diffs
**Learning:** The standard Unix `patch` command does not natively parse Git merge conflict markers (`<<<<<<< SEARCH`, `=======`, `>>>>>>> REPLACE`). When saving diffs using this format to a temporary file (e.g., `patch.diff`) and applying them with `patch`, it will fail with errors like "Only garbage was found in the patch input."
**Action:** When performing targeted code modifications using the SEARCH/REPLACE format, always use the dedicated `replace_with_git_merge_diff` tool instead of manually creating files and running `patch` via Bash.
