# @duyet/skills

> Production-quality skills for Claude Code agents

A curated collection of agent skills covering engineering discipline, task decomposition, frontend design, orchestration patterns, and more.

## Install

```bash
npx skills add duyet/skills
```

Or install individual skills:

```bash
npx skills add duyet/skills --skill <skill-name>
```

## Available Skills

### Core Engineering

| `quality-gates` | Engineering discipline and systematic quality verification. Core principles, anti-patterns, decision rules, and gate procedures for code review and delivery. |
| `orchestration` | Orchestrate complex work through parallel agent coordination. Decompose tasks into parallel lanes, iterate with verify loops, spawn background workers, and synthesize results. Use for multi-component features, large investigations, or any work benefiting from parallelization. |

### Development Patterns

| `typescript-patterns` | TypeScript best practices, strict typing patterns, and type safety strategies. Use when implementing TypeScript code with focus on type correctness and maintainability. |
| `backend-api-patterns` | Backend and API implementation patterns for scalability, security, and maintainability. Use when building APIs, services, and backend infrastructure. |

### Frontend & Design

| `frontend-design` | Create distinctive, production-grade frontend interfaces with React and Next.js. Design quality, component architecture, performance patterns, and state management. Use when building web components, pages, or applications. |

### Prompt Engineering

| `prompt-engineering` | Comprehensive prompt engineering guidance for Claude (Anthropic), Gemini (Google), and Grok (xAI). Use when crafting prompts to leverage each model's unique capabilities—XML-style tags for Claude, system instructions for Gemini, conversational style for Grok. |

### Domain Specific

| `clickhouse` | MUST USE when reviewing ClickHouse schemas, queries, or configurations. Contains 28 rules that MUST be checked before providing recommendations. Always read relevant rule files and cite specific rules in responses. |
| `clickhouse-monitoring` | Specialized knowledge for the ClickHouse Monitor dashboard. Use this skill when: working with ClickHouse monitoring dashboards, analyzing query performance, writing ClickHouse system table queries, developing dashboard features, or integrating with the ClickHouse Monitor API. Covers query monitoring, table management, merge operations, system metrics, and ClickHouse version compatibility. |
| `unsloth-training` | Fine-tune LLMs with Unsloth using GRPO or SFT. Supports FP8, vision models, mobile deployment, Docker, packing, GGUF export, dataset preparation, synthetic data, MLX (Apple Silicon). Use when: train with GRPO, fine-tune, reward functions, SFT training, FP8 training, vision fine-tuning, phone deployment, docker training, packing, export to GGUF, prepare dataset, synthetic data, install unsloth, environment flags, MLX training. |

### Meta Skills

| `duyetbot-knowledge` | Knowledge base about Duyet Le (@duyet) and duyetbot behavioral patterns. Owner profile, knowledge sources, and execution transparency. |
| `skills-maintenance` | Maintain @duyet/skills repository - add, update, validate skills, generate documentation, and manage releases. Use when making changes to this skills repository. |

## Development

### Scripts

```bash
# List all skills
npm run list

# Format all skill files
npm run format

# Validate skill structure
npm run validate

# Regenerate this README
npm run generate:readme
```

### Adding a New Skill

1. Create directory: `mkdir new-skill`
2. Create `new-skill/SKILL.md` with frontmatter
3. Run validation: `npm run validate`
4. Regenerate README: `npm run generate:readme`
5. Commit with semantic format

## Versioning

Follow semantic versioning (semver):

| Change Type | Version Bump |
|-------------|--------------|
| Bug fix, docs | Patch |
| New skill | Minor |
| Breaking change | Major |

## License

MIT

## Author

**duyet** - [GitHub](https://github.com/duyet)

---

*Auto-generated from skill definitions*
