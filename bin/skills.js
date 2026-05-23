#!/usr/bin/env node
// npx skills add <owner>/<repo>[@ref] [--skill <name>] [--dest <path>]
// Installs SKILL.md-bearing directories from a GitHub repo into a local skills folder.

const fs = require('fs');
const path = require('path');

const API = 'https://api.github.com';
const UA = '@duyet/skills-cli';

function authHeaders() {
  const h = { 'User-Agent': UA, Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
}

async function gh(url) {
  const res = await fetch(url, { headers: authHeaders() });
  if (!res.ok) throw new Error(`GitHub ${res.status} ${res.statusText}: ${url}`);
  return res.json();
}

async function getDefaultBranch(owner, repo) {
  const data = await gh(`${API}/repos/${owner}/${repo}`);
  return data.default_branch;
}

async function getTree(owner, repo, ref) {
  const data = await gh(`${API}/repos/${owner}/${repo}/git/trees/${ref}?recursive=1`);
  if (data.truncated) console.warn('warn: repo tree truncated; some files may be missing');
  return data.tree;
}

function findSkillDirs(tree) {
  const dirs = new Map();
  for (const e of tree) {
    if (e.type !== 'blob') continue;
    if (!e.path.endsWith('/SKILL.md') && e.path !== 'SKILL.md') continue;
    const dir = e.path === 'SKILL.md' ? '.' : e.path.slice(0, -'/SKILL.md'.length);
    const name = dir === '.' ? 'root' : path.basename(dir);
    dirs.set(name, dir);
  }
  return dirs;
}

async function downloadFile(owner, repo, ref, repoPath, destPath) {
  const raw = `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${repoPath}`;
  const res = await fetch(raw, { headers: authHeaders() });
  if (!res.ok) throw new Error(`fetch ${raw} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, buf);
}

async function installSkill(owner, repo, ref, repoDir, destRoot, name, tree) {
  const prefix = repoDir === '.' ? '' : repoDir + '/';
  const files = tree.filter(e => e.type === 'blob' && (repoDir === '.' ? true : e.path.startsWith(prefix)));
  let count = 0;
  for (const f of files) {
    const rel = repoDir === '.' ? f.path : f.path.slice(prefix.length);
    if (!rel) continue;
    const dest = path.join(destRoot, name, rel);
    await downloadFile(owner, repo, ref, f.path, dest);
    count++;
  }
  return count;
}

function parseArgs(argv) {
  const args = { positional: [], flags: {} };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) args.flags[a.slice(2)] = argv[++i];
    else args.positional.push(a);
  }
  return args;
}

function usage() {
  console.log(`Usage:
  npx skills add <owner>/<repo>[@ref] [--skill <name>] [--dest <path>]

Examples:
  npx skills add duyet/skills
  npx skills add duyet/skills --skill clickhouse
  npx skills add duyet/skills@master --dest .claude/skills

Env:
  GITHUB_TOKEN   optional, raises rate limit`);
}

async function cmdAdd(args) {
  const target = args.positional[0];
  if (!target) { usage(); process.exit(1); }
  const [repoSpec, refSpec] = target.split('@');
  const [owner, repo] = repoSpec.split('/');
  if (!owner || !repo) { console.error('repo must be <owner>/<repo>'); process.exit(1); }
  const ref = refSpec || await getDefaultBranch(owner, repo);
  const dest = path.resolve(args.flags.dest || '.claude/skills');
  const only = args.flags.skill;

  console.log(`Fetching ${owner}/${repo}@${ref} ...`);
  const tree = await getTree(owner, repo, ref);
  const skills = findSkillDirs(tree);
  if (skills.size === 0) { console.error('no SKILL.md files found in repo'); process.exit(1); }

  let toInstall;
  if (only) {
    if (!skills.has(only)) {
      console.error(`skill "${only}" not found. Available: ${[...skills.keys()].sort().join(', ')}`);
      process.exit(1);
    }
    toInstall = new Map([[only, skills.get(only)]]);
  } else {
    toInstall = skills;
  }

  let totalFiles = 0;
  for (const [name, dir] of toInstall) {
    process.stdout.write(`  installing ${name} ... `);
    const n = await installSkill(owner, repo, ref, dir, dest, name, tree);
    totalFiles += n;
    console.log(`${n} files`);
  }
  console.log(`\nInstalled ${toInstall.size} skill(s), ${totalFiles} files into ${dest}`);
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  const args = parseArgs(rest);
  if (cmd === 'add') return cmdAdd(args);
  if (!cmd || cmd === '--help' || cmd === '-h') return usage();
  console.error(`unknown command: ${cmd}`); usage(); process.exit(1);
}

main().catch(e => { console.error('error:', e.message); process.exit(1); });
