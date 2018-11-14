import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getUserDataMulti,
  getUserDataMultiDetail,
  updateUserStatus,
  getUserAuthMenu,
  queryManageUserByUserId,
  updateManageUserStatus,
  deleteManageUser,
  getUserDataOperateByPager,
  saveOperateUser,
  updateOperateUser,
  updateManageUserRole,
} from '../../api';

const router = new Router();

// 获取个人信息复合列表
router.post('/getUserDataMulti', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserDataMulti);
  return (ctx.body = response);
});
// 获取个人信息复合详情
router.post('/getUserDataMultiDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserDataMultiDetail);
  return (ctx.body = response);
});
// 更新用户状态
router.post('/updateUserStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, updateUserStatus);
  return (ctx.body = response);
});

// 获取个人信息和菜单
router.post('/getUserAuthMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserAuthMenu);
  return (ctx.body = response);
});

// 运营平台的用户管理 （运营用户）
router.post('/queryManageUserByUserId', async ctx => {
  const response = await proxyService.postProxy(ctx, queryManageUserByUserId);
  return (ctx.body = response);
});
// 批量启用禁用用户
router.post('/updateManageUserStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, updateManageUserStatus);
  return (ctx.body = response);
});
// 删除运营用户
router.post('/deleteManageUser', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteManageUser);
  return (ctx.body = response);
});
// 运营用户列表
router.post('/getUserDataOperateByPager', async ctx => {
  const response = await proxyService.postProxy(ctx, getUserDataOperateByPager);
  return (ctx.body = response);
});
// 运营用户新增
router.post('/saveOperateUser', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOperateUser);
  return (ctx.body = response);
});
// 运营用户修改
router.post('/updateOperateUser', async ctx => {
  const response = await proxyService.postProxy(ctx, updateOperateUser);
  return (ctx.body = response);
});
// 运营用户修改
router.post('/updateManageUserRole', async ctx => {
  const response = await proxyService.postProxy(ctx, updateManageUserRole);
  return (ctx.body = response);
});

export default router;
