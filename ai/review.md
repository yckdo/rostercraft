# Rostercraft — AI Code Review

Review the Git diff against the requirements in README.md.

Check:
1. The first 10 locations cost €29 each per month.
2. Additional locations cost €24 each per month.
3. Annual billing applies a 20% discount exactly once.
4. TC-12 returns €270.40 per month for 12 locations.
5. Existing tests remain unchanged.
6. Only intended files are modified.
7. Identify possible regressions and missing edge cases.

Return:
- PASS or FAIL
- Findings with severity
- Tests to rerun on the Vercel preview
- Final recommendation

Do not modify any files.