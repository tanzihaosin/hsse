import { spawnSync } from 'node:child_process'

const out = process.argv[2] ?? '.output/manifest.json'
const result = spawnSync('npx', ['vitest', 'run', 'src/pages/home/model/manifest.test.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, MANIFEST_OUT: out },
})

if (result.status === 0) console.log(`Манифест записан в ${out}`)
process.exit(result.status ?? 1)
