import { sharedFunction } from '@internal/shared/shared-function/index.js';
import { expect, test } from 'vitest';
import { exampleFunction } from '#src/example-function/index.js';

test('dummy', () => {
  exampleFunction();
  sharedFunction();
  expect(true).toBe(true);
});
