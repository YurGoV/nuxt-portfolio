// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  devtools: { enabled: true },
  alias: {
    '@': resolve(__dirname, '/')
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    ['@nuxtjs/eslint-module', { lintOnStart: false }],
    '@nuxtjs/color-mode'
  ],
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      }
    }
  },
  colorMode: {
    classSuffix: ''
  }
})
