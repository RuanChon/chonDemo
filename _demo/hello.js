"use strict";
/*
 * @Author: Chon
 * @Date: 2023-02-24 17:07:36
 * @Description: 文件说明
 */
let str = "1212";
let num = [1, "2", {}];
function fun1(...args) {
    args[0] = 3;
    console.log(args);
    let str = args[0];
    str += 1;
    console.log(str);
}
fun1(1, "2");
function fn(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}
fn("1", 2);
