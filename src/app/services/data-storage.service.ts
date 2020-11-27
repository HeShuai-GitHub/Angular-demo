import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  set(key: string, value: any): void{
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string): any{
    return JSON.parse(localStorage.getItem(key));
  }
  remove(key: string): void{
    localStorage.removeItem(key);
  }
// 同步方法
  getData(): any{
    const data = '这是一个同步方法';
    return data;
  }
// 异步方法
  getAsynData(): any{
    setTimeout( () => {
      const data = '这是一个异步方法';
      return data;
    }, 1000);
  }
// 函数回调解决异步
  getFunData(fun): void{
    setTimeout( () => {
      const data = '这是一个函数回调解决异步方法';
      fun(data);
    }, 1000);
  }
// 通过ES6 Promise 解决异步调用
  getPromiseData(): any{
    return new Promise((resolve, reject) => {
      setTimeout( () => {
        const data = '这是一个Promise解决异步的方法';
        resolve(data);
      }, 1000);
    });
  }
// 通过 rxjs Observable 解决异步的方法
  getRxjsData(): any{
    // tslint:disable-next-line:no-shadowed-variable
    return new Observable((observable) => {
      setTimeout( () => {
        const data = '这是一个rxjs解决异步的方法';
        observable.next(data);
        // observable.error(''); 返回一个错误的信息
      }, 1000);
    });
  }
  // 多次调用
  getRxjsInterval(): any{
    // tslint:disable-next-line:no-shadowed-variable
    return new Observable((observable) => {
      setInterval( () => {
        const data = '这是一个rxjs解决异步的方法-多次调用';
        observable.next(data);
        // observable.error(''); 返回一个错误的信息
      }, 1000);
    });
  }
  getRxjsNum(): any{
    return new Observable((observable) => {
      let num = 0;
      setInterval(() => {
        num ++;
        observable.next(num);
      }, 1000);
    });
  }
}
