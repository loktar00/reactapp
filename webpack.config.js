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
            loaders: [
                { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
                { test: /\.css$/, loader: 'style-loader!css-loader' },
                { test: /\.jsx$/, loader: 'jsx-loader' }
            ]
        }
    };
};