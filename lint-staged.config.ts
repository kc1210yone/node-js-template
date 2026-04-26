import type { Configuration } from 'lint-staged';

const a = {
  '!{apps,packages}/**': [
    'eslint --fix --no-warn-ignored',
    'prettier --write --ignore-unknown',
  ],
  ...Object.fromEntries(
    [
      'apps/next-js-example',
      'apps/node-example',
      'apps/vite-example',
      'packages/shared',
    ].map((workspace) => [
      `${workspace}/**/*`,
      [
        `npx -w ./${workspace} eslint --fix --no-warn-ignored`,
        `npx -w ./${workspace} prettier --write --ignore-unknown`,
      ],
    ]),
  ),
} satisfies Configuration;
console.log(a);

export default a;
