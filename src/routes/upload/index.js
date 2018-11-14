import Router from 'koa-router';
import upload from './upload';
const router = new Router();

// 上传服务
router.use('/api', upload.routes(), upload.allowedMethods());

export default function(app) {
  app.use(router.routes());
}
