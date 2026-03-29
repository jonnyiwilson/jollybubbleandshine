# Copilot Chat Workspace Instructions

## 1. Purpose
- Keep this file as the first point of truth for GitHub Copilot Chat in this workspace.
- Help copilots (AI agents) align with the project context quickly.

## 2. What I found
- Repository root currently appears empty (no source files detected in this workspace path yet).
- No existing `.github/copilot-instructions.md`, `AGENTS.md`, or other special agent metadata files were present.

## 3. Workflows
### Discover conventions
- Search for config files in these paths:
  - `.github/copilot-instructions.md`
  - `AGENTS.md`
  - `README.md`
  - `CONTRIBUTING.md`
  - `docs/**`
- If none exist, create `.github/copilot-instructions.md` (this file) and optional `AGENTS.md` with minimal scaffolding.

### Build & test
- Pending: project has no detected build/test commands yet.
- When available, add the commands here, e.g.:
  - `npm install`
  - `npm test`
  - `dotnet test`

## 4. Coding conventions
- Pending: no language-specific conventions detected due empty current repo state.
- Add from your stack once code exists (JavaScript/TypeScript/Python/C# etc.) with formatting, linting, and branch naming notes.

## 5. Experimentation & macros
- Example prompt for the agent:
  - "Analyze this repo and suggest a unit testing scaffold for the currently missing test layer."
  - "Locate the main entrypoint and return an execution plan for implementing feature `X`."

## 6. Next steps for maintainers
1. Add the first source files, then update this doc with:
   - actual project type and framework
   - local dev commands (install/build/test/lint)
   - environment setup (Docker/Node/Poetry/SDK versions)
2. Optionally add an `AGENTS.md` to define role-specific assistants.
3. Add `CONTRIBUTING.md` and `README.md` if absent.
