/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@mui/base': '@mui/base/legacy',
            '@mui/lab': '@mui/lab/legacy',
            '@mui/material': '@mui/material/legacy',
            '@mui/styled-engine': '@mui/styled-engine-sc',
            '@mui/system': '@mui/system/legacy',
        };
        config.module.rules.push({});
        console.log('test webpack');
        console.log(config.resolve);
        return config;
    },
};

module.exports = nextConfig;
