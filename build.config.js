import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  outDir: './bin',
  entries: [
    {
      input: './scripts/index',
      outDir: './bin',
      name: 'index',
    }
  ],
  clean: true,
  rollup: {
    esbuild: {
      minify: true,
    },
  },
  sourcemap: true,
  externals: [
    'commander',
    '@clack/prompts',
    'semver',
    '@npmcli/git',
  ]
})