import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getKeyIndicators,
  saveloginCompany,
  getCorpStatisticsInfo,
  queryCorpPackageById,
  getAuthUrl,
  updateBindCorp,
  queryCorpPackRoleList,
  queryCompanyStats,
  queryTItemValueByPager,
} from '../../api';

const router = new Router();

//
router.get('/getKeyIndicators', async ctx => {
  let params = ctx.request.query;
  params.time = Number(params.time);
  params.appAccountId = Number(params.appAccountId);
  const response = await proxyService.postProxy(ctx, getKeyIndicators, { params });
  return (ctx.body = response);
});

//
router.get('/saveloginCompany', async ctx => {
  let params = ctx.request.query;
  params.corpId = Number(params.corpId);
  const response = await proxyService.postProxy(ctx, saveloginCompany, { params });
  return (ctx.body = response);
});

//
router.get('/getCorpStatisticsInfo', async ctx => {
  let params = ctx.request.query;
  params.corpId = Number(params.corpId);
  const response = await proxyService.postProxy(ctx, getCorpStatisticsInfo, { params });
  return (ctx.body = response);
});

//
router.get('/queryCorpPackageById', async ctx => {
  let params = ctx.request.query;
  params.id = Number(params.id);
  const response = await proxyService.postProxy(ctx, queryCorpPackageById, { params });
  return (ctx.body = response);
});

//
router.get('/getAuthUrl', async ctx => {
  let params = ctx.request.query;
  params.reqType = Number(params.reqType);
  params.authType = Number(params.authType);
  const response = await proxyService.postProxy(ctx, getAuthUrl, { params });
  return (ctx.body = response);
});

//
router.get('/updateBindCorp', async ctx => {
  let params = ctx.request.query;
  params.reAuth = Number(params.reAuth);
  let response = await proxyService.postProxy(ctx, updateBindCorp, { params });
  return (ctx.body = response);
});

//
router.get('/queryCorpPackRoleList', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCorpPackRoleList);
  return (ctx.body = response);
});

//
router.get('/queryCompanyStats', async ctx => {
  const response = await proxyService.postProxy(ctx, queryCompanyStats);
  return (ctx.body = response);
});
// 获取数据字典值
router.get('/queryTItemValueByPager', async ctx => {
  let params = ctx.request.query;
  params.limit = 50;
  let response = await proxyService.postProxy(ctx, queryTItemValueByPager, { params });
  return (ctx.body = response);
});
export default router;
