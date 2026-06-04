# AI Use Summary

## How AI Was Used in This Project

The Free Sewaa team used GitHub Copilot and other AI tools throughout the semester to accelerate development. This document summarizes how AI was used and how human oversight was maintained.

## Areas Where AI Assisted

### 1. Code Generation
- Express.js route handlers and middleware
- MongoDB/Mongoose schema definitions
- HTML page templates and CSS styling
- JavaScript utility functions
- Jest test cases

### 2. Debugging and Problem Solving
- Identifying root causes of bugs (auth flow, item timestamps)
- Suggesting fixes for CORS configuration
- Debugging MongoDB connection issues
- Optimizing frontend rendering

### 3. Documentation
- Initial markdown structure for various docs
- README templates and badges
- API reference formatting
- Checklist creation

### 4. Testing
- Writing Jest test skeletons
- Generating test data
- Creating test scenarios

### 5. Refactoring
- Suggesting code organization improvements
- Identifying duplicate code
- Recommending architecture changes

## Human Review Process

Every piece of AI-generated code went through this process:

1. **Generation** — AI produces initial code based on team direction
2. **Review** — At least one team member reviews the code
3. **Modification** — Team member adjusts code for correctness and style
4. **Testing** — Code is tested (manual or automated)
5. **Merge** — Code is merged via pull request

## Code That Was NOT AI-Generated

- Security-critical auth logic (reviewed extensively)
- Database schema design
- Project architecture decisions
- Deployment configuration
- Feature scope decisions

## Key Principle

**AI-assisted, not AI-replaced.** Every team member can explain the code areas they own. AI was a productivity tool, not a replacement for understanding.

## Full Audit

For the complete AI code ownership audit with per-member details:
- [docs/AI_CODE_OWNERSHIP_AUDIT.md](../../docs/AI_CODE_OWNERSHIP_AUDIT.md)
- [Individual Portfolio Pages](../08-individual-portfolios/)
