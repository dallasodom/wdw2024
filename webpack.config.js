const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

process.env.NODE_ENV = Encore.isProduction() ? 'production' : 'dev';

Encore
  .setOutputPath('assets/')
  // this is your *true* public path
  .setPublicPath(Encore.isProduction() ? '/wdw2024/assets' : '/assets')

  // this is now needed so that your manifest.json keys are still `assets/foo.js`
  // (which is a file that's used by Symfony's `asset()` function)
  .setManifestKeyPrefix('assets')

  .copyFiles({
    from: './_assets/images',

    // optional target path, relative to the output dir
    to: 'images/[path][name].[hash:8].[ext]',

    // if versioning is enabled, add the file hash too
    //to: 'images/[path][name].[hash:8].[ext]',

    // only copy files matching this pattern
    //pattern: /\.(png|jpg|jpeg)$/
  })
  .addStyleEntry('css/app', './_assets/css/app.css')
  .addEntry('js/app', './_assets/js/app.js')
  .enablePostCssLoader()
  .disableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction());

module.exports = Encore.getWebpackConfig();
