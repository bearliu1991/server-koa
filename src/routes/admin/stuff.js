import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getTree,
  creatApart,
  delApart,
  moveApart,
  formWecode,
  isAddUserAvail,
  modifyApart,
  processUser,
  unbindUser,
  addUser,
  modifyUserDetail,
  userRightsList,
  userDetail,
  modifyUserRole,
  setUserZuoxi,
  addRights,
  updateRole,
  addMultiRights,
  createCompany,
  addApart,
  getRightsList,
  searchOption,
  zuoxiList,
  getUsers,
  setTopUser,
  cancelTopUser,
} from '../../api';

const router = new Router();

// 获取部门树
router.post('/getTree', async ctx => {
  const response = await proxyService.postProxy(ctx, getTree);
  return (ctx.body = response);
});

// 创建部门
router.post('/creatApart', async ctx => {
  const response = await proxyService.postProxy(ctx, creatApart);
  return (ctx.body = response);
});

// 删除部门
router.post('/delApart', async ctx => {
  const response = await proxyService.postProxy(ctx, delApart);
  return (ctx.body = response);
});

// 删除部门
router.get('/moveApart', async ctx => {
  const response = await proxyService.postProxy(ctx, moveApart);
  return (ctx.body = response);
});

//
router.post('/formWecode', async ctx => {
  const response = await proxyService.postProxy(ctx, formWecode);
  return (ctx.body = response);
});

//
router.post('/isAddUserAvail', async ctx => {
  let response = await proxyService.postProxy(ctx, isAddUserAvail);
  return (ctx.body = response);
});

// 修改部门
router.post('/modifyApart', async ctx => {
  const response = await proxyService.postProxy(ctx, modifyApart);
  return (ctx.body = response);
});

//
router.post('/processUser', async ctx => {
  const response = await proxyService.postProxy(ctx, processUser);
  return (ctx.body = response);
});

//
router.post('/unbindUser', async ctx => {
  const response = await proxyService.postProxy(ctx, unbindUser);
  return (ctx.body = response);
});

// 添加用户
router.post('/addUser', async ctx => {
  const response = await proxyService.postProxy(ctx, addUser);
  return (ctx.body = response);
});

// 修改用户
router.post('/modifyUserDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, modifyUserDetail);
  return (ctx.body = response);
});

router.post('/userRightsList', async ctx => {
  const response = await proxyService.postProxy(ctx, userRightsList);
  return (ctx.body = response);
});

router.post('/userDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, userDetail);
  return (ctx.body = response);
});
router.post('/modifyUserRole', async ctx => {
  const response = await proxyService.postProxy(ctx, modifyUserRole);
  return (ctx.body = response);
});
router.post('/setUserZuoxi', async ctx => {
  const response = await proxyService.postProxy(ctx, setUserZuoxi);
  return (ctx.body = response);
});
router.post('/addRights', async ctx => {
  const response = await proxyService.postProxy(ctx, addRights);
  return (ctx.body = response);
});
router.post('/updateRole', async ctx => {
  const response = await proxyService.postProxy(ctx, updateRole);
  return (ctx.body = response);
});
router.post('/addMultiRights', async ctx => {
  const response = await proxyService.postProxy(ctx, addMultiRights);
  return (ctx.body = response);
});
router.post('/createCompany', async ctx => {
  const response = await proxyService.postProxy(ctx, createCompany);
  return (ctx.body = response);
});
router.post('/addApart', async ctx => {
  const response = await proxyService.postProxy(ctx, addApart);
  return (ctx.body = response);
});
router.post('/getRightsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getRightsList);
  return (ctx.body = response);
});
router.post('/searchOption', async ctx => {
  const response = await proxyService.postProxy(ctx, searchOption);
  return (ctx.body = response);
});
router.post('/zuoxiList', async ctx => {
  const response = await proxyService.postProxy(ctx, zuoxiList);
  return (ctx.body = response);
});
// 获取员工
router.post('/getUsers', async ctx => {
  const response = await proxyService.postProxy(ctx, getUsers);
  return (ctx.body = response);
});
// 获取查询列表数据
router.post('/searchOption', async ctx => {
  const response = await proxyService.postProxy(ctx, searchOption);
  return (ctx.body = response);
});
// 获取坐席列表
router.post('/zuoxiList', async ctx => {
  const response = await proxyService.postProxy(ctx, zuoxiList);
  return (ctx.body = response);
});
router.post('/setTopUser', async ctx => {
  const response = await proxyService.postProxy(ctx, setTopUser);
  return (ctx.body = response);
});
router.post('/cancelTopUser', async ctx => {
  const response = await proxyService.postProxy(ctx, cancelTopUser);
  return (ctx.body = response);
});

export default router;
