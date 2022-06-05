const path = require('path');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
    '@mui/material',
    '@mui/system',
    '@mui/icons-material',
]);
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    sassOptions: {
        includePaths: [path.join(__dirname, 'public/styles')],
    },
    webpack: (config, options) => {
        config.resolve.modules = [
            ...config.resolve.modules,
            'node_modules',
            'src',
        ];
        config.resolve.extensions = ['.js', '.json', '.tsx', '.ts', '.jsx'];
        // console.log(config.resolve);
        config.module.rules.push(
            {
                test: /\.(js|jsx|ts|tsx|)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif)$/,
                use: 'file-loader'
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'file-loader'],
            },
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: 'style-loader', // creates style nodes from JS strings
            //     }, {
            //         loader: 'css-loader', // translates CSS into CommonJS
            //     }, {
            //         loader: 'sass-loader', // compiles Sass to CSS
            //     }],
            // },
        );
        return config;
    },
};

module.exports = withPlugins([withTM()], nextConfig);
