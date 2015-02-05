var webpack = require('webpack');

module.exports = function(release){
    return {
        entry: './src/app/app.jsx',
        output : {
            path: __dirname + '/build',
            filename: 'app.js',
        },
        plugins: release ? [
          new webpack.optimize.UglifyJsPlugin(),
          new webpack.optimize.OccurenceOrderPlugin(true),
          new webpack.optimize.AggressiveMergingPlugin()
        ] : [],
        watch : !release,
        module: {
            preLoaders: [
                { test: /\.js$/, exclude: /node_modules/, loader: 'jscs-loader'},
                { test: /\.jsx$/, exclude: /node_modules/, loader: 'jscs-loader'}
            ],
            loaders: [
                { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.jsx$/, loader: 'jsx-loader!6to5-loader' },
                { test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'}
            ]
        },
        jscs : {
            // https://github.com/airbnb/javascript
            'preset': 'airbnb',
            // for es6 
            'esnext': true, 
            // for jsx
            'esprima' : 'esprima-fb',
            // overriding airbnb default styles
            'validateIndentation' : 4,
            "validateLineBreaks": "CRLF",
        }
    };
};