import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getAuthRoleItemByRoleId,
  saveOrUpdateAuthRoleItem,
  deleteAuthRole,
  queryAuthRole,
  saveOrUpdateAuthRole,
  deleteAuthRoleByList,
  updateAuthRoleStatusByList,
  queryAuthRoleByBusiType,
  getAuthMenuItemByMenuId,
  saveOrUpdateAuthMenuItem,
  deletAuthMenu,
  queryAuthMenuTreeBySubSystemAndBusiType,
  saveOrUpdateAuthMenu,
  deleteAuthMenuItem,
  saveMenuAuthItem,
  saveAuthMenuItem,
  queryAuthItem,
  deleteAuthItem,
  saveOrUpdateAuthItem,
  deleteAuthItemList,
} from '../../api';
const router = new Router();

// 查询数据字典
router.post('/getAuthRoleItemByRoleId', async ctx => {
  const response = await proxyService.postProxy(ctx, getAuthRoleItemByRoleId);
  return (ctx.body = response);
});

//
router.post('/saveOrUpdateAuthRoleItem', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateAuthRoleItem);
  return (ctx.body = response);
});

//
router.post('/deleteAuthRole', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteAuthRole);
  return (ctx.body = response);
});

//
router.post('/queryAuthRole', async ctx => {
  const response = await proxyService.postProxy(ctx, queryAuthRole);
  return (ctx.body = response);
});

//
router.post('/saveOrUpdateAuthRole', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateAuthRole);
  return (ctx.body = response);
});

//
router.post('/deleteAuthRoleByList', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteAuthRoleByList);
  return (ctx.body = response);
});

//
router.post('/updateAuthRoleStatusByList', async ctx => {
  const response = await proxyService.postProxy(ctx, updateAuthRoleStatusByList);
  return (ctx.body = response);
});

//
router.post('/updateAuthRoleStatusByList', async ctx => {
  const response = await proxyService.postProxy(ctx, updateAuthRoleStatusByList);
  return (ctx.body = response);
});

//
router.post('/queryAuthRoleByBusiType', async ctx => {
  const response = await proxyService.postProxy(ctx, queryAuthRoleByBusiType);
  return (ctx.body = response);
});

// 菜单
router.post('/getAuthMenuItemByMenuId', async ctx => {
  const response = await proxyService.postProxy(ctx, getAuthMenuItemByMenuId);
  return (ctx.body = response);
});

router.post('/saveOrUpdateAuthMenuItem', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateAuthMenuItem);
  return (ctx.body = response);
});
router.post('/deletAuthMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, deletAuthMenu);
  return (ctx.body = response);
});
router.post('/queryAuthMenuTreeBySubSystemAndBusiType', async ctx => {
  const response = await proxyService.postProxy(ctx, queryAuthMenuTreeBySubSystemAndBusiType);
  return (ctx.body = response);
});
router.post('/saveOrUpdateAuthMenu', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateAuthMenu);
  return (ctx.body = response);
});
router.post('/deleteAuthMenuItem', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteAuthMenuItem);
  return (ctx.body = response);
});
router.post('/saveMenuAuthItem', async ctx => {
  const response = await proxyService.postProxy(ctx, saveMenuAuthItem);
  return (ctx.body = response);
});
router.post('/saveAuthMenuItem', async ctx => {
  const response = await proxyService.postProxy(ctx, saveAuthMenuItem);
  return (ctx.body = response);
});

// authority
router.post('/queryAuthItem', async ctx => {
  const response = await proxyService.postProxy(ctx, queryAuthItem);
  return (ctx.body = response);
});

router.post('/deleteAuthItem', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteAuthItem);
  return (ctx.body = response);
});
router.post('/saveOrUpdateAuthItem', async ctx => {
  const response = await proxyService.postProxy(ctx, saveOrUpdateAuthItem);
  return (ctx.body = response);
});

router.post('/deleteAuthItemList', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteAuthItemList);
  return (ctx.body = response);
});

export default router;
