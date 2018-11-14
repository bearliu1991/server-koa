import Router from 'koa-router';
import multer from 'koa-multer';
import path from 'path';
import uploadService from '../../common/uploadService';
const router = new Router();

const cachePath = path.resolve(__dirname, '../../../uploadFiles');
const upload = multer({ dest: cachePath });
// 上传
router.post('/upload', upload.single('file'), async ctx => {
  const file = ctx.file;
  const response = await uploadService.upload(cachePath, file.originalname);
  return (ctx.body = response);
});

export default router;
