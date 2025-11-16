import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  experimental: {
    buildCache: true,
    typedPages: true,
    viewTransition: true,
  },
  modules: ["@nuxt/content", "@nuxt/icon", "@nuxt/fonts", "@nuxt/image", "shadcn-nuxt"],
  shadcn: {
    componentDir: "./app/components/ui",
    prefix: "",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
