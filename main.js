//载入fs模块 文件系统
var fs=require('fs');
//读取文件内容并且赋值给data
var data=fs.readFileSync('input.txt');
//将数据转化为字符串
console.log(data.toString());

console.log('程序执行结束');
