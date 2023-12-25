// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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
            main_font: '#DEDDDA',
          },
        },
      }
    }
  })
  app.vueApp.use(vuetify)
})