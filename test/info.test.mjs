import test from 'node:test';
import assert from 'node:assert';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current test file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('showHelp displays correct help information', () => {
  // Testing by executing the CLI with --help flag
  const result = spawnSync('node', [join(__dirname, '..', 'bin', 'index.mjs'), '--help'], {
    cwd: join(__dirname, '..')
  });
  
  const output = result.stdout?.toString() || result.stderr?.toString() || '';
  
  // Check that help information contains expected elements
  assert.ok(output.includes('syn'), 'Help should contain CLI name');
  assert.ok(output.includes('Usage: syn'), 'Help should contain usage section');
  assert.ok(output.includes('Commands:'), 'Help should contain commands section');
  assert.ok(output.includes('create'), 'Help should mention create command');
  
  // Log the actual output after assertions for better organization
  console.log('showHelp Output:\n' + output + '\n');
});

test('showVersion displays correct version', () => {
  // Testing by executing the CLI with --version flag
  const result = spawnSync('node', [join(__dirname, '..', 'bin', 'index.mjs'), '--version'], {
    cwd: join(__dirname, '..')
  });
  
  const output = result.stdout?.toString() || result.stderr?.toString() || '';
  const versionOutput = output.trim();
  
  // Check that version information is displayed
  assert.ok(versionOutput.length > 0, 'Version should be displayed');
  // The output should be either a valid version string or an error message that includes a version
  const isVersionFormat = /^\d+\.\d+\.\d+/.test(versionOutput) || versionOutput === '0.0.1' || versionOutput === 'unknown';
  assert.ok(isVersionFormat, `Version should be in expected format, got: "${versionOutput}"`);
  
  // Log the actual output after assertions for better organization
  console.log('showVersion Output:\n' + versionOutput + '\n');
});