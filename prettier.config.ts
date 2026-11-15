import { type Config } from 'prettier';

export default {
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      options: {
        singleQuote: false,
      },
    },
  ],
} satisfies Config;
