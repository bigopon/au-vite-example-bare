import { defineConfig } from 'vite';
import aurelia from '@aurelia/vite-plugin';
import esbuild from 'esbuild';

export default defineConfig({
  esbuild: {
    loader: {
      '.js': 'ts',
      'js': 'ts'
    }
  },
  plugins: [
    aurelia(),
    {
      name: 'compiles-js-decorator',
      transform(code, id) {
        if (code.indexOf('@customElement') || code.indexOf('@customAttribute')) {
          return esbuild.transform(code, { loader: 'ts' }).then(({ code, map }) => ({ code, map }))
        }
      }
    }
  ],
});
