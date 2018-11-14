// import fs from 'fs';
// import path from 'path';
// import FdfsClient from 'fdfs';
const fs = require('fs');
const path = require('path');
const FdfsClient = require('fdfs');
const fdfsConfig = {
  trackers: [
    {
      host: '192.168.0.244',
      port: 6000,
    },
  ],
  timeout: 10000,
  defaultExt: 'txt',
  charset: 'utf8',
};
// const config = require('config-lite')({
//   filename: 'default',
//   config_basedir: __dirname,
//   config_dir: 'config',
// });
// const { fdfsConfig } = config;
let client; // tracker server
class fdfs {
  constructor(config) {
    if (!client) {
      client = new FdfsClient(config);
    }
    this.client = client;
  }
  // 上传文件，路径，文件名
  async upload(filepath, filename) {
    let ext = path.extname(filename);
    if (ext[0] == '.') {
      ext = ext.substr(1);
    }
    // 实例方法
    const fileId = await this.client.upload(filepath, { ext });
    // 删除本地缓存文件
    fs.unlinkSync(filepath);
    return fileId;
  }
  // 文件标识
  async download(fileId) {
    const filename = fileId.split('/').pop(); // 名称
    const filepath = path.resolve(__dirname, '../../../uploadFiles/', filename); // 下载路由
    // 实例方法
    await this.client.download(fileId, filepath);
    return { filepath, filename };
  }
  // 下载到静态服务
  async read(fileId) {
    const filename = fileId.split('/').pop();
    const filepath = path.resolve(__dirname, '../public/', filename);
    await this.client.download(fileId, filepath);
    return { filepath, filename };
  }

  // overview(req, res, next) {
  //   getWXqrcode(req, res, next);
  // }
  // 删除文件
  async del(fileId) {
    let result = await this.client.del(fileId);
    return result;
  }

  // 获取组的列表,默认一个 {count:1, groups: [{name,大小，}]}
  async listGroups() {
    try {
      let result = await this.client.listGroups();
      return result;
    } catch (e) {
      return e;
    }
  }
  // 获取指定卷的存储服务
  async listStorages() {
    try {
      let result = await this.client.listStorages('group1');
      return result;
    } catch (e) {
      return e;
    }
  }
}

// new fdfs(fdfsConfig).upload(path.resolve(__dirname, '../../../uploadFiles/dcmdfh.png'), 'dcmdfh.png') 上传
// new fdfs(fdfsConfig).download('group1/M00/00/04/wKgA9FvlSJmAcLD5AAA_BxTyO4E732.png')
// new fdfs(fdfsConfig).listGroups()
// new fdfs(fdfsConfig).listStorages()
export default new fdfs(fdfsConfig);