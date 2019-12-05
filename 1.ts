#!/usr/bin/env ts-node
//若是有使用过Linux或者Unix的前端开发者，对于Shebang应该不陌生，
//它是一个符号的名称，#！。这个符号通常在Unix系统的基本中第一行开头中出现，用于指明这个脚本文件的解释程序。
// /usr/bin/env就是告诉系统可以在PATH目录中查找
console.log(process.argv)
console.log('hello world')