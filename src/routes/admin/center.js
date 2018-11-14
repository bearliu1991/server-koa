import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getUserCorpAuthMulti,
  updateCorpStatusByCorpIdAdmin,
  updateCorpName,
  updataCorp,
  savelogoutCompany,
  editUser,
  getScanResult,
  updateCorpMobileById,
  getPersonalInfo,
  checkCreateCorpApply,
  logout,
} from '../../api';

const router = new Router();

// 获取当前用户创建或加入（中） 与 审核通过的 公司列表
router.get('/getUserCorpAuthMulti', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserCorpAuthMulti);
  return (ctx.body = response);
});
// 更新公司状态
router.get('/updateCorpStatusByCorpId', async ctx => {
  // 处理参数数组
  const corpIdList = ctx.requestParams['corpIdList[]'];
  if (typeof corpIdList === 'string') {
    ctx.requestParams['corpIdList'] = [corpIdList];
  } else {
    ctx.requestParams['corpIdList'] = corpIdList;
  }
  delete ctx.requestParams['corpIdList[]'];
  //
  const response = await proxyService.postProxy(ctx, updateCorpStatusByCorpIdAdmin);
  return (ctx.body = response);
});
// 修改企业名称
router.get('/updateCorpName', async ctx => {
  let params = ctx.request.query;
  params.applyId = Number(params.applyId);
  const response = await proxyService.postProxy(ctx, updateCorpName, { params });
  return (ctx.body = response);
});
// 更新公司状态
router.get('/updataCorp', async ctx => {
  let params = ctx.request.query;
  params.applyId = Number(params.applyId);
  const response = await proxyService.postProxy(ctx, updataCorp, { params });
  return (ctx.body = response);
});
// 离开公司
router.get('/savelogoutCompany', async ctx => {
  const response = await proxyService.postProxy(ctx, savelogoutCompany);
  return (ctx.body = response);
});

// 个人信息修改
router.get('/editUser', async ctx => {
  const response = await proxyService.postProxy(ctx, editUser);
  return (ctx.body = response);
});
// 扫描二维码后,查看扫描结果
router.get('/getScanResult', async ctx => {
  const response = await proxyService.postProxy(ctx, getScanResult);
  return (ctx.body = response);
});
// 修改绑定手机号,同时校验验证码
router.get('/updateCorpMobileById', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCorpMobileById);
  return (ctx.body = response);
});
// 获取个人信息
router.get('/getPersonalInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, getPersonalInfo);
  return (ctx.body = response);
});
// 新建企业检查
router.get('/checkCreateCorpApply', async ctx => {
  const response = await proxyService.postProxy(ctx, checkCreateCorpApply);
  return (ctx.body = response);
});
// 退出
router.get('/logout', async ctx => {
  const response = await proxyService.postProxy(ctx, logout);
  return (ctx.body = response);
});

export default router;
