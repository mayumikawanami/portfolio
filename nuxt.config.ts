// https://nuxt.com/docs/api/configuration/nuxt-config
const isProduction = process.env.NODE_ENV === "production";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  // ssr: false,

  app: {
    baseURL: isProduction ? "/portfolio/" : "/",
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=M+PLUS+1p&display=swap",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      app: {
        baseURL: isProduction ? "/portfolio/" : "/",
      },
    },
  },

  nitro: {
    preset: "static",
    publicAssets: [{ dir: "public" }],
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],
  css: ["~/assets/css/main.css"],

  experimental: {
    payloadExtraction: false,
  },
});
