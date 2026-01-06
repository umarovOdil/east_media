// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    future: {
        compatibilityVersion: 4
    },

    css: ['~/assets/css/main.css'],

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@tresjs/nuxt'
    ],

    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'dark'
    },

    app: {
        head: {
            title: 'East Media | Elevate Your Business',
            meta: [
                { name: 'description', content: 'East Media - A premium digital agency specializing in Video Production, Web Development, and AI Design.' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            link: [
                { rel: 'icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap' }
            ]
        }
    },

    tres: {
        devtools: false, // optimize for performance
    }
})
