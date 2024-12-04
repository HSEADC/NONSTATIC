const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.png/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice.html',
      filename: './practice.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/sandbox.html',
      filename: './sandbox.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/art-projects.html',
      filename: './art-projects.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/art-projects/branding/primary.html',
      filename: './art-projects/branding/primary.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/art-projects/installations/audio-synthesis.html',
      filename: './art-projects/installations/audio-synthesis.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/art-projects/web-design/under-voyager.html',
      filename: './art-projects/web-design/under-voyager.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/art-projects/branding.html',
      filename: './art-projects/branding.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/art-projects/installations.html',
      filename: './art-projects/installations.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/art-projects/web-design.html',
      filename: './art-projects/web-design.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/history/MIT.html',
      filename: './history/MIT.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/history.html',
      filename: './history.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/about-us.html',
      filename: './about-us.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/code/technologies/5pjs.html',
      filename: './practice/code/technologies/5pjs.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/code/technologies/python.html',
      filename: './practice/code/technologies/python.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/code/technologies.html',
      filename: './practice/code/technologies.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/code/tutorials.html',
      filename: './practice/code/tutorials.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/graphic-redactors/technologies.html',
      filename: './practice/graphic-redactors/technologies.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/graphic-redactors/tutorials.html',
      filename: './practice/graphic-redactors/tutorials.html'
    }),

    new HtmlWebpackPlugin({
      template:
        './src/practice/graphic-redactors/technologies/illustrator.html',
      filename: './practice/graphic-redactors/technologies/illustrator.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/graphic-redactors/technologies/photoshop.html',
      filename: './practice/graphic-redactors/technologies/photoshop.html'
    }),

    new HtmlWebpackPlugin({
      template:
        './src/practice/visual-programming/technologies/touchdesigner.html',
      filename: './practice/visual-programming/technologies/touchdesigner.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/visual-programming/technologies.html',
      filename: './practice/visual-programming/technologies.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/visual-programming/tutorials.html',
      filename: './practice/visual-programming/tutorials.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/visual-programming/tutorials/blob.html',
      filename: './practice/visual-programming/tutorials/blob.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/code.html',
      filename: './practice/code.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/visual-programming.html',
      filename: './practice/visual-programming.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/practice/graphic-redactors.html',
      filename: './practice/graphic-redactors.html'
    })

    // Article
    // new HtmlWebpackPlugin({
    //   template: './src/articles/superorganisms/S_Popup.html',
    //   filename: './superorganisms/S_Popup.html'
    // }),

    // Partials
    // new HtmlWebpackPartialsPlugin([
    //   {
    //     path: path.join(__dirname, './src/partials/analytics.html'),
    //     location: 'analytics',
    //     template_filename: '*',
    //     priority: 'replace'
    //   }
    // ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
