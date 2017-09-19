/*
    文件操作-查看文件状态
*/
const fs = require('fs');
console.log(1);
fs.stat('./abc',(err,stat) => {
    // 一般回调函数的第一个参数是错误对象，如果err为null,表示没有错误，否则表示报错了
    if(err) return;//这里要注意如果条件判断只有一句话，可以这样写不加花括号的
    if(stat.isFile()){
        console.log('文件');
    }else if(stat.isDirectory()){
        console.log('目录');
    }
    console.log(stat);
    console.log(2);
});
console.log(3);

// 同步操作
// console.log(1);
// let ret = fs.statSync('./data.txt');
// console.log(ret);
// console.log(2);