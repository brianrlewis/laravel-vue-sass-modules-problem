const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      localIdentName: '[local]_[hash:base64:8]',
                    },
                  },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader', // 'style-loader' doesn't work either
                  'css-loader',
                  'sass-loader'
                ],
            }
        ],
    },
});



mix.js('resources/js/app.js', 'public/js');
 //   .sass('resources/sass/app.scss', 'public/css');
