import { it, expect } from 'vitest';
import { sharedFunction } from '#shared/shared-function/index.js';

it('dummy', () => {
  sharedFunction();
  expect(true).toBe(true);
});
