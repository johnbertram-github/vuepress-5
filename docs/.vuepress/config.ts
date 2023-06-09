import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  // base: '/vuepress-5/',
  lang: 'en-GB',
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/vuepress-5/',
  theme: defaultTheme({
    lastUpdated: true,
    contributors: true,
    home: '/',
    navbar: [{ text: 'Home', link: '/' }],
  }),
})
