import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { deleteWord, updateWordUsage, addWord, getWordList, getWordInfo } from '../../api';
const router = new Router();

//
router.post('/deleteWord', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteWord);
  return (ctx.body = response);
});

//
router.post('/updateWordUsage', async ctx => {
  const response = await proxyService.postProxy(ctx, updateWordUsage);
  return (ctx.body = response);
});

//
router.post('/addWord', async ctx => {
  const response = await proxyService.postProxy(ctx, addWord);
  return (ctx.body = response);
});

//
router.post('/getWordList', async ctx => {
  const response = await proxyService.postProxy(ctx, getWordList);
  return (ctx.body = response);
});

//
router.post('/getWordInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getWordInfo);
  return (ctx.body = response);
});

export default router;
