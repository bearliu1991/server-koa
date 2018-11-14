const api = '';
module.exports = {
  joinCorp: api + '/employee/updateInviteEmployBind', // 绑定员工 与 微信信息
  verifyCode: api + '/user/resendCode', // 生成验证码
  getUserInfo: api + '/employee/getInviteEmployInfo', // 通过邀请码获取邀请员工信息
  getOrderPayInfo: api + '/uPayOrder/getOrderPayInfo', // 扫码获取支付信息接口
  updatePayOrderReturnParam: api + '/uPayOrder/updatePayOrderReturnParam', // 确认支付
  updatePayOrderByPayType: api + '/uPayOrder/updatePayOrderByPayType', // 支付查询接口
  updatePayOrderByWxNotify: api + '/uPayOrder/updatePayOrderByWxNotify', // 微信异步通知
  updatePayOrderByAliPayNotify: api + '/uPayOrder/updatePayOrderByAliPayNotify', // 支付宝异步通知
};
