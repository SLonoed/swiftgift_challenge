var webpack = require('webpack');
var path = require('path');
var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');

var isProduction = process.env.NODE_ENV === 'production';

var config = {
    addVendor: function(name, path, forseParse) {
        this.resolve.alias[name] = path;

        if (!forseParse)
            this.module.noParse.push(path);
    },
    context: __dirname,
    entry: {
        app: './app/main.js'
    },
    output: {
        publicPath: './',
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        alias: { }
    },
    module: {
        noParse: [],
        loaders: [
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            {
                test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony',
                exclude: [
                    bower_dir,
                    node_modules_dir
                ]
            },
            {
                test: /\.(woff|png|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },

            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('app', null, false)
    ]
};

config.addVendor('react', path.resolve(bower_dir, 'react/react-with-addons.js'));
config.addVendor('font-awesome-webpack', path.resolve(node_modules_dir, 'font-awesome-webpack'), true);

module.exports = config;
