const withTM = require('@weco/next-plugin-transpile-modules')

module.exports = withTM({
    webpack: config => {
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        // Transform all direct `react-native` imports to `react-native-web`
        'react-native$': 'react-native-web',
      }
      config.resolve.extensions = [
        '.web.js',
        '.web.ts',
        '.web.tsx',
        ...config.resolve.extensions,
      ]
      return config
    },
    transpileModules: ['@vela/ui']
  })