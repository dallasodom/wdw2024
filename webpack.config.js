const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

process.env.NODE_ENV = Encore.isProduction() ? 'production' : 'dev';
console.log(Encore.isProduction());
Encore
  .setOutputPath('assets/')
  .setPublicPath(Encore.isProduction() ? '/wdw2024' : '/')
  .addStyleEntry('css/app', './_assets/css/app.css')
  .addEntry('js/app', './_assets/js/app.js')
  .enablePostCssLoader()
  .disableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction());

module.exports = Encore.getWebpackConfig();
