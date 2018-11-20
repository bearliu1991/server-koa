import Router from 'koa-router';
// import RES from './const'

const router = new Router();

// 登陆
router.post('/login', async ctx => {
  return (ctx.body = { code: 1, messge: 'sucess', data: '' });
});

router.post('/register', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: '' });
});

router.post('/logout', async ctx => {
  return (ctx.body = { code: 1, msg: 'sucess', data: '' });
});

router.post('/checkUpdate', async ctx => {
  return (ctx.body = {
    code: 1,
    msg: 'sucess',
    data: {
      isUpdate: true,
      hotUpdate: false,
      installUpdate: true,
      innerVersion: '2',
      outerVersion: '2.10.1',
      hotUpdateCont: {
        innerV: '2',
        processType: 'cover',
        downloadUrl: '',
        serverRelativeUrl: '',
      },
      updateUrl: '',
      descripts: [
        '优化检测流程优化检测流优化检测流优化检测流优化检测流',
        '活动页更换',
        'bug修复',
        '小数点问题修复',
      ],
      installDes: '',
    },
  });
});

module.exports = router;
