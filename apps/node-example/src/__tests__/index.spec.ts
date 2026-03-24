import { it, expect } from 'vitest';
import { exampleFunction } from '#src/module/index.js';

it('dummy', () => {
  expect(exampleFunction()).toBe(42);
});
