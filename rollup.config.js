import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify';

var minify = process.env.NODE_ENV === 'release'

export default {
  entry: 'src/Yox.js',
  format: 'umd',
  moduleName: 'Yox',
  plugins: [
    babel({
      presets: [ 'es2015-rollup' ],
      babelrc: false,
      comments: false,
      runtimeHelpers: true
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    (minify && uglify()),
  ],
  dest: minify ? 'dist/yox.min.js' : 'dist/yox.js'
}
