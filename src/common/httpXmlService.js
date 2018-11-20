import http from 'http';
import Request from 'request';
import json_xml from 'json_xml';
import logger from '../utils/logUtil';
// 用于http发送xml数据
class HttpsXMLService {
  async post(url, options) {
    logger.info('NODE->JAVA >>>>>> ' + url + ' request params: ' + options.data);
    let _options = Object.assign(
      {
        host: '192.168.0.244',
        port: 80,
        path: url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/xml; charset=UTF-8',
        },
      },
      options
    );
    return new Promise(function(resolve) {
      try {
        const req = http.request(_options, res => {
          res.on('data', d => {
            let buf = '' + d;
            if (buf.includes('<xml>')) {
              logger.info('JAVA->MOBILE >>>>>> ' + url + ' response data: ' + buf);
              resolve(json_xml.xml2json(buf).xml);
            } else {
              logger.info('JAVA->MOBILE >>>>>> ' + url + ' response data: ' + buf);
              resolve(buf);
            }
          });
        });
        req.on('error', e => {
          console.error(e);
        });
        req.write(options.data);
        req.end();
      } catch (error) {
        logger.error(`java->MOBIlE >>>>>> ${url} response data:${error}`);
        resolve({ code: 110, data: error });
      }
    });
  }
  async get(ctx, url) {
    logger.info('NODE->JAVA >>>>>> ' + url + ' request params: ');
    return new Promise(function(resolve) {
      try {
        Request.get(
          {
            url: 'http://192.168.0.244:80' + url,
            headers: ctx.req.headers,
          },
          (err, _res, body) => {
            if (!err && _res.statusCode == 200) {
              resolve(body);
            } else {
              logger.err(url + ' request error: ' + JSON.stringify(err));
            }
          }
        );
      } catch (error) {
        logger.error(`java->MOBIlE >>>>>> ${url} response data:${error}`);
        resolve({ code: 110, data: error });
      }
    });
  }
}

export default new HttpsXMLService();
