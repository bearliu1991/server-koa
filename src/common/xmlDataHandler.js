const json_xml = require('json_xml');
class XmlDataHandler {
  async getXmlData(ctx) {
    if (ctx.method == 'POST' && ctx.is('text/xml')) {
      return new Promise(resolve => {
        let buf = '';
        ctx.req.setEncoding('utf8');
        ctx.req.on('data', chunk => {
          buf += chunk;
        });
        ctx.req.on('end', () => {
          resolve(json_xml.xml2json(buf).xml);
        });
      });
    } else {
      return ctx.request.body;
    }
  }
  postXmlData(data) {
    // ctx.res.setHeader('Content-Type', 'application/xml');
    const xmlData = json_xml.json2xml({
      xml: data,
    });
    return xmlData;
    // ctx.res.end(xmlData)
  }
}
export default new XmlDataHandler();
