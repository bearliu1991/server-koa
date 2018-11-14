import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  selectSeatByPagerOperate,
  getSeatDetailByOperation,
  updateSeatListStatusByOperation,
} from '../../api';
const router = new Router();

router.post('/selectSeatByPagerOperate', async ctx => {
  const response = await proxyService.postProxy(ctx, selectSeatByPagerOperate);
  return (ctx.body = response);
});

router.post('/getSeatDetailByOperation', async ctx => {
  const response = await proxyService.postProxy(ctx, getSeatDetailByOperation);
  return (ctx.body = response);
});

router.post('/updateSeatListStatusByOperation', async ctx => {
  const response = await proxyService.postProxy(ctx, updateSeatListStatusByOperation);
  return (ctx.body = response);
});

export default router;
