import { createModuleFederationConfig } from '@module-federation/modern-js';


export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote: 'remote@http://localhost:9001/mf-manifest.json',
  },
  exposes: {},
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
