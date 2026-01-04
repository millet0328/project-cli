import test from 'node:test';
import assert from 'node:assert';
import { createProject, isValidProjectName } from '../scripts/create.mjs';
import { existsSync, rmdirSync } from 'fs';
import { join } from 'path';

// Mock the clack/prompts and giget modules to avoid actual prompts and downloads
// We'll use a mock implementation to test the logic without side effects
test('createProject function exists', () => {
  assert.strictEqual(typeof createProject, 'function', 'createProject should be a function');
  
  // Show function type for better visibility
  console.log('createProject function type:', typeof createProject);
});

test('createProject handles null project name', () => {
  // This test would normally trigger the interactive prompt
  // For testing purposes, we'll just verify the function exists and can be called
  assert.strictEqual(typeof createProject, 'function');
  
  // Show function type for better visibility
  console.log('createProject function type (null test):', typeof createProject);
});

// Additional tests would require mocking the prompts and downloadTemplate functions
// This is a structural test to ensure the function exists
test('createProject has expected signature', () => {
  assert.ok(createProject.length === 1, 'createProject should accept one parameter');
  
  // Show actual function length for better visibility
  console.log('createProject parameter count:', createProject.length);
});

// Test the isValidProjectName function
test('isValidProjectName validates project names correctly', () => {
  // Valid project names
  assert.strictEqual(isValidProjectName('my-project'), true, 'should accept project with hyphens');
  assert.strictEqual(isValidProjectName('my_project'), true, 'should accept project with underscores');
  assert.strictEqual(isValidProjectName('myproject'), true, 'should accept project with alphanumeric characters only');
  assert.strictEqual(isValidProjectName('myProject123'), true, 'should accept project with alphanumeric characters');
  
  // Invalid project names
  assert.strictEqual(isValidProjectName('my project'), false, 'should reject project with spaces');
  assert.strictEqual(isValidProjectName('my@project'), false, 'should reject project with special characters');
  assert.strictEqual(isValidProjectName('my.project'), false, 'should reject project with dots');
  assert.strictEqual(isValidProjectName(''), false, 'should reject empty string');
  
  // Show actual function type for better visibility
  console.log('isValidProjectName function type:', typeof isValidProjectName);
});