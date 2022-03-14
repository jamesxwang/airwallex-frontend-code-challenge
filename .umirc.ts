import { defineConfig } from 'umi';

const BASE_PATH = '/airwallex-frontend-code-challenge';

export default defineConfig({
  title: 'Broccoli & Co.',
  base: process.env.NODE_ENV === 'production' ? BASE_PATH : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `${BASE_PATH}/` : '/',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
