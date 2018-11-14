const oms = '/oms';
const api = '';
module.exports = {
  // 用户相关
  login: oms + '/user/loginNormal', // 登陆
  logout: oms + '/user/logout', // 登出
  getSession: api + '/user/getSession', // 获取信息
};
