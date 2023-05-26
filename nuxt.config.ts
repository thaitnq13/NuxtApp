// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css', 'vuetify/lib/styles/main.sass'],
    // runtimeConfig: {
    //     apiSecret: '123',
    //     public: {
    //         apiBase: '/api',
    //     },
    // },
    build: {
        transpile: ['vuetify'],
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
