const oms = '/oms';
const api = '';
module.exports = {
  //敏感词接口
  getWordList: api + '/sensitive/getWordList',
  getWordInfo: api + '/sensitive/getWordInfo',
  delWordUsage: api + '/sensitive/delWordUsage',
  addWordUsage: api + '/sensitive/addWordUsage',
  deleteWord: api + '/sensitive/deleteWord',
  addWord: api + '/sensitive/addWord',
  updateWordUsage: api + '/sensitive/updateWordUsage',
  //菜单
  getAuthMenuItemByMenuId: oms + '/auth/getAuthMenuItemByMenuId',
  saveOrUpdateAuthMenuItem: oms + '/auth/saveOrUpdateAuthMenuItem',
  deletAuthMenu: oms + '/auth/deletAuthMenu',
  queryAuthMenuTreeBySubSystemAndBusiType: oms + '/auth/queryAuthMenuTreeBySubSystemAndBusiType',
  saveOrUpdateAuthMenu: oms + '/auth/saveOrUpdateAuthMenu',
  deleteAuthMenuItem: oms + '/auth/deleteAuthMenuItem',
  saveMenuAuthItem: oms + '/auth/saveMenuAuthItem',
  saveAuthMenuItem: oms + '/auth/saveAuthMenuItem',
  //角色
  getAuthRoleItemByRoleId: oms + '/auth/getAuthRoleItemByRoleId',
  saveOrUpdateAuthRoleItem: oms + '/auth/saveOrUpdateAuthRoleItem',
  deleteAuthRole: oms + '/auth/deleteAuthRole',
  queryAuthRole: oms + '/auth/queryAuthRole',
  saveOrUpdateAuthRole: oms + '/auth/saveOrUpdateAuthRole',
  queryAuthRoleByBusiType: oms + '/auth/queryAuthRoleByBusiType',
  deleteAuthRoleByList: oms + '/auth/deleteAuthRoleByList',
  updateAuthRoleStatusByList: oms + '/auth/updateAuthRoleStatusByList',
  //权限
  deleteAuthItem: oms + '/auth/deleteAuthItem',
  queryAuthItem: oms + '/auth/queryAuthItem',
  saveOrUpdateAuthItem: oms + '/auth/saveOrUpdateAuthItem',
  deleteAuthItemList: oms + '/auth/deleteAuthItemList',
  //数据字典(checked)
  deleteTItemValue: oms + '/tconfig/deleteTItemValue',
  updateTItemValue: oms + '/tconfig/updateTItemValue',
  queryTItemValue: oms + '/tconfig/queryTItemValue',
  addTItemValue: oms + '/tconfig/addTItemValue',
  queryTItemValueByPager: oms + '/tconfig/queryTItemValueByPager',
  updateTItemDefine: oms + '/tconfig/updateTItemDefine',
  addTItemDefine: oms + '/tconfig/addTItemDefine',
  deleteTItemDefine: oms + '/tconfig/deleteTItemDefine',
  queryTItemDefine: oms + '/tconfig/queryTItemDefine',
  queryTItemDefineByPager: oms + '/tconfig/queryTItemDefineByPager',
  loadTConfigListTree: oms + '/tconfig/loadTConfigListTree',
  queryTItemDefineTree: oms + '/tconfig/queryTItemDefineTree', // 查找字典配置树
  //客户
  deleteCustomer: oms + '/customer/deleteCustomer',
  updateCustomerStatus: oms + '/customer/updateCustomerStatus',
  updateCustomerRemarkr: oms + '/customer/updateCustomerRemarkr',
  selectCustomerInfo: oms + '/customer/selectCustomerInfo',
  getCustomerListByPage: oms + '/customer/getCustomerListByPage',
  saveCustomer: oms + '/customer/saveCustomer',
  //系统配置、系统变量
  delSysCfg: oms + '/tSysCfg/delSysCfg',
  getSysCfg: oms + '/tSysCfg/getSysCfg',
  getSysCfgListPaging: oms + '/tSysCfg/getSysCfgListPaging',
  updateSysCfg: oms + '/tSysCfg/updateSysCfg',
  addSysCfg: oms + '/tSysCfg/addSysCfg',
  // 套餐 (checked)
  deleteTPackageById: oms + '/tPackage/deleteTPackageById', // 删除套餐
  getTPackageById: oms + '/tPackage/getTPackageById', // 获取套餐信息详情
  getTPackageListByPage: oms + '/tPackage/getTPackageListByPage', // 获取套餐列表
  addOrUpdateTPackage: oms + '/tPackage/addOrUpdateTPackage', // 新增或修改套餐接口
  updateTPackageStatusById: oms + '/tPackage/updateTPackageStatusById', // 更新套餐状态
  // 状态配置
  getTStatusListByPage: oms + '/tStatus/getTStatusListByPage',
  getTStatusTableById: oms + '/tStatus/getTStatusTableById',
  delTStatusTableById: oms + '/tStatus/delTStatusTableById',
  saveTStatusTable: oms + '/tStatus/saveTStatusTable',
  delTStatusById: oms + '/tStatus/delTStatusById',
  getTStatusById: oms + '/tStatus/getTStatusById',
  saveOrUpdateTStatus: oms + '/tStatus/saveOrUpdateTStatus',
  // 服务配置
  delTService: oms + '/tService/delTService',
  getTServiceById: oms + '/tService/getTServiceById',
  getTServiceListByPage: oms + '/tService/getTServiceListByPage',
  saveOrUpdateTService: oms + '/tService/saveOrUpdateTService',
  // tJob
  deleteTJobCfg: oms + '/tJob/deleteTJobCfg',
  queryTJobCfg: oms + '/tJob/queryTJobCfg',
  addTJobCfg: oms + '/tJob/addTJobCfg',
  updateTJobCfg: oms + '/tJob/updateTJobCfg',
  queryTJobCfgByPager: oms + '/tJob/queryTJobCfgByPager',
  // 用户身份定义
  addTIdentity: oms + '/tconfig/addTIdentity',
  deleteTIdentity: oms + '/tconfig/deleteTIdentity',
  queryTIdentity: oms + '/tconfig/queryTIdentity',
  addTIdentityService: oms + '/tconfig/addTIdentityService',
  updateTIdentity: oms + '/tconfig/updateTIdentity',
  deleteTIdentityService: oms + '/tconfig/deleteTIdentityService',
  queryIdentityByPager: oms + '/tconfig/queryIdentityByPager',
  queryTIdentityService: oms + '/tconfig/queryTIdentityService',
  // 防作弊刷票配置
  queryAntiCheatCfgByPager: oms + '/tCheatConfig/queryAntiCheatCfgByPager',
  modAntiCheatCfg: oms + '/tCheatConfig/modAntiCheatCfg',
  delAntiCheatCfg: oms + '/tCheatConfig/delAntiCheatCfg',
  queryAntiCheatCfg: oms + '/tCheatConfig/queryAntiCheatCfg',
  addAntiCheatCfg: oms + '/tCheatConfig/addAntiCheatCfg',
  // APP应用注册表
  updateAppConfig: oms + '/tAppConfig/updateAppConfig',
  queryTAppConfigByPager: oms + '/tAppConfig/queryTAppConfigByPager',
  queryAppConfig: oms + '/tAppConfig/queryAppConfig',
  deleteAppConfig: oms + '/tAppConfig/deleteAppConfig',
  addAppConfig: oms + '/tAppConfig/addAppConfig',
  // 系统消息
  getTSystemMessageListByPage: oms + '/tSystemMessage/getTSystemMessageListByPage',
  saveOrUpdateTSystemMessage: oms + '/tSystemMessage/saveOrUpdateTSystemMessage',
  getTSystemMessageById: oms + '/tSystemMessage/getTSystemMessageById',
  delTSystemMessage: oms + '/tSystemMessage/delTSystemMessage',
  // 系统消息
  getIsNewVersion: oms + '/verCfg/getIsNewVersion',
  deleteVersion: oms + '/verCfg/deleteVersion',
  updateVersion: oms + '/verCfg/updateVersion',
  addVersion: oms + '/verCfg/addVersion',
  queryTAppVersionByPager: oms + '/verCfg/queryTAppVersionByPager',
  // company management
  getCorpListMultiByPager: oms + '/corp/getCorpListMultiByPager',
  getCorpInfoMulti: oms + '/corp/getCorpInfoMulti',
  updateCorpStatusByCorpId: oms + '/corp/updateCorpStatusByCorpId',
  updateCorpPackName: oms + '/corp/updateCorpPackName',
  queryCorpPackRoleList: oms + '/corp/queryCorpPackRoleList', // 接口在企业管理平台员工模块内
  // 新建企业
  getNewCorpApplyOrderForM: oms + '/corp/getNewCorpApplyOrderForM', // 新创建企业列表查询(运营平台)
  getCorpApplyDetail: oms + '/corp/getCorpApplyDetail', // 运营端新创建企业详情
  // 公众号(checked)
  getPublicAccountListByPage: oms + '/css/getPublicAccountListByPage', // 分页查询
  updatePublicAccountToActiveByOperation: oms + '/css/updatePublicAccountToActiveByOperation', // 启用
  updatePublicAccountListToDisabled: oms + '/css/updatePublicAccountListToDisabled', // 批量禁用
  updatePublicAccountToBlockUpByOperation: oms + '/css/updatePublicAccountToBlockUpByOperation', // 停用
  updatePublicAccountToUnAuthorizationByOperation:
    oms + '/css/updatePublicAccountToUnAuthorizationByOperation', // 解除授权
  updatePublicAccountListStatusToDelete: oms + '/css/updatePublicAccountListStatusToDelete', // 批量删除
  getPublicAccountList1: oms + '/css/getPublicAccountList', // 接口在企业管理平台员工模块内
  // 用户信息
  getUserDataMulti: oms + '/user/getUserDataMulti', // 获取个人信息复合列表
  getUserDataMultiDetail: oms + '/user/getUserDataMultiDetail', // 获取个人信息复合详情
  updateUserStatus: oms + '/user/updateUserStatus', // 更新用户状态
  getUserAuthMenu: oms + '/user/getUserAuthMenu', // 获取个人信息和菜单
  // 坐席
  selectSeatByPagerOperate: oms + '/seat/selectSeatByPagerOperate',
  getSeatDetailByOperation: oms + '/seat/getSeatDetailByOperation',
  updateSeatListStatusByOperation: oms + '/seat/updateSeatListStatusByOperation',
  // 6.5订单管理(运营平台)
  getOrderListByPageForM: oms + '/order/getOrderListByPageForM', // 订单列表
  updateBatchStatusForM: oms + '/order/updateBatchStatusForM', // 修改状态
  getOrderDetail: oms + '/order/getDetailForM', // 订单详情
  // 交易订单(checked)
  getTradeOrderByOperation: oms + '/order/getTradeOrderByOperation', // 订单列表
  updateTradeOrderApprovalRefuse: oms + '/order/updateTradeOrderApprovalRefuse', // 运营系统拒绝审批
  updateTradeOrderApprovalAdopt: oms + '/order/updateTradeOrderApprovalAdopt', // 运营系统审批通过
  getPayOrderDetailForM: oms + '/order/getPayOrderDetailForM', // X详情
  // 购买套餐
  isBuyPackageForM: oms + '/corp/isBuyPackageForM', // 是否存在待支付订单
  getCurOrderDetailForM: oms + '/corp/getCurOrderDetailForM', // 获取公司当前订购服务
  getTPackageListForM: oms + '/corp/getTPackageListForM', //套餐列表
  saveOrderInfoForM: oms + '/order/saveOrderInfoForM', //保存订单
  getSimpleDetailForM: oms + '/order/getSimpleDetailForM', // 订单简单详情(运营平台)
  // 上传凭证
  isCanPayVoucher: oms + '/order/isCanPayVoucher', // 是否能上传凭证(运营平台)
  saveAccountTradeOrder: oms + '/order/saveAccountTradeOrder', // 银行汇款上传凭证,付款方名称账号上传
  savePayVoucherTradeOrder: oms + '/order/savePayVoucherTradeOrder', // 银行汇款上传凭证 ,付款凭证上传
  // 运营用户
  queryManageUserByUserId: oms + '/user/queryManageUserByUserId', // 获取运营用户详情
  updateManageUserStatus: oms + '/user/updateManageUserStatus', // 批量启用禁用用户
  deleteManageUser: oms + '/user/deleteManageUser', // 删除运营用户
  getUserDataOperateByPager: oms + '/user/getUserDataOperateByPager', // 运营用户列表
  saveOperateUser: oms + '/user/saveOperateUser', // 运营用户新增
  updateOperateUser: oms + '/user/updateOperateUser', // 运营用户修改
  updateManageUserRole: oms + '/user/updateManageUserRole', // 运营用户添加角色
};
