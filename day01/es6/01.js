/*
    声明变量let和const
*/

// let声明的变量不存在预解析
// console.log(flag);
// var flag = 123;
// let flag = 456;
// ------------------------
// let声明的变量不允许重复（在同一个作用域内）
// let flag = 123;
// let flag = 456;
// console.log(flag);
// --------------------------
// ES6引入了块级作用域
// 块内部定义的变量，在外部是不可以访问的
// if(true){
//     // var flag = 123;
//     let flag = 123;
// }

// {
//     // 这里是块级作用域
//     let flag = 111;
//     console.log(flag);
// }
// console.log(flag);

// for (let i = 0; i < 3; i++) {
//     // for循环括号中声明的变量只能在循环体中使用
//     console.log(i);
// }
// console.log(i);
// ---------------------------------------
// 在块级作用域内部，变量只能先声明再使用
// if(true){
//     console.log(flag);
//     let flag = 123;
// }
// ========================================
// const用来声明常量
// const声明的常量不允许重新赋值
// const n = 1;
// n = 2;
// --------------------------------
// const声明的常量必须初始化
const abc;
