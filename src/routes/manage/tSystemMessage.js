import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getTSystemMessageListByPage,
  saveOrUpdateTSystemMessage,
  getTSystemMessageById,
  delTSystemMessage,
} from '../../api';
const router = new Router();

router.post('/getTSystemMessageListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getTSystemMessageListByPage);
  return (ctx.body = response);
});

router.post('/saveOrUpdateTSystemMessage', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateTSystemMessage);
  return (ctx.body = response);
});
router.post('/getTSystemMessageById', async ctx => {
  const response = await proxyService.postProxy(ctx, getTSystemMessageById);
  return (ctx.body = response);
});
router.post('/delTSystemMessage', async ctx => {
  const response = await proxyService.postProxy(ctx, delTSystemMessage);
  return (ctx.body = response);
});

export default router;
