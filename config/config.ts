import { defineConfig } from 'umi';
import { routes, studyLog } from './routes';

export default defineConfig({
  routes: [...routes, ...studyLog],
});
