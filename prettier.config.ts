import { type Config } from 'prettier';

export default {
  singleQuote: true,
  overrides: [
    {
      files: '*.yaml',
      options: {
        singleQuote: false,
      },
    },
  ],
} satisfies Config;
