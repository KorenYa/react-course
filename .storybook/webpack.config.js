const path = require('path');
module.exports = {
  context: path.join(__dirname),
  output: {
    publicPath: '/',
  },

  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
          },
        ],
        include: path.resolve(__dirname, '../src'),
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
