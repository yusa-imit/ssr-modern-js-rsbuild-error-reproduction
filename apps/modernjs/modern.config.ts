import { appTools, defineConfig } from '@modern-js/app-tools';
import moduleFederationPlugin from "@module-federation/modern-js";

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  dev: {
    port: 9000,
    hmr: true,
  },
  server:  {
    ssr: {
      mode: 'stream',
    }
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
      moduleFederationPlugin()
  ],
});
