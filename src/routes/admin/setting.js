import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import { transformData } from '../../utils/utils';
import {
  updateCorpLogo,
  getCorpInfoMulti,
  getCorpEmpPacStatus,
  updateCorpAddress,
  updateAdminEmployeeName,
} from '../../api';

const router = new Router();

// 获取坐席
router.get('/updateCorpLogo', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpLogo);
  return (ctx.body = response);
});

// 修改公司logo
router.get('/getCorpInfoMulti', async ctx => {
  let response = await proxyService.postProxy(ctx, getCorpInfoMulti);
  if (response.code === 1) {
    response.data = transformData(response.data, {
      accountNickName: 'accountNickName',
      appidNum: 'appidNum',
      appidNumStatus: 'appidNumStatus',
      area: 'area',
      city: 'city',
      contactName: 'contactName',
      corpId: 'corpId',
      corpName: 'corpName',
      createTime: 'createTime',
      endTime: 'endTime',
      logo: 'logo',
      packageName: 'packageName',
      picUrl: 'picUrl',
      province: 'province',
      startTime: 'startTime',
      status: 'status',
      telephone: 'telephone',
    });
  }
  return (ctx.body = response);
});

// 查询公司，套餐，员工状态
router.get('/getCorpEmpPacStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, getCorpEmpPacStatus);
  return (ctx.body = response);
});

// 修改公司省市区
router.get('/updateCorpAddress', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpAddress);
  return (ctx.body = response);
});

// 修改管理员员工姓名
router.get('/updateAdminEmployeeName', async ctx => {
  const response = await proxyService.postProxy(ctx, updateAdminEmployeeName);
  return (ctx.body = response);
});

export default router;
