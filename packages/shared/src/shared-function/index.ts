import { anotherFunction } from '#shared/another-function/index.js';

export const sharedFunction = (): void => {
  anotherFunction();
  console.log('Shared Function');
};
