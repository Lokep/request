import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify'
import {terser} from "rollup-plugin-terser";
import json from '@rollup/plugin-json';


import pkg from "./package.json";

export default {
  input: "src/index.ts", // 打包入口
  output: {
    // 打包出口
    file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser: 'dist/index.js'字段中配置的
    format: "umd", // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    name: "file"
  },
  plugins: [
    json(),
    // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript(), // 解析TypeScript
    terser(),
  ],
  sourceMap: true,
  watch: {
    exclude: ["node_modules/**"], // 忽略监控的目录
  },
};
