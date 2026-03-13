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

| `task-decomposition` | Break down complex tasks into parallel workstreams for efficient execution. Use when planning multi-component features, large refactors, or any work that benefits from parallelization. |
| `quality-gates` | Systematic quality verification and engineering discipline for sustainable, production-ready code. Use when validating completed work, conducting code reviews, or ensuring production readiness. |
| `task-loop` | Iterative execution methodology. Small steps, verify each, adapt based on results. |

### Development Patterns

| `typescript-patterns` | TypeScript best practices, strict typing patterns, and type safety strategies. Use when implementing TypeScript code with focus on type correctness and maintainability. |
| `backend-api-patterns` | Backend and API implementation patterns for scalability, security, and maintainability. Use when building APIs, services, and backend infrastructure. |
| `react-nextjs-patterns` | React and Next.js implementation patterns for performance and maintainability. Use when building frontend components, pages, and applications with React ecosystem. |

### Frontend & Design

| `frontend-design` | Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics. |

### Orchestration & Coordination

| `orchestration` | Orchestrate complex work through parallel agent coordination. Decompose requests into task graphs, spawn background workers, and synthesize results elegantly. Use for multi-component features, large investigations, or any work benefiting from parallelization. |
| `team-coordination` | Spawn and coordinate team-agents and orchestration patterns for parallel execution. Use for complex multi-component work. |
| `transparency` | Patterns for showing thinking process and execution chain. Every step visible, every decision traceable. |

### Prompt Engineering

| `claude-prompting` | N/A |
| `gemini-prompting` | N/A |
| `grok-prompting` | N/A |

### Domain Specific

| `clickhouse` | MUST USE when reviewing ClickHouse schemas, queries, or configurations. Contains 28 rules that MUST be checked before providing recommendations. Always read relevant rule files and cite specific rules in responses. |
| `clickhouse-monitoring` | Specialized knowledge for the ClickHouse Monitor dashboard. Use this skill when: working with ClickHouse monitoring dashboards, analyzing query performance, writing ClickHouse system table queries, developing dashboard features, or integrating with the ClickHouse Monitor API. Covers query monitoring, table management, merge operations, system metrics, and ClickHouse version compatibility. |
| `unsloth-training` | Fine-tune LLMs with Unsloth using GRPO or SFT. Supports FP8, vision models, mobile deployment, Docker, packing, GGUF export, dataset preparation, synthetic data, MLX (Apple Silicon). Use when: train with GRPO, fine-tune, reward functions, SFT training, FP8 training, vision fine-tuning, phone deployment, docker training, packing, export to GGUF, prepare dataset, synthetic data, install unsloth, environment flags, MLX training. |

### Meta Skills

| `duyet-knowledge` | Maintain and update knowledge base about Duyet Le (@duyet) for personalized assistance |

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
