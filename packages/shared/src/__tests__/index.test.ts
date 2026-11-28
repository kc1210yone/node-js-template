import { expect, test } from 'vitest';
import { sharedFunction } from '#shared/shared-function/index.js';

test('dummy', () => {
  sharedFunction();
  expect(true).toBe(true);
});
