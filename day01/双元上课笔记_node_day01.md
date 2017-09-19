## 双元上课笔记
- 感性认识Node.js
    + 什么是Node.js 
        运行是一个运行Js的环境，类似可以用来播放电影的播放器
    + Node.js干什么的 
        1. php,java,python --> 做网站(做后台),给前端提供接口
        2. gulp,webpack前端命令行工具
- 终端基本使用(了解)
    + 命令行、DOS、控制台、终端、terminal ---> 指的是同一个意思
    + md 文件夹名字 --》 创建文件夹
    + 盘符
    + cd ../或cd ..切换到上一级目录
    + cd \ 切换到盘符
    + exit 退出终端
    + 清屏 cls
    + ipconfig /all --> 查看ip地址
- 安装node
    + nvm (node版本更新 基于某一个特定) 在很多版本node.js nvm 
        1. win7, win10 
        2. 前面安装gulp,webpack 
    + node 5.x 对es6语法支持不好 --> 卸载重装
- 代码执行两种方式(repl+文件)
    + ctrl + c两次
    + 文件夹、文件命名规范
        1. 不要用中文
        2. 不要用大写字母(大小写不太区别)
        3. 不要起得太特殊，比如叫node,npm,jquery,要起一个普通名字，比如叫demo001,ceshi001
- js由几部分组成的：ECMAScript + dom + bom 
- 全局变量概述
    + __dirname --> 打印当前的文件所在的路径(掌握)
    + __filename --> 打印当前的文件的绝对路径(了解)
    + window --> global
    + process.argv

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        function add(a,b){
            console.log(a+b);
        }
        var a = prompt('请输入a的值');
        var b = prompt('请输入b的值');
        add(Number(a),Number(b));
    </script>
</body>
</html>
```


```jsx
var a = process.argv[2];//prompt
var b = process.argv[3];
console.log(Number(a) + Number(b));
```

- 初识模块化
    + 如何定义一个模块 --> 一个js文件就是一个模块
    + 如何引入第三方模块 --> require('./a.js')
    + 定义模块的时候如何导出暴露出去当前模块的属性或方法 exports module.exports
- 模块成员导出详解(module.exports和exports)
    + 实质上用的是module.exports -> 如果你用Module.exports，永远也不会出错
    + exports是module.exports指向是同一个地址,注意不能直接赋值成一个新的对象
- 模块化细节补充
    + 模块加载一次之后就会缓存
    + require('./abc') --> ./abc.js --> ./abc.json --> ./abc.node
- let和const使用规则
    + var不用了 --> let或者const
    + let不能重新声明 let a = 1;a = 2;
    + const 不能重新声明、重新赋值 
    + 作用域
        1. 全局
        2. 函数级作用域
        3. 块级作用
    + 如果是引入第三方模块 --> 用const
- 变量的解构赋值

```javascript
let obj = {
    myName:'xiaoMing',
    age:20
}

let myName1 = obj['myName'];
let age = obj['age'];
```

```javascript
let obj = {
    myName:'xiaoMing',
    age:20
}

let {myName,age} = obj;
```

```javascript
let obj = {
    myName:'xiaoMing',
    age:20
}
let {myName:myName1,age} = obj;
```

- 字符串相关扩展
    + startsWith
    + endsWith
    + includes
    + 模板字符串

```javascript 
var str = `
    <div>
        <strong>${obj.name}</strong>
        <strong>${obj.age}</strong>
    </div>`;
console.log(str);
```

- 函数相关扩展


## 文档
- http://nodejs.cn/api/