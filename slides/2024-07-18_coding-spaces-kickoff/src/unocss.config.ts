import config from '@slidev/client/uno.config.ts'
import { defineConfig, mergeConfigs } from 'unocss'
import { presetAttributify, presetIcons, presetUno, presetWebFonts, presetTypography } from 'unocss'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'

import { presetScrollbar } from 'unocss-preset-scrollbar'

export default mergeConfigs([
  config,
  {
    shortcuts: {
      'text-gradient': 'text-transparent bg-clip-text bg-gradient-to-tl from-brand-primary to-brand-secondary',
      'highlight': 'color-amber-600 dark:color-amber-300',
    },
    // https://unocss.dev/config/theme
    theme:{
      fontFamily: {
        pixel: 'Pixel Square'
      },
      colors: {
        brand: {
          primary: '#391AFB',
          secondary: '#BF038B'
        },
      },
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
      presetTypography(),
      presetScrollbar(),
      presetWebFonts({
        provider: 'google',
        fonts: {
          mono: 'DM Mono',
          sans: 'DM Sans',
          strong: 'Rubik Iso',
          fast: 'Ubuntu',
          hand: 'Caveat',
          display: 'Tourney',
          blackboard: 'Walter Turncoat',
          flower: 'Indie Flower'
        },
      }),
    ],
  },
])
