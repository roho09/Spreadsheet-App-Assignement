const path = require('path');
const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Add an alias for a directory
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');

    // Add custom plugins
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.VERSION': JSON.stringify(buildId),
    }));

    // Ensure framer-motion is properly handled (no additional config needed for framer-motion)
    // But this section can be used to optimize or add additional settings if needed

    return config;
  },
};
