import Koa from 'koa';
import cors from 'koa2-cors';
import onerror from 'koa-onerror';
import bodyparser from 'koa-bodyparser';
import json from 'koa-json';
import path from 'path';
import logger from 'koa-logger'; // 代替console
import convert from 'koa-convert';
import logUtil from './utils/logUtil';
// 中间件
import { removeTimestamp, getRequestParams, SessionId } from './middlewares';
// 接口服务
import account from './routes/account';
import mobile from './routes/mobile';
import admin from './routes/admin';
import manage from './routes/manage';
import upload from './routes/upload';

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(cors());
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(convert(logger()));
app.use(require('koa-static')(path.resolve(__dirname, '../public')));

// 监听日志
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  try {
    // 记录请求响应日志
    logUtil.logResponse(ctx, ms);
  } catch (error) {
    // 记录异常日志
    logUtil.logError(ctx, error, ms);
  }
});
// 自定义中间件
app.use(SessionId);
app.use(removeTimestamp);
app.use(getRequestParams);
// 手机端
mobile(app);
// 官网
admin(app);
// 账户
account(app);
// 运营
manage(app);
// 上传
upload(app);

// error-handling
app.on('error', (err, ctx) => {
  logger.error('server error', err, ctx);
});

module.exports = app;
