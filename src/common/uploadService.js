import fdfsClient from '../services/fastdfs/fdfsClient';

class UploadService {
  // 上传
  async upload(filePath, filename) {
    try {
      const fileId = await fdfsClient.upload(filePath, filename);
      return { code: 1, message: '上传成功', data: fileId };
    } catch (e) {
      return { code: 0, message: '上传失败', data: null };
    }
  }
  // async download(req, res) {
  //   try {
  //     const fileId = req.query.fileId;
  //     const { filepath, filename } = await FdfsClient.download(fileId);
  //     res.set({
  //       "Content-Type": "application/octet-stream",
  //       "Content-Disposition": "attachment; filename=" + filename
  //     });
  //     const stream = fs.createReadStream(filepath);
  //     stream.on("open", () => {
  //       stream.pipe(res);
  //     });
  //     stream.on("close", () => {
  //       fs.unlinkSync(filepath);
  //     });
  //   } catch (e) {
  //     res.send(e);
  //   }
  // }
}

export default new UploadService();
