// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/mdc'],
  runtimeConfig: {
    openaiApiKey: '9293i4sd',
    public: {
      appName: 'convai'
    }
  },
  mdc: {
    highlight: {
      theme: 'vitesse-dark',
      langs: [
        'html',
        'markdown',
        'vue',
        'typescript',
        'javascript',
      ],
    },
  },
})