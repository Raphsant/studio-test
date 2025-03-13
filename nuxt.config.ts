export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content'
  ],
  css: [
    '~/assets/css/main.css',
  ],
  app: {
    head: {
      title: 'ByteHog - Cannabis Data Consulting',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Expert cannabis data analytics consulting for connecting data sources, building robust pipelines, and delivering actionable insights.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&display=swap' }
      ]
    }
  },
  build: {
    transpile: ['lucide-vue-next']
  },
  compatibilityDate: '2025-02-21'
})