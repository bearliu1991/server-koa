import socketIO from 'socket.io';
export default function(app) {
  const io = socketIO(app);
  let users = [];

  // 连接会话
  io.on('connection', function(socket) {
    socket.nickName = '未知用户';
    // 单点会话通知
    // 群发通知
    // 登录事件
    socket.on('login', function(data) {
      // 事件监听及参数
      if (users.indexOf(data.name) >= 0) {
        console.log(data.name + ' 已有重名用户，请重新输入昵称。');
        socket.emit('login', {
          status: 'err',
          text: '已有重名用户，请重新输入昵称。',
        });
      } else {
        // 添加一个用户
        users.push(data.name);
        // 设置当前用户的 nickName
        socket.nickName = data.name;
        console.log(data.name + ' 进入了房间');
        console.log('当前用户', users);
        // 发送进入房间的通知                // 群发通知
        io.emit('sys', {
          text: socket.nickName + ' 进入了房间',
          count: users.length,
          users: users,
        });
        // 发送登录成功的通知             // 响应通知及数据
        socket.emit('login', {
          status: 'ok',
        });
      }
    });

    // 接收发送信息后广播给除自己外的所有人
    socket.on('message', function(data) {
      socket.broadcast.emit('message', data);
    });
    socket.on('chat_msg', function(res) {
      io.emit('chat_msg', res);
    });
    socket.on('send_msg', function(res) {
      io.emit('send_msg', res);
    });
    socket.on('HeartBeat', function(res) {
      io.emit('HeartBeat', res);
    });

    // 断开会话连接
    socket.on('disconnect', function() {
      let index = users.indexOf(socket.nickName);
      if (index >= 0) users.splice(index, 1);
      // 离开房间发送通知
      io.emit('sys', {
        text: socket.nickName + ' 离开了房间',
        count: users.length,
        users,
      });
      console.log(socket.nickName + '离开了房间');
      console.log('当前用户', users);
    });
  });
}
