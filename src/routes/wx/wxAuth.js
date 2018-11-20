import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import wxSdk from '../../common/wxSdk';
const config = require('config-lite')({
  filename: 'default',
  config_basedir: __dirname,
  config_dir: 'config',
});
const { wx } = config;
const router = new Router();

// 获取jssdk基本配置
router.post('/sdkConfig', async ctx => {
  const pageUrl = ctx.request.body.url.split('#')[0];
  const wxSdkConfig = await wxSdk.getSignPackage(pageUrl);
  ctx.body = {
    code: 1,
    message: '获取成功',
    data: wxSdkConfig,
  };
});
// 授权获取openId
router.post('/enter', async ctx => {
  const { code } = ctx.request.body;
  const response = await proxyService.getProxy(
    ctx,
    'https://api.weixin.qq.com/sns/oauth2/access_token',
    {
      params: {
        appid: wx.appId,
        secret: wx.secret,
        code,
        grant_type: 'authorization_code',
      },
    }
  );
  return (ctx.body = {
    code: 1,
    message: '获取成功',
    data: {
      openId: response.openid,
    },
  });
});

export default router;
