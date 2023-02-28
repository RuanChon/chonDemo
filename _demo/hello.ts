/*
 * @Author: Chon
 * @Date: 2023-02-24 17:07:36
 * @Description: 文件说明
 */
let str: string = "1212"

let num: Object = [1, "2", {}]

function fun1(...args: any[]): void {
  args[0] = 3
  console.log(args)
  let str: string = args[0]
  str += 1
  console.log(str)
}

fun1(1, "2")

function fn(arg1: number): void
function fn(arg1: string, arg2: number): void
function fn(arg1: any, arg2?: any): void {
  console.log(arg1)
  console.log(arg2)
}

fn("1", 2)
