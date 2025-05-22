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
    article: './src/scripts/article.js',
    articleItem: './src/scripts/articleitem.js',
    articleFilter: './src/scripts/articlesfilters.js',
    indexGen: './src/scripts/indexGen.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // ← строка 70
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // ← объединяем здесь
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
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
      chunks: ['index', 'indexGen']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/sandbox.html',
      filename: './sandbox.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/art-projects.html',
      filename: './art-projects.html',
      chunks: ['index', 'gallery', 'galleryFilter']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/about-us.html',
      filename: './about-us.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/error504.html',
      filename: './error504.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/error404.html',
      filename: './error404.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/articles.html',
      filename: './articles.html',
      chunks: ['index', 'article', 'articleFilter']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/LiliPolacsek_VeraMolnarLevelei.html',
      filename: './gallery/LiliPolacsek_VeraMolnarLevelei.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template:
        './src/pages/gallery/DanHoopert_AudioSynthesisThroughTheForest.html',
      filename: './gallery/DanHoopert_AudioSynthesisThroughTheForest.html',
      chunks: ['index', 'galleryItem']
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/gallery/Glitchdo_GenerativeLandscape.html',
      filename: './gallery/Glitchdo_GenerativeLandscape.html',
      chunks: ['index', 'galleryItem']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/pages/gallery/AmyKarle_EchoesFromTheValleyOfExistence.html',
      filename: './gallery/AmyKarle_EchoesFromTheValleyOfExistence.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/MozartGrots.html',
      filename: './gallery/MozartGrots.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/Kuflex.html',
      filename: './gallery/Kuflex.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/Radugadesign.html',
      filename: './gallery/Radugadesign.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/SeasonalProximities.html',
      filename: './gallery/SeasonalProximities.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/DissipativeBird.html',
      filename: './gallery/DissipativeBird.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/DissipativeBird.html',
      filename: './gallery/DissipativeBird.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/WorkingKnowledge.html',
      filename: './gallery/WorkingKnowledge.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/WillOTheWisps.html',
      filename: './gallery/WillOTheWisps.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/Mycelium.html',
      filename: './gallery/Mycelium.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/QuantParticles.html',
      filename: './gallery/QuantParticles.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/PoxAndPol.html',
      filename: './gallery/PoxAndPol.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/G8Identity.html',
      filename: './gallery/G8Identity.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/Absurdo.html',
      filename: './gallery/Absurdo.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/DesignPunk2020.html',
      filename: './gallery/DesignPunk2020.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/AnotherLandKuflex.html',
      filename: './gallery/AnotherLandKuflex.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/MeltingBeach.html',
      filename: './gallery/MeltingBeach.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/AndreonDeCastro.html',
      filename: './gallery/AndreonDeCastro.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/EdgeOfChaous.html',
      filename: './gallery/EdgeOfChaous.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/FluffyChaous.html',
      filename: './gallery/FluffyChaous.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/GhostCity.html',
      filename: './gallery/GhostCity.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/Aadatein.html',
      filename: './gallery/Aadatein.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/gallery/T69Collapse.html',
      filename: './gallery/T69Collapse.html',
      chunks: ['index', 'galleryItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/FluffyTheNoise.html',
      filename: './articles/FluffyTheNoise.html',
      chunks: ['index', 'articleItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/slimeMold.html',
      filename: './articles/slimeMold.html',
      chunks: ['index', 'articleItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/pointCloud.html',
      filename: './articles/pointCloud.html',
      chunks: ['index', 'articleItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/pixelSlice.html',
      filename: './articles/pixelSlice.html',
      chunks: ['index', 'articleItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/kineticTypography.html',
      filename: './articles/kineticTypography.html',
      chunks: ['index', 'articleItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/creepyEyes.html',
      filename: './articles/creepyEyes.html',
      chunks: ['index', 'articleItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/colourfulGlass.html',
      filename: './articles/colourfulGlass.html',
      chunks: ['index', 'articleItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/chladniPatterns.html',
      filename: './articles/chladniPatterns.html',
      chunks: ['index', 'articleItem']
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/articles/blobs.html',
      filename: './articles/blobs.html',
      chunks: ['index', 'articleItem']
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
