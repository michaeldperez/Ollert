import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'app.js',
  dest: 'dist/app.js',
  format: 'cjs',
  plugins: [ typescript() ]
};