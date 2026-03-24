import 'dotenv/config';
import { sharedFunction } from '@internal/shared/module/index.js';
import { exampleFunction } from '#src/module/index.js';

console.log(exampleFunction());
console.log(sharedFunction());
