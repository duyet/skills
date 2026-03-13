# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A skills package for Claude Code agents (`@duyet/skills`). Each skill is a directory containing a single `SKILL.md` file with YAML frontmatter (`name`, `description`) and markdown instructions.

## Commands

```bash
bun run validate          # Validate all skills have proper SKILL.md + frontmatter
bun run format            # Format with prettier
bun run generate:readme   # Regenerate README.md from skill definitions
bun run list              # List all skill directories
```

## Architecture

- **Skills** live in top-level directories (e.g., `quality-gates/SKILL.md`)
- **Scripts** in `scripts/` handle validation and README generation (Node.js, CommonJS)
- **`generate-readme.js`** has a hardcoded `CATEGORIES` map — update it when adding/removing skills
- **`validate-skills.js`** checks: frontmatter exists, has `name` and `description`, `name` matches directory name
- **`AGENTS.md`** defines team agent coordination patterns (leader/senior/junior)

## SKILL.md Format

```markdown
---
name: directory-name        # Must match the containing directory name
description: One-line text   # Used by generate-readme and skill selection
---

Instructions for the agent...
```

## Versioning

Semver in `package.json`: new skill = minor, breaking change = major, docs/bugfix = patch.

## Commit Convention

Semantic commits with `skills` scope: `feat(skills): add new-skill`

Co-author: `Co-Authored-By: duyetbot <bot@duyet.net>`
