const mongoose = require('mongoose');

// 设置严格查询
mongoose.set('strictQuery', true);

// 定义数据库连接的 URI（包括用户名、密码和身份验证数据库）
const mongoURI = 'mongodb://Fiveapi_admin:a%21d%40m%23i%24%25N_%3CD%24eV%26%3E@8.155.21.160:27017/fiveApi?authSource=fiveApi';

// 创建一个函数来处理数据库连接
const connect = () => {
  return mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
};

// 监听数据库连接事件
mongoose.connection.once('open', async () => {
  console.log("数据库连接成功");
});

mongoose.connection.on('error', (err) => {
  console.log("数据库连接失败：", err);
});

mongoose.connection.on('close', () => {
  console.log("数据库连接关闭");
});

// 导出数据库连接函数
module.exports = connect;
