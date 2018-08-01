const path = require("path");
const include = path.resolve(__dirname, '../');

module.exports = {
  module: {
      rules: [
          {
            test: /\.tsx/,
            loader: 'babel-loader!ts-loader',
            exclude: /node_modules/,
            include
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
            ],
          },
      ]
  }
};