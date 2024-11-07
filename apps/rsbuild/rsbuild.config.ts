import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import {ModuleFederationPlugin} from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 9001
  },
  dev: {
  },
  output: {
    assetPrefix: 'http://localhost:9001',
  },
  plugins: [pluginReact({
    splitChunks: {
      react: false,
      router: false,
    }
  })],
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output.uniqueName = 'remote';
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'remote',
          // async: true,
          // library: { type: 'commonjs-module' },
          // runtimePlugins: [require.resolve('@module-federation/node/runtimePlugin')],
          exposes: {
            './Button': './src/Button.tsx',
          },
          remotes: {},
          shared: {
            react: {
              singleton: true,
              requiredVersion: '18.3.1',
              strictVersion: true,
            },
            'react-dom': {
              singleton: true,
              requiredVersion: '18.3.1',
              strictVersion: true,
            },
          },
        }),
      ]);
    },
  },
});
