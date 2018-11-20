import Router from 'koa-router';
import RES from './const';

const router = new Router();

// 总会话列表
router.get('/contactRecord', async ctx => {
  return (ctx.body = { code: 1, data: RES.records });
});
// 个人信息
router.post('/userDetails', async ctx => {
  let id = ctx.request.body.id;
  return (ctx.body = { code: 1, data: RES.userDetail[id] });
});
// 获取客服列表
router.post('/services', async ctx => {
  return (ctx.body = { code: 1, data: RES.services });
});
// 获取客服列表
router.post('/groups', async ctx => {
  return (ctx.body = { code: 1, data: RES.groups });
});
// 获取消息内容
router.post('/msgRecord', async ctx => {
  var firstPageNum = 12;
  var perPageNum = 7;
  // let param = { id: req.body.id }
  let param = ctx.request.body;
  let data = RES['chat' + param.id];
  let dataArr = [];
  for (let key of Object.keys(data)) {
    dataArr.push(data[key]);
  }
  let arr = [];
  if (param.pageId) {
    if (dataArr.length > (param.pageId - 0) * perPageNum + firstPageNum) {
      arr = dataArr.slice(
        (param.pageId - 1) * perPageNum + firstPageNum,
        (param.pageId - 0) * perPageNum + firstPageNum
      );
    } else {
      arr = dataArr.slice((param.pageId - 1) * perPageNum + firstPageNum, dataArr.length);
    }
  } else {
    arr = dataArr.slice(0, 12);
  }
  return (ctx.body = { code: 1, data: arr });
});
// 聊天内容翻译
router.post('/translate', async ctx => {
  return (ctx.body = { code: 1, data: RES.translate });
});
// 聊天内容翻译
router.post('/transText', async ctx => {
  return (ctx.body = { code: 1, data: RES.transText });
});
// 删除信息
router.post('/deleteMsg', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: '' });
});
// 删除信息
router.post('/delContact', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: '' });
});
// 模板消息
router.post('/models', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.models });
});
// 模板消息
router.post('/modelData', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: 'modelData' });
});
// 获取表情图片
router.post('/emotions', async ctx => {
  let id = ctx.request.body.id;
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.emotions[id] });
});
// 获取资源信息
router.post('/files', async ctx => {
  let id = ctx.request.body.id;
  return (ctx.body = { code: 1, msg: 'sucess', data: RES['source' + id] });
});
// 所有标签
router.get('/allMarks', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.allMarks });
});
// 最近联系人列表
router.get('/latestContact', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.latestContact });
});
// 搜索分类
router.get('/searchTypes', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.searchTypes });
});
// 搜索分类
router.post('/getStore', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.store });
});
// 成员列表
router.get('/memberList', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.memberList });
});
// 设置标签
router.get('/setMark', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.setMark });
});
// 添加收藏消息
router.post('/addStoreMsg', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: null });
});
// 添加收藏分组
router.post('/addStoreGroup', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: null });
});
// 删除收藏分组
router.post('/delStoreGroup', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: null });
});
// 删除收藏消息
router.post('/delStoreMsg', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: null });
});
// 全部标签
router.post('/allMarks', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.allMarks });
});
// 已选标签
router.post('/choosedMarks', async ctx => {
  let id = ctx.request.body.id;
  let mark = id < 3 ? RES.chooseMark[id] : RES.chooseMark[3];
  return (ctx.body = { code: 1, msg: 'sucess', data: mark });
});
// 设置标签
router.post('/setMarks', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: null });
});
// 取消标签
router.post('/cancelMarks', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: null });
});
// 消息列表
router.get('/msgPortrait', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.msgPortrait });
});
// 用户头像部位信息
router.get('/userPortrait', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.userPortrait });
});
// 粉丝会话列表
router.get('/fansChatList', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.fansChatList });
});
// 用户信息
router.get('/userInfo', async ctx => {
  return (ctx.body = { code: 1, data: RES.userInfo });
});
// 搜索用户
router.post('/searchUser', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.searchUser });
});
// 置顶
router.post('/reorder', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: null });
});
// 取消置顶
router.post('/cancelReorder', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: null });
});
// 视频资源
router.get('/videos', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.videos });
});
// 音频资源
router.get('/audios', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.audios });
});
// 图文链接
router.get('/picText', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: RES.picText });
});

module.exports = router;
