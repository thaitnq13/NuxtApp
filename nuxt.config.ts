// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    // runtimeConfig: {
    //     apiSecret: '123',
    //     public: {
    //         apiBase: '/api',
    //     },
    // },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
