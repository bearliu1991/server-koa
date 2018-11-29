import Router from 'koa-router';
import multer from 'koa-multer';
import fs from 'fs';
import getWebData from '../../common/getWebData';
// import base64Img from 'base64-img';
import uploadService from '../../common/uploadService';
import { base64String } from '../../utils/utils';
import { readDuration } from './ffmpeg';
const router = new Router();

const config = require('config-lite')({
  filename: 'default',
  config_basedir: __dirname,
  config_dir: 'config',
});
const { cachePath } = config;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, cachePath);
  },
  filename: function(ctx, file, cb) {
    const fileFormat = file.originalname.split('.');
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
  },
});
const upload = multer({ storage: storage });
// 上传文件
router.post(
  '/upload',
  upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'file', maxCount: 1 },
    { name: 'fileList', maxCount: 12 },
    { name: 'aduio', maxCount: 1 },
  ]),
  async ctx => {
    // 单文件
    if (ctx.req.files['avatar'] || ctx.req.files['file']) {
      let file = ctx.req.files['avatar'] ? ctx.req.files['avatar'][0] : ctx.req.files['file'][0];
      const response = await uploadService.upload(file.path);
      return (ctx.body = response);
    } else if (ctx.req.files['fileList']) {
      // 多文件
      const uploadList = ctx.req.files['fileList'].map(file => {
        return uploadService.upload(file.path);
      });
      const resultList = await Promise.all(uploadList)
        .then(response => {
          return response.reduce(
            (init, next) => {
              init.data = [...init.data, next.data];
              return init;
            },
            { code: 1, message: '上传成功', data: [] }
          );
        })
        .catch(() => {
          return { code: 110, message: '上传失败' };
        });
      return (ctx.body = resultList);
    } else if (ctx.req.files['aduio']) {
      let file = ctx.req.files['aduio'][0];

      const duration = await readDuration(file.path);
      console.log(1231231, duration);
      return (ctx.body = duration);
    } else {
      // 使用form表单上传多个文件
      return (ctx.body = { code: 110, message: '字段错误或者传递文件类型错误' });
    }
  }
);

// 下载
router.get('/download', async ctx => {
  const fileId = ctx.requestParams.fileId;
  const file = await uploadService.download(fileId);
  if (file.code != 1) {
    ctx.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename=' + file.filename,
    });
    ctx.body = fs.createReadStream(file.filepath);
  } else {
    return file;
  }
});

// 删除
router.get('/deleteuploadfile', async ctx => {
  const fileId = ctx.requestParams.fileId;
  const response = await uploadService.del(fileId);
  return (ctx.body = response);
});
// 预览文件
router.get('/overview', async ctx => {
  const fileId = ctx.requestParams.fileId;
  let res = await getWebData.getFdfsImg(fileId);
  return (ctx.body = res);
});

// 上传base64字符串转换成文件保存
router.post('/uploadfile', async ctx => {
  let type = ctx.requestParams.type;
  if (type === 'getWXqrcode') {
    let response = await getWebData.httpsGet(ctx.requestParams.qrcodeSrc);
    let base64Img = response.toString('base64');
    ctx.body = { base64: 'data:image/jpeg;base64,' + base64Img };
  } else if (type === 'base64') {
    let src_str = ctx.requestParams.postcard,
      pic_ext = src_str.split(';', 1)[0].split('/', 2)[1],
      fileName = ctx.requestParams.name;
    let buf = base64String(src_str);
    let store_path = 'uploadFiles/' + fileName + '.' + pic_ext;

    fs.writeFile(store_path, buf, err => {
      if (err) {
        ctx.body = { code: 0, err };
      } else {
        ctx.body = { store_path };
      }
    });
  }
});

export default router;
