import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import axios from 'axios';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsentService {

  private url: any = 'http://localhost:8099/';
  constructor(private http: HttpClient) {
  }
  get(param: any): any{
    return this.http.get(`${this.url}get`);
  }

  post(param: any): any{
    // 设置请求头
    let handler = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`${this.url}post`,param, handler);
  }
  jsonp(): any{
    return this.http.jsonp(`${this.url}jsonp`,'callback');
  }

  axiosGet(): any{
    return new Observable((observable) => {
      axios.get(`${this.url}get`).then((data) =>{
        observable.next(data);
      })
    })
  }

}
