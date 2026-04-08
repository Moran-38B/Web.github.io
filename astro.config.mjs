import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 這裡的 site 請換成你的 GitHub 帳號名
  site: 'https://Moran-38B.github.io',
  // 這裡的 base 必須跟你的 Repo 名稱完全一致，且前後都有斜線
  base: '/Web/', 
  integrations: [tailwind()],
});