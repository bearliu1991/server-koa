module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: 'yktserver',
      script: './index.js',
      watch: true,
      ignore_watch: [
        // 从监控目录中排除
        'node_modules',
        'logs',
        'uploadFiles',
      ],
      env: {
        COMMON_VARIABLE: 'true',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
