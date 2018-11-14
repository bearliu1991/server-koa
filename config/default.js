module.exports = {
  name: '销大师NODE中间件',
  BASE_URL: 'http://192.168.0.244:80/xkdata-web',
  Mock_URL: 'https://www.easy-mock.com/mock/5b8ce031b4f2405353a03f92/xkdata-web',
  UPLOAD_URL: 'http://192.168.0.244:8888/',
  // 微信公众号相关配置
  wx: {
    appId: 'wxd516007e58279ff8',
    secret: '517c9d97a309063be1a9bdea2bdf46c3',
    paySecret: 'BbeKjoQ8K2zh5L7ai3abhGAMehPbvS3W', // 商户密钥
  },
  // fdfs文件存储配置
  fdfsConfig: {
    trackers: [
      {
        host: '192.168.0.244',
        port: 6000,
      },
    ],
    timeout: 10000,
    defaultExt: 'txt',
    charset: 'utf8',
  },
  // session相关配置
  sessionConfig: {
    name: 'sessionId',
    httpOnly: false,
    secure: false,
    maxAge: 60 * 10 * 1000,
    overwrite: true,
  },
  // log4js相关配置
  logConfig: {
    appenders: {
      http: {
        type: 'dateFile',
        filename: 'logs/access.log',
        pattern: '-yyyy-MM-dd',
        category: 'http',
      },
      app: {
        type: 'file',
        filename: 'logs/app.log',
        maxLogSize: 10485760,
        numBackups: 3,
      },
      errorFile: {
        type: 'file',
        filename: 'logs/errors.log',
      },
      errors: {
        type: 'logLevelFilter',
        level: 'ERROR',
        appender: 'errorFile',
      },
    },
    categories: {
      default: { appenders: ['app', 'errors'], level: 'DEBUG' },
      http: { appenders: ['http'], level: 'DEBUG' },
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID',
  },
  // 本地mock接口列表
  mockList: [],
};
