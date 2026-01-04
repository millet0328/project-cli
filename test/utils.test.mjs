import test from 'node:test';
import assert from 'node:assert';
import { checkNodeVersion, getPackageVersion } from '../utils/index.mjs';

test('utils index exports all required functions', () => {
  // Check that all expected functions are exported
  assert.strictEqual(typeof checkNodeVersion, 'function', 'checkNodeVersion should be exported');

  assert.strictEqual(typeof getPackageVersion, 'function', 'getPackageVersion should be exported');
  
  // Show which functions were found for better visibility
  console.log('utils exports checkNodeVersion:', typeof checkNodeVersion);
  console.log('utils exports getPackageVersion:', typeof getPackageVersion);
});

test('all exports work correctly', () => {
  // Test that functions can be called without errors
  assert.doesNotThrow(() => {
    const version = getPackageVersion();
    assert.strictEqual(typeof version, 'string');
  });
  
  // Show actual values for better visibility
  const version = getPackageVersion();
  console.log('getPackageVersion execution result:', version);
});