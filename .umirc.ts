import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Broccoli & Co.',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
