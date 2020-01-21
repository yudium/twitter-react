const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]';

module.exports = {
  style: {
    modules: {
      camelCase: true,
      localIdentName: CSS_MODULE_LOCAL_IDENT_NAME
    }
  },
  babel: {
    loaderOptions: {
      // Without this Babel caches module name resolution,
      // e.g. wrongly identifies that CSS module does not exist.
      cacheDirectory: false,
    },
    plugins: [
      [
        'babel-plugin-react-css-modules',
        {
          attributeNames: {
            activeStyleName: 'activeClassName'
          },
          filetypes: {
            '.scss': {
              syntax: 'postcss-scss'
            }
          },
          generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME,
          handleMissingStyleName: 'warn'
        }
      ]
    ]
  }
};
