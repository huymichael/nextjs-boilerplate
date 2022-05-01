const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'public/styles')],
    },
    webpack: (config, options) => {
        // config.output = {
        //     ...config.output,
        //     clean: true,
        // };
        console.log([path.resolve(__dirname, 'public')]);
        config.resolve.alias = {
            ...config.resolve.alias,
            '@mui/base': '@mui/base/legacy',
            '@mui/lab': '@mui/lab/legacy',
            '@mui/material': '@mui/material/legacy',
            '@mui/styled-engine': '@mui/styled-engine-sc',
            '@mui/system': '@mui/system/legacy',
        };
        config.module.rules.push(
            {
                test: /\.(js|jsx|ts|tsx|)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2|png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: [path.resolve(__dirname, 'public')],
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        );
        return config;
    },
};

module.exports = nextConfig;
