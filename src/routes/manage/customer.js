import Router from 'koa-router';
import proxyService from '../../common/proxyService';
import {
  getCustomerListByPage,
  deleteCustomer,
  updateCustomerStatus,
  updateCustomerRemarkr,
  selectCustomerInfo,
  saveCustomer,
} from '../../api';
const router = new Router();

router.post('/getCustomerListByPage', async ctx => {
  const response = await proxyService.postProxy(ctx, getCustomerListByPage);
  return (ctx.body = response);
});

router.post('/deleteCustomer', async ctx => {
  const response = await proxyService.postProxy(ctx, deleteCustomer);
  return (ctx.body = response);
});

router.post('/updateCustomerStatus', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCustomerStatus);
  return (ctx.body = response);
});
router.post('/updateCustomerRemarkr', async ctx => {
  const response = await proxyService.postProxy(ctx, updateCustomerRemarkr);
  return (ctx.body = response);
});

router.post('/selectCustomerInfo', async ctx => {
  const response = await proxyService.postProxy(ctx, selectCustomerInfo);
  return (ctx.body = response);
});

router.post('/saveCustomer', async ctx => {
  const response = await proxyService.postProxy(ctx, saveCustomer);
  return (ctx.body = response);
});

export default router;
