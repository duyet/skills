#!/usr/bin/env node

/**
 * Generate README.md from skill definitions
 * Extracts name and description from each SKILL.md
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.dirname(__dirname);
const CATEGORIES = {
  'Core Engineering': [
    'engineering-discipline',
    'quality-gates',
  ],
  'Development Patterns': [
    'typescript-patterns',
    'backend-api-patterns',
    'react-nextjs-patterns',
  ],
  'Frontend & Design': [
    'frontend-design',
  ],
  'Orchestration & Coordination': [
    'orchestration',
    'transparency',
  ],
  'Prompt Engineering': [
    'claude-prompting',
    'gemini-prompting',
    'grok-prompting',
  ],
  'Domain Specific': [
    'clickhouse',
    'clickhouse-monitoring',
    'unsloth-training',
  ],
  'Meta Skills': [
    'duyet-knowledge',
  ],
};

function extractSkillInfo(skillName) {
  const skillFile = path.join(SKILLS_DIR, skillName, 'SKILL.md');

  if (!fs.existsSync(skillFile)) {
    return { name: skillName, description: 'N/A' };
  }

  const content = fs.readFileSync(skillFile, 'utf8');
  const descMatch = content.match(/^description:\s*(.+)$/m);
  const description = descMatch ? descMatch[1].trim() : 'No description';

  return { name: skillName, description };
}

function generateSkillsTable(skills) {
  return skills
    .map((skill) => {
      const info = extractSkillInfo(skill);
      return `| \`${info.name}\` | ${info.description} |`;
    })
    .join('\n');
}

function generateReadme() {
  const sections = [];

  // Header
  sections.push(`# @duyet/skills

> Production-quality skills for Claude Code agents

A curated collection of agent skills covering engineering discipline, task decomposition, frontend design, orchestration patterns, and more.

## Install

\`\`\`bash
npx skills add duyet/skills
\`\`\`

Or install individual skills:

\`\`\`bash
npx skills add duyet/skills --skill <skill-name>
\`\`\`

## Available Skills
`);

  // Categories
  for (const [category, skills] of Object.entries(CATEGORIES)) {
    sections.push(`### ${category}\n`);
    sections.push(generateSkillsTable(skills));
    sections.push('');
  }

  // Development section
  sections.push(`## Development

### Scripts

\`\`\`bash
# List all skills
npm run list

# Format all skill files
npm run format

# Validate skill structure
npm run validate

# Regenerate this README
npm run generate:readme
\`\`\`

### Adding a New Skill

1. Create directory: \`mkdir new-skill\`
2. Create \`new-skill/SKILL.md\` with frontmatter
3. Run validation: \`npm run validate\`
4. Regenerate README: \`npm run generate:readme\`
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
`);

  return sections.join('\n');
}

function main() {
  const readme = generateReadme();
  fs.writeFileSync(path.join(SKILLS_DIR, 'README.md'), readme);
  console.log('✅ README.md generated!\n');
}

main();
