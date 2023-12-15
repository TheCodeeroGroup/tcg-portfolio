// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/global.css', 'bootstrap/dist/css/bootstrap.min.css'],
    head: {
        title: 'Your Page Title',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            // Other meta tags can be added here
        ],

        // Other head configurations like link tags, script tags, etc.
    },
    plugins: [
    ],

})