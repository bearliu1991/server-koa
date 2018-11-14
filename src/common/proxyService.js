import request from '../utils/request';
import logger from '../utils/logUtil';
const config = require('config-lite')({
  filename: 'default',
  config_basedir: __dirname,
  config_dir: 'config',
});
const { BASE_URL, Mock_URL, mockList } = config;
class ProxyService {
  /**
   * @param  {Object} ctx 请求上下文
   * @param  {String} url 请求地址
   * @param  {Object} options 请求可选项
   */
  async postProxy(ctx, url, options = { origin: 'MOBILE' }) {
    options.params = options.params || ctx.requestParams || {};
    options.origin = options.origin || 'MOBILE';
    let isMock = mockList.includes(url);
    if (!url.includes('http://') && !url.includes('https://')) {
      url = isMock ? `${Mock_URL}${url}` : `${BASE_URL}${url}`;
    }
    logger.info(
      `web->${options.origin} >>>>>> ${url} request params: ${JSON.stringify(options.params)}`
    ); // 请求日志
    try {
      const response = await request.post(url, options.params).then(res => res.data);
      logger.info(
        `java->${options.origin} >>>>>> ${url} response data:${JSON.stringify(response)}`
      ); // 响应日志
      return response;
    } catch (error) {
      logger.error(`java->${options.origin} >>>>>> ${url} response data:${JSON.stringify(error)}`); // 响应日志
      return { code: 110, message: '操作错误' };
    }
  }
  async getProxy(ctx, url, options) {
    options.params = options.params || ctx.request.query || {};
    options.origin = options.origin || 'MOBILE';
    options.isMock = options.isMock || false;
    if (!url.includes('http://') && !url.includes('https://')) {
      url = options.isMock ? `${Mock_URL}${url}` : `${BASE_URL}${url}`;
    }
    logger.info(
      `web->${options.origin} >>>>>> ${url} request params: ${JSON.stringify(options.params)}`
    ); // 请求日志
    try {
      const response = await request.post(url, options.params).then(res => res.data);
      logger.info(
        `java->${options.origin} >>>>>> ${url} response data:${JSON.stringify(response)}`
      ); // 响应日志
      return response;
    } catch (error) {
      logger.error(`java->${options.origin} >>>>>> ${url} response data:${JSON.stringify(error)}`); // 响应日志
      return { code: 110, message: '操作错误' };
    }
  }
}
export default new ProxyService();
