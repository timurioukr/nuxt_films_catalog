// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-windicss'
    ],
    runtimeConfig: {
        apiKey: process.env.NUXT_API_KEY,
        apiBaseUrl: process.env.NUXT_API_BASE_URL,
        public: {
            imageBaseUrl: process.env.NUXT_PUBLIC_IMAGE_BASE_URL
        }
    }
})
