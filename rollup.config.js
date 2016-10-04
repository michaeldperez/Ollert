import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'app.ts',
  dest: 'dist/app.js',
  format: 'cjs',
  plugins: [ typescript() ]
};