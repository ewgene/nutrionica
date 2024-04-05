import { defineNuxtConfig } from 'nuxt/config';

const isDevelopment = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
    devtools: {
        enabled: isDevelopment
    },
    css: ['./assets/fonts/inter/inter.css' ], 
    modules: [...(isDevelopment ? ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'] : [])],
    ...(isDevelopment && {
        stylelint: {
            cache: false,
            lintOnStart: false
        },
        eslint: {
            cache: false,
            lintOnStart: false
        }
    })
});
