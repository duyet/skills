# @duyet/skills

> Production-quality skills for Claude Code agents

A curated collection of agent skills covering engineering discipline, task decomposition, frontend design, orchestration patterns, and more.

## Install

```bash
npx skills add duyet/skills
```

Or install individual skills:

```bash
npx skills add duyet/skills --skill engineering-discipline
npx skills add duyet/skills --skill task-decomposition
npx skills add duyet/skills --skill frontend-design
```

## Available Skills

### Core Engineering

| Skill | Description |
|-------|-------------|
| `engineering-discipline` | Core engineering principles for sustainable, maintainable code |
| `task-decomposition` | Break down complex tasks into parallel workstreams |
| `quality-gates` | Systematic quality verification procedures |
| `task-loop` | Iterative execution methodology with verification steps |

### Development Patterns

| Skill | Description |
|-------|-------------|
| `typescript-patterns` | TypeScript best practices and strict typing patterns |
| `backend-api-patterns` | Backend and API implementation patterns |
| `react-nextjs-patterns` | React and Next.js implementation patterns |

### Frontend & Design

| Skill | Description |
|-------|-------------|
| `frontend-design` | Create distinctive, production-grade frontend interfaces |

### Orchestration & Coordination

| Skill | Description |
|-------|-------------|
| `orchestration` | Intelligent tool selection and parallel execution |
| `team-coordination` | Spawn and coordinate team agents for parallel execution |
| `transparency` | Patterns for showing thinking process and execution chain |

### Prompt Engineering

| Skill | Description |
|-------|-------------|
| `claude-prompting` | Prompt engineering guidance for Claude (Anthropic) |
| `gemini-prompting` | Prompt engineering guidance for Gemini (Google) |
| `grok-prompting` | Prompt engineering guidance for Grok (xAI) |

### Domain Specific

| Skill | Description |
|-------|-------------|
| `clickhouse` | Comprehensive ClickHouse knowledge base |
| `clickhouse-monitoring` | Agent skill for ClickHouse Monitor dashboard |
| `unsloth-training` | Fine-tune LLMs with Unsloth using GRPO or SFT |

### Meta Skills

| Skill | Description |
|-------|-------------|
| `duyet-knowledge` | Knowledge base about @duyet for personalized assistance |

## Development

### Scripts

```bash
# List all skills
npm run list

# Format all skill files
npm run format

# Validate skill structure
npm run validate

# Generate/update README
npm run generate:readme
```

## Versioning

Follow semantic versioning (semver):

| Change Type | Version Bump | Example |
|-------------|--------------|---------|
| Bug fix, docs | Patch | 1.0.0 → 1.0.1 |
| New skill, minor changes | Minor | 1.0.0 → 1.1.0 |
| Breaking change | Major | 1.0.0 → 2.0.0 |

## License

MIT

## Author

**duyet** - [GitHub](https://github.com/duyet)

## Related

- [claude-plugins](https://github.com/duyet/claude-plugins) - Full plugin collection with agents and commands
- [duyetbot](https://github.com/duyet/duyetbot) - AI agent powered by Claude
