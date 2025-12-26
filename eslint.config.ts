import antfu from '@antfu/eslint-config'
import pluginCypress from 'eslint-plugin-cypress'

export default antfu(
  {
    // Opciones generales de Antfu
    vue: true,
    typescript: true,

    // Habilita soporte para testing (Vitest está incluido)
    test: true,

    // Tus ignorados globales
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
    ],
  },

  // Configuración específica de Cypress (se añade como un objeto extra)
  {
    files: [
      'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      'cypress/support/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: {
      cypress: pluginCypress,
    },
    rules: {
      ...pluginCypress.configs.recommended.rules,
    },
  },
)
