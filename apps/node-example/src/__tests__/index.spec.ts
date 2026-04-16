import { sharedFunction } from '@internal/shared/shared-function/index.js';
import { it, expect } from 'vitest';
import { exampleFunction } from '#src/example-function/index.js';

it('dummy', () => {
  exampleFunction();
  sharedFunction();
  expect(true).toBe(true);
});
