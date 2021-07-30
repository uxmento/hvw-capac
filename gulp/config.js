module.exports = {
  browser_sync: {
    url: 'hvw.test'
  },

  twig: {
    src: 'src/templates/',
    dist: 'dist/'
  },

  css: {
    src: 'src/scss/',
    dist: 'dist/css/',
    map: '.'
  },

  javascript: {
    src: 'src/js/',
    dist: 'dist/js/',
    map: '.',
    options: [
      '@babel/preset-env'
    ]
  },

  icons: {
    src: 'src/icons/',
    dist: 'dist/icons/'
  },

  images: {
    src: 'src/images/',
    dist: 'dist/images/'
  },

  fonts: {
    src: 'src/fonts/',
    dist: 'dist/fonts/'
  },

  vendor: {
    src: 'node_modules/',
    dist: 'dist/vendor/'
  }
};
