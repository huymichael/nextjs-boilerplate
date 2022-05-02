const path = require('path');

/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'public/styles')],
    },
    webpack: (config, options) => {
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
                use: 'file-loader',
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        );
        return config;
    },
};

module.exports = nextConfig;
