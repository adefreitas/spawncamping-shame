var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'back'
    },
    port: 3000,
    db: 'mongodb://localhost/back-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'back'
    },
    port: 3000,
    db: 'mongodb://localhost/back-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'back'
    },
    port: 3000,
    db: 'mongodb://localhost/back-production'
    
  }
};

module.exports = config[env];
