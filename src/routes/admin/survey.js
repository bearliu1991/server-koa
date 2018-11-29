import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { transformData } from '../../utils/utils';
import {
  getKeyIndicators,
  saveloginCompany,
  getCorpStatisticsInfo,
  queryCorpPackageById,
  getAuthUrl,
  updateBindCorp,
  queryCorpPackRoleList,
  queryCompanyStats,
  loadTConfigListTreeAdmin,
} from '../../api';

const router = new Router();

//
router.get('/getKeyIndicators', async ctx => {
  let params = ctx.request.query;
  params.time = Number(params.time);
  const response = await proxyService.postProxy(ctx, getKeyIndicators, {
    params,
  });
  return (ctx.body = response);
});

//
router.get('/saveloginCompany', async ctx => {
  let params = ctx.request.query;
  params.corpId = Number(params.corpId);
  let response = await proxyService.postProxy(ctx, saveloginCompany, {
    params,
  });
  if (response.code === 1) {
    response.data = transformData(response.data, {
      area: 'area',
      busiType: 'busiType',
      city: 'city',
      corpPack: 'corpPack',
      contactName: 'contactName',
      createId: 'createId',
      createTime: 'createTime',
      employeeData: 'employeeData',
      id: 'id',
      menuTree: 'menuTree',
      packId: 'packId',
      province: 'province',
      status: 'status',
      telephone: 'telephone',
      corpName: 'corpName',
    });
  }
  return (ctx.body = response);
});

//
router.get('/getCorpStatisticsInfo', async ctx => {
  let params = ctx.request.query;
  params.corpId = Number(params.corpId);
  const response = await proxyService.postProxy(ctx, getCorpStatisticsInfo, {
    params,
  });
  return (ctx.body = response);
});

//
router.get('/queryCorpPackageById', async ctx => {
  let params = ctx.request.query;
  params.id = Number(params.id);
  const response = await proxyService.postProxy(ctx, queryCorpPackageById, {
    params,
  });
  return (ctx.body = response);
});

//
router.get('/getAuthUrl', async ctx => {
  let params = ctx.request.query;
  params.reqType = Number(params.reqType);
  params.authType = Number(params.authType);
  const response = await proxyService.postProxy(ctx, getAuthUrl, {
    params,
  });
  return (ctx.body = response);
});

//
router.get('/updateBindCorp', async ctx => {
  let params = ctx.request.query;
  params.reAuth = Number(params.reAuth);
  let response = await proxyService.postProxy(ctx, updateBindCorp, {
    params,
  });
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
  let response = await proxyService.postProxy(ctx, loadTConfigListTreeAdmin);
  return (ctx.body = response);
});
export default router;
