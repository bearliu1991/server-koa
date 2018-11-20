import { genUUID } from '../utils/utils';
const config = require('config-lite')({
  filename: 'default',
  config_basedir: __dirname,
  config_dir: 'config',
});
const { cookiesConfig } = config;
export async function SessionId(ctx, next) {
  let sessionId = ctx.cookies.get('sessionId');
  if (!sessionId) {
    sessionId = genUUID(32);
    ctx.cookies.set('sessionId', sessionId, cookiesConfig);
  }
  ctx.sessionId = sessionId;
  await next();
}

// 移除get请求中的timestamp
export async function removeTimestamp(ctx, next) {
  const query = ctx.request.query;
  if (ctx.method === 'GET' && !ctx.url.includes('xkdata-web/wechatNotify')) {
    delete query.timestamp;
  }
  ctx.request.query = query;
  await next();
}
// 获取get或者post的请求参数并统一保存
export async function getRequestParams(ctx, next) {
  let requestParams = {};
  if (ctx.method === 'GET') {
    requestParams = ctx.request.query;
  } else {
    requestParams = ctx.request.body;
  }
  ctx.requestParams = requestParams || {};
  await next();
}

// 设置sesssionId到请求参数中（使用在manage运营端）
export async function setSessionIdToRequestParams(ctx, next) {
  ctx.requestParams = {
    ...ctx.requestParams,
    sessionId: ctx.sessionId,
  };
  await next();
}
