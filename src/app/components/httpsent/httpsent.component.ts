import { Component, OnInit } from '@angular/core';
import {HttpsentService} from '../../services/http/httpsent.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-httpsent',
  templateUrl: './httpsent.component.html',
  styleUrls: ['./httpsent.component.scss']
})
export class HttpsentComponent implements OnInit {

  constructor(public httpSent: HttpsentService) { }

  ngOnInit(): void {
    this.httpSent.get('参数').subscribe((data) => {
      console.log(data);
    });
    this.httpSent.jsonp().subscribe((data) => {
      console.log(data);
    });
    this.httpSent.post({name: '张三', age: 20}).subscribe((data) => {
      console.log(data);
    });

    this.httpSent.axiosGet().subscribe((data) => {
      console.log('使用第三方 axios 进行http请求')
      console.log(data);
    })

  }


}
