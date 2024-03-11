import type { Plugin } from 'vite'
import { kitRoutes, type Options, type RouteMappings } from 'vite-plugin-kit-routes'
import { stripper } from 'vite-plugin-stripper'

// import { Log } from '@kitql/helpers'

const toRemove = ['oslo/password', 'osla']

export function remultKit<KIT_ROUTES extends RouteMappings>(options?: {
  stripper?: { debug?: boolean }
  kitRoutes?: Options<KIT_ROUTES>
}): Plugin[] {
  // const log = new Log('remult-kit')

  return [
    {
      name: 'vite-plugin-remult-kit',
      enforce: 'pre',

      config: async (a) => {
        // THE ERROR:
        // RollupError: Unexpected character '�'
        // This code (A) is to fix in `build` mode
        a.build = {
          rollupOptions: {
            external: toRemove,
          },
        }
        // This code (B) is to fix in `dev` mode
        a.optimizeDeps = {
          exclude: toRemove,
        }
      },
    },

    // @ts-ignore
    ...kitRoutes<KIT_ROUTES>({
      ...(options?.kitRoutes ?? {}),
      ...{
        logs: {
          ...options?.kitRoutes?.logs,
          post_update_run: false,
          update: false,
        },
        LINKS: {
          ...options?.kitRoutes?.LINKS,
          github_remult_kit: 'https://github.com/jycouet/remult-kit',
        },
      },
    }),

    // @ts-ignore
    ...stripper({
      decorators: ['BackendMethod'],
      hard: true,
      debug: options?.stripper?.debug ?? false,
      nullify: [],
    }),
  ]
}
