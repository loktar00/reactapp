var webpack = require('webpack');

module.exports = function(release){
    return {
        entry: './src/app/app.jsx',
        output : {
            path: __dirname + '/build',
            filename: 'app.js',
        },
        watch : true,
        module: {
            preLoaders: [
                { test: /\.js$/, exclude: /node_modules/, loader: 'jscs-loader'},
                { test: /\.jsx$/, exclude: /node_modules/, loader: 'jscs-loader'}
            ],
            loaders: [
                { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.jsx$/, loader: 'jsx-loader!6to5-loader' },
                { test: /\.js$/, exclude: /node_modules/, loader: '6to5-loader'}
            ]
        },
        jscs : {
            'preset': 'airbnb', 
            'esnext': true, 
            'esprima' : 'esprima-fb',
            'validateIndentation' : 4,
            "validateLineBreaks": "CRLF",
        }
    };
};