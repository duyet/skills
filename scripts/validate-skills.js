#!/usr/bin/env node

/**
 * Validate skills structure
 * Ensures each skill has proper SKILL.md with frontmatter
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.dirname(__dirname);
const errors = [];
const warnings = [];

function validateSkill(skillDir) {
  const skillName = path.basename(skillDir);
  const skillFile = path.join(skillDir, 'SKILL.md');

  if (!fs.existsSync(skillFile)) {
    errors.push(`${skillName}: Missing SKILL.md`);
    return false;
  }

  const content = fs.readFileSync(skillFile, 'utf8');
  const lines = content.split('\n');

  // Check for frontmatter
  if (!lines[0].startsWith('---')) {
    errors.push(`${skillName}: Missing frontmatter opening`);
    return false;
  }

  // Check for name in frontmatter
  const nameMatch = content.match(/^name:\s*(.+)$/m);
  if (!nameMatch) {
    errors.push(`${skillName}: Missing 'name' in frontmatter`);
    return false;
  }

  const name = nameMatch[1].trim();
  if (name !== skillName) {
    warnings.push(`${skillName}: Name mismatch - frontmatter says "${name}"`);
  }

  // Check for description in frontmatter
  if (!/^description:\s*(.+)$/m.test(content)) {
    warnings.push(`${skillName}: Missing 'description' in frontmatter`);
  }

  // Check for frontmatter closing
  if (content.indexOf('---', 3) === -1) {
    errors.push(`${skillName}: Missing frontmatter closing`);
    return false;
  }

  return true;
}

function main() {
  const entries = fs.readdirSync(SKILLS_DIR, { withFileTypes: true });
  let validCount = 0;

  for (const entry of entries) {
    if (entry.isDirectory() && entry.name !== 'scripts' && !entry.name.startsWith('.')) {
      if (validateSkill(path.join(SKILLS_DIR, entry.name))) {
        validCount++;
      }
    }
  }

  if (warnings.length > 0) {
    console.warn('\n⚠️  Warnings:\n' + warnings.map(w => `  - ${w}`).join('\n'));
  }

  if (errors.length > 0) {
    console.error('\n❌ Errors:\n' + errors.map(e => `  - ${e}`).join('\n'));
    process.exit(1);
  }

  console.log(`\n✅ All ${validCount} skills are valid!\n`);
}

main();
