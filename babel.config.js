module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@components': './src/components',
            '@services': './src/services',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
            '@types': './src/types',
            '@config': './src/config',
            '@api': './src/api',
            '@store': './src/store'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  };
}; 