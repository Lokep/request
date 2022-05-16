import { IOptions } from './../types/option';
import chalk from 'chalk'
/**
 * 处理请求日志
 * 对请求方式、请求地址、请求参数、响应状态码、响应时间进行日志记录
 */



function logger<T> (options: IOptions<T>): void {

}


const print = (content: string) => console.log(content);

export const success = (tag: string, body: string, tail?: string) => print(`${chalk.bgGreen(tag)} ${body} ${tail}`);

export const warning = (tag: string, body: string, tail?: string) => print(`${chalk.bgYellow(tag)} ${body} ${tail}`);

export const danger = (tag: string, body: string, tail?: string) => print(`${chalk.bgRed(tag)} ${body} ${tail}`);

export const primary = (tag: string, body: string, tail?: string) => print(`${chalk.bgBlue(tag)} ${body} ${tail}`);



export const responseLogger = (options: IOptions<any>): void => {
  
}


export default logger

