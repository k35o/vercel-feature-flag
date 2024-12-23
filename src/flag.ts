import { unstable_flag as flag } from '@vercel/flags/next';

export const showFeatureA = flag({
  key: 'feature-a',
  decide: () => false,
});

export const showTypeA = flag({
  key: 'type-a',
  decide: () => Math.random() > 0.5,
});
