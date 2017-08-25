const path = require('path');

module.exports = {
    //根目录
    rootPath: path.join(__dirname, '/'),
    //图片上传路径
    uploadDir: path.join(__dirname, '/', 'public/uploads/'),
    //压缩文件路径
    imageminDir: path.join(__dirname, '/', 'public/imagemin/'),
    //server Ip
    serverIp: '127.0.0.1',
    port:'8009',
    //sql - server地址
    table:'weichat',
    mysql: {
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'image',
        port: 3306,
    },
};