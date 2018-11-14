import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  deleteTPackageById,
  getTPackageById,
  getTPackageListByPage,
  updateTPackageStatusById,
  addOrUpdateTPackage,
} from '../../api';
const router = new Router();

router.post('/deleteTPackageById', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteTPackageById);
  return (ctx.body = response);
});

router.post('/getTPackageById', async ctx => {
  const response = await proxyService.postProxy(ctx, getTPackageById);
  return (ctx.body = response);
});

router.post('/getTPackageListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getTPackageListByPage);
  return (ctx.body = response);
});

router.post('/updateTPackageStatusById', async ctx => {
  const response = await proxyService.postProxy(ctx, updateTPackageStatusById);
  return (ctx.body = response);
});

router.post('/addOrUpdateTPackage', async ctx => {
  const response = await proxyService.postProxy(ctx, addOrUpdateTPackage);
  return (ctx.body = response);
});
export default router;
