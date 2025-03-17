// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  app: {
    head: {
      title: "Nuxt Demo",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  },
  runtimeConfig: {
    apiSecret: "geheim123",
    public: {
      apiBase: "http://localhost:3000",
      apiPublic: "publicSecret",
    },
  },
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:5000/api",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
});
