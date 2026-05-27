## Title
Bug: Search Filter Returns Inconsistent Results in Browse Section

## Severity
P1 – Search Functionality Issue

## Description
The browse page search and filter system sometimes returns unrelated or incomplete donation listings when users apply filters or keywords.

## Steps to Reproduce
1. Open the Browse Donations page
2. Apply category or keyword filters
3. Search for specific donation items
4. Observe returned results

## Expected Behavior
Search and filter functionality should return accurate and relevant donation listings based on selected filters and keywords.

## Actual Behavior
- Irrelevant listings appear in results
- Some matching donations do not display
- Filters behave inconsistently after multiple searches
- Search results sometimes fail to refresh properly

## Suggested Fixes
- Improve search query handling
- Optimize filter state management
- Add proper backend filtering validation
- Refresh results dynamically after filter updates

## Labels
bug P1 search frontend backend QA
