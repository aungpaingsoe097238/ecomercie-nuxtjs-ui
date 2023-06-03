import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, './'),
  },
  css: ['~/assets/main.scss', '~/assets/index.css'],
  plugins: [
    {src: '~/plugins/myPlugin', mode: 'client'}
  ],
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  }
})