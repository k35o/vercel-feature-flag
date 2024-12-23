import { unstable_flag as flag } from '@vercel/flags/next';

export const showFeatureA = flag({
  key: 'feature-a',
  decide: () => false,
});
