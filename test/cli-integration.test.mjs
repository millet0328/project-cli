import test from 'node:test';
import assert from 'node:assert';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get the directory name of the current test file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('CLI should run without arguments and show help', () => {
  const result = spawnSync('node', [join(__dirname, '..', 'bin', 'index.mjs')], {
    cwd: join(__dirname, '..')
  });
  
  const output = result.stdout?.toString() || result.stderr?.toString() || '';
  
  // When no command is provided, it should show help
  assert.ok(output.includes('syn'), 'Should contain CLI name in output');
  assert.ok(output.includes('Usage: syn'), 'Should contain usage information');
  assert.ok(output.includes('create [project-name]'), 'Should contain create command');
  
  // Log the actual output after assertions for better organization
  console.log('CLI Output (no args):\n' + output + '\n');
});

test('CLI should handle unknown command gracefully', () => {
  const result = spawnSync('node', [join(__dirname, '..', 'bin', 'index.mjs'), 'unknown-command'], {
    cwd: join(__dirname, '..')
  });
  
  const output = result.stdout?.toString() || result.stderr?.toString() || '';
  
  // Should show error for unknown command
  assert.ok(output.includes('unknown command') || output.includes('help'), 'Should handle unknown command');
  
  // Log the actual output after assertions for better organization
  console.log('CLI Output (unknown command):\n' + output + '\n');
});

test('CLI should handle --version flag', () => {
  const result = spawnSync('node', [join(__dirname, '..', 'bin', 'index.mjs'), '--version'], {
    cwd: join(__dirname, '..')
  });
  
  const output = result.stdout?.toString() || result.stderr?.toString() || '';
  const exitCode = result.status;
  
  // Version command should work without error
  assert.strictEqual(exitCode, 0, 'Version command should exit successfully');
  assert.ok(output.trim().length > 0, 'Should output version information');
  
  // Log the actual output after assertions for better organization
  console.log('CLI Output (--version):\n' + output.trim() + '\n');
});

test('CLI should handle -V flag', () => {
  const result = spawnSync('node', [join(__dirname, '..', 'bin', 'index.mjs'), '-V'], {
    cwd: join(__dirname, '..')
  });
  
  const output = result.stdout?.toString() || result.stderr?.toString() || '';
  const exitCode = result.status;
  
  // Version command should work without error
  assert.strictEqual(exitCode, 0, 'Version command with -V should exit successfully');
  assert.ok(output.trim().length > 0, 'Should output version information');
  
  // Log the actual output after assertions for better organization
  console.log('CLI Output (-V):\n' + output.trim() + '\n');
});

test('CLI should handle --help flag', () => {
  const result = spawnSync('node', [join(__dirname, '..', 'bin', 'index.mjs'), '--help'], {
    cwd: join(__dirname, '..')
  });
  
  const output = result.stdout?.toString() || result.stderr?.toString() || '';
  const exitCode = result.status;
  
  // Help command should work without error
  assert.strictEqual(exitCode, 0, 'Help command should exit successfully');
  assert.ok(output.includes('Commands:'), 'Should contain commands section');
  assert.ok(output.includes('create [project-name]'), 'Should mention create command');
  
  // Log the actual output after assertions for better organization
  console.log('CLI Output (--help):\n' + output + '\n');
});

// Test the create command specifically
test('CLI should handle create command with project name', () => {
  // This test will check if the create command is recognized, but won't actually create a project
  // since that would require user interaction and network requests
  const result = spawnSync('node', [join(__dirname, '..', 'bin', 'index.mjs'), 'create', '--help'], {
    cwd: join(__dirname, '..')
  });
  
  const output = result.stdout?.toString() || result.stderr?.toString() || '';
  const exitCode = result.status;
  
  // Create command should be recognized and show help
  assert.strictEqual(exitCode, 0, 'Create command help should exit successfully');
  assert.ok(output.includes('create'), 'Should contain create command info');
  assert.ok(output.includes('project-name'), 'Should mention project-name argument');
  
  // Log the actual output after assertions for better organization
  console.log('CLI Output (create --help):\n' + output + '\n');
});