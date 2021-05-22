const path = require('path')
module.exports = {
    entry: './app.js',
    output: {
        path: './output',
        filename: 'output-file.js'
    },
    lintOnSave: false,
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ],
                loader: "style-loader!css-loader!less-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-decorators-legacy', 'transform-class-properties']
                    }
                }
            },
            {
                test: /\.(jsx|tsx|js|ts)$/,
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  getCustomTransformers: () => ({
                    before: [ tsImportPluginFactory( /** options */) ]
                  }),
                  compilerOptions: {
                    module: 'es2015'
                  }
                },
                exclude: /node_modules/
              }
        ]
    }
}