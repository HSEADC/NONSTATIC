const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  stats: {
    children: true
  },
  entry: {
    index: './src/index.js',
    gallery: './src/scripts/gallery.js',
    galleryFilter: './src/scripts/galleryfilters.js',
    galleryItem: './src/scripts/galleryitem.js',
    article: './src/scripts/article.js'
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
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext][query]'
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
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images'
        }
      ]
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/sandbox.html',
      filename: './sandbox.html',
      chunks: []
    }),

    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: []
    }),

    new HtmlWebpackPlugin({
      template: './src/art-projects.html',
      filename: './art-projects.html',
      chunks: ['gallery', 'galleryFilter']
    }),
    new HtmlWebpackPlugin({
      template: './src/about-us.html',
      filename: './about-us.html',
      chunks: []
    }),

    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: []
    }),

    new HtmlWebpackPlugin({
      template: './src/gallery/LiliPolacsek_VeraMolnarLevelei.html',
      filename: './gallery/LiliPolacsek_VeraMolnarLevelei.html',
      chunks: ['galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/gallery/DanHoopert_AudioSynthesisThroughTheForest.html',
      filename: './gallery/DanHoopert_AudioSynthesisThroughTheForest.html',
      chunks: ['galleryItem']
    }),
    new HtmlWebpackPlugin({
      template: './src/gallery/Glitchdo_GenerativeLandscape.html',
      filename: './gallery/Glitchdo_GenerativeLandscape.html',
      chunks: ['galleryItem']
    }),
    new HtmlWebpackPlugin({
      template: './src/gallery/AmyKarle_EchoesFromTheValleyOfExistence.html',
      filename: './gallery/AmyKarle_EchoesFromTheValleyOfExistence.html',
      chunks: ['galleryItem']
    }),
    ,
    new HtmlWebpackPlugin({
      template: './src/articles/FluffyTheNoise.html',
      filename: './articles/FluffyTheNoise.html',
      chunks: ['article']
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
