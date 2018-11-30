const exec = require('child_process').exec;

let ffmpegPath =
  process.NODE_ENV === 'development'
    ? 'd:/Downloads/ffmpeg-20181121-77bf855-win64-static/bin/ffmpeg.exe -i '
    : 'd:/Downloads/ffmpeg-20181121-77bf855-win64-static/bin/ffmpeg.exe -i ';

export function readDuration(url) {
  return new Promise(reslove => {
    exec(ffmpegPath + url, function(err, stdout, stderr) {
      if (err) {
        console.log(1232123, err);
        // reject(err);
        let outStr = err.toString();
        let time = outStr.match(/Duration: ([0-9:.]+),/);
        reslove(time[1]);
      } else {
        let outStr = stderr.toString();
        let time = outStr.match(/Duration: ([0-9:.]+),/);
        reslove(time[1]);
      }
    });
  });
}
