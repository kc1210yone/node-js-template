import { glob } from 'node:fs/promises';
import { dirname, sep } from 'node:path';
import type { Configuration } from 'lint-staged';

const workspaces: string[] = [];
for await (const manifest of glob('{apps,packages}/*/package.json', {
  cwd: import.meta.dirname,
})) {
  workspaces.push(dirname(manifest).split(sep).join('/'));
}

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
