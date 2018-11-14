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
router.get('/getTree', async ctx => {
  const response = await proxyService.postProxy(ctx, getTree);
  return (ctx.body = response);
});

// 创建部门
router.get('/creatApart', async ctx => {
  const response = await proxyService.postProxy(ctx, creatApart);
  return (ctx.body = response);
});

// 删除部门
router.get('/delApart', async ctx => {
  const response = await proxyService.postProxy(ctx, delApart);
  return (ctx.body = response);
});

// 删除部门
router.get('/moveApart', async ctx => {
  const response = await proxyService.postProxy(ctx, moveApart);
  return (ctx.body = response);
});

//
router.get('/formWecode', async ctx => {
  const response = await proxyService.postProxy(ctx, formWecode);
  return (ctx.body = response);
});

//
router.get('/isAddUserAvail', async ctx => {
  let response = await proxyService.postProxy(ctx, isAddUserAvail);
  return (ctx.body = response);
});

// 修改部门
router.get('/modifyApart', async ctx => {
  const response = await proxyService.postProxy(ctx, modifyApart);
  return (ctx.body = response);
});

//
router.get('/processUser', async ctx => {
  const response = await proxyService.postProxy(ctx, processUser);
  return (ctx.body = response);
});

//
router.get('/unbindUser', async ctx => {
  const response = await proxyService.postProxy(ctx, unbindUser);
  return (ctx.body = response);
});

// 添加用户
router.get('/addUser', async ctx => {
  let params = ctx.request.query;
  params.deptId = params.deptId - 0;
  params.sex = params.sex - 0;
  params.addRoleIds = params.addRoleIds.map(item => {
    return item - 0;
  });
  const response = await proxyService.postProxy(ctx, addUser, { params });
  return (ctx.body = response);
});

// 修改用户
router.get('/modifyUserDetail', async ctx => {
  let params = ctx.request.query;
  params.eeId = params.eeId - 0;
  params.sex = params.sex - 0;
  const response = await proxyService.postProxy(ctx, modifyUserDetail, { params });
  return (ctx.body = response);
});

router.get('/userRightsList', async ctx => {
  const response = await proxyService.postProxy(ctx, userRightsList);
  return (ctx.body = response);
});

router.get('/userDetail', async ctx => {
  const response = await proxyService.postProxy(ctx, userDetail);
  return (ctx.body = response);
});
router.get('/modifyUserRole', async ctx => {
  let params = ctx.request.query;
  params.eeId = params.eeId - 0;
  const response = await proxyService.postProxy(ctx, modifyUserRole);
  return (ctx.body = response);
});
router.get('/setUserZuoxi', async ctx => {
  const response = await proxyService.postProxy(ctx, setUserZuoxi);
  return (ctx.body = response);
});
router.get('/addRights', async ctx => {
  const response = await proxyService.postProxy(ctx, addRights);
  return (ctx.body = response);
});
router.get('/updateRole', async ctx => {
  const response = await proxyService.postProxy(ctx, updateRole);
  return (ctx.body = response);
});
router.get('/addMultiRights', async ctx => {
  const response = await proxyService.postProxy(ctx, addMultiRights);
  return (ctx.body = response);
});
router.get('/createCompany', async ctx => {
  const response = await proxyService.postProxy(ctx, createCompany);
  return (ctx.body = response);
});
router.get('/addApart', async ctx => {
  const response = await proxyService.postProxy(ctx, addApart);
  return (ctx.body = response);
});
router.get('/getRightsList', async ctx => {
  const response = await proxyService.postProxy(ctx, getRightsList);
  return (ctx.body = response);
});
router.get('/searchOption', async ctx => {
  const response = await proxyService.postProxy(ctx, searchOption);
  return (ctx.body = response);
});
router.get('/zuoxiList', async ctx => {
  const response = await proxyService.postProxy(ctx, zuoxiList);
  return (ctx.body = response);
});
// 获取员工
router.get('/getUsers', async ctx => {
  const response = await proxyService.postProxy(ctx, getUsers);
  return (ctx.body = response);
});
// 获取查询列表数据
router.get('/searchOption', async ctx => {
  const response = await proxyService.postProxy(ctx, searchOption);
  return (ctx.body = response);
});
// 获取坐席列表
router.get('/zuoxiList', async ctx => {
  const response = await proxyService.postProxy(ctx, zuoxiList);
  return (ctx.body = response);
});
router.get('/setTopUser', async ctx => {
  const response = await proxyService.postProxy(ctx, setTopUser);
  return (ctx.body = response);
});
router.get('/cancelTopUser', async ctx => {
  const response = await proxyService.postProxy(ctx, cancelTopUser);
  return (ctx.body = response);
});

export default router;
