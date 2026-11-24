import { globSync } from 'node:fs';
import { dirname, sep } from 'node:path';
import type { Configuration } from 'lint-staged';

/** package.json があるワークスペースの相対パスを集める。 */
const workspaces = globSync('{apps,packages}/*/package.json', {
  cwd: import.meta.dirname,
}).map((manifest) => dirname(manifest).split(sep).join('/'));

export default {
  '!{apps,packages}/**': [
    'eslint --fix --no-warn-ignored',
    'prettier --write --ignore-unknown',
  ],
  ...Object.fromEntries(
    workspaces.map((workspace) => [
      `${workspace}/**`,
      [
        `npx -w ./${workspace} eslint --fix --no-warn-ignored`,
        `npx -w ./${workspace} prettier --write --ignore-path ../../.prettierignore --ignore-unknown`,
      ],
    ]),
  ),
} satisfies Configuration;
