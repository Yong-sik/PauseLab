// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { customSVGs } from '../assets/ts/custom'
import { mdi } from "vuetify/iconsets/mdi";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'pauseLabTheme',
      themes:{
        pauseLabTheme: {
          dark: false,
          colors: {
            background: '#282828',
            header_background: '#000000',
            guide_font: '#FFFFFF',
            content_font: "#DEDDDA"
          },
        },
      }
    },
    icons: {
      defaultSet: "mdi",
      sets: {
        mdi,
        custom: customSVGs,
      },
    },
  })
  app.vueApp.use(vuetify)
})