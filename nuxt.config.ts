// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/global.css', 'bootstrap/dist/css/bootstrap.min.css'],
    plugins: [
        '~/plugins/bootstrap.client.js'
    ],

})