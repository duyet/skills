# @duyet/skills

> Production-quality skills for Claude Code agents

A curated collection of agent skills covering engineering discipline, task decomposition, frontend design, orchestration patterns, and more.

## Skills

**Skills** are reusable instructions and patterns that AI agents can leverage to perform specific tasks. Each skill is self-contained with metadata (name, description) and detailed instructions that agents use to execute work consistently.

The skills ecosystem enables:
- **Compose** - Build complex workflows from simple skills
- **Share** - Distribute skills across teams and projects
- **Version** - Track changes and improvements over time
- **Discover** - Find and use skills from the community

For more information:
- [skills.sh](https://skills.sh) - Browse and discover skills
- [What are Skills?](https://agentskills.io/what-are-skills) - Understanding the skills ecosystem
- [Skills Specification](https://agentskills.io/specification) - Technical specification for skills
- [Skills Documentation](https://github.com/vercel-labs/agent-skills) - Learn how to create skills
- [duyet/claude-plugins](https://github.com/duyet/claude-plugins) - Full plugin collection with agents and commands

## About This Repository

This repository contains skills that I use daily for software development, ranging from core engineering principles to specialized domain knowledge. These skills have been refined through real-world usage and help maintain consistent quality across projects.

Each skill is self-contained in its own folder with a `SKILL.md` file containing the instructions and metadata that AI agents use. Browse through these skills to get inspiration for your own skills or to understand different patterns and approaches.

### Categories

- **Core Engineering** - Fundamental principles for sustainable code
- **Development Patterns** - Language and framework best practices
- **Frontend & Design** - UI/UX guidelines and patterns
- **Orchestration** - Multi-agent coordination patterns
- **Prompt Engineering** - Provider-specific guidance
- **Domain Specific** - ClickHouse, ML training, monitoring
- **Meta Skills** - Personal knowledge and context

## Install

Install via the open [Skills](https://skills.sh) ecosystem. Works with:
- Claude Code
- Cursor
- GitHub Copilot
- Gemini
- Windsurf
- And 15+ other AI agents

```bash
# Install all skills
bunx skills add duyet/skills

# Install individual skills
bunx skills add duyet/skills --skill engineering-discipline
bunx skills add duyet/skills --skill task-decomposition
bunx skills add duyet/skills --skill frontend-design
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
| `prompt-engineering` | Comprehensive guidance for Claude (Anthropic), Gemini (Google), and Grok (xAI) with reference documentation |

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
bun run list

# Format all skill files
bun run format

# Validate skill structure
bun run validate

# Generate/update README
bun run generate:readme
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

**duyet** - [GitHub](https://github.com/duyet) | [duyet.net](https://duyet.net)

## Related

- [claude-plugins](https://github.com/duyet/claude-plugins) - Full plugin collection with agents and commands
- [duyetbot](https://github.com/duyet/duyetbot) - AI agent powered by Claude
