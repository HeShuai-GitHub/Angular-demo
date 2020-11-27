import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  list: any[] = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
    for (let i: number = 0; i<10 ; i++) {
      if(i%2 ===0){
        this.list.push("这是第"+i+"条新闻——get请求");
      }else{
        this.list.push("这是第"+i+"条新闻——动态路由");
      }

    }
  }
  dynamic(key): any{
    // 普通跳转，动态路由
    this.router.navigate(['/newsDetailDynamic/',key]);
  }
  get(key): any{
    // get 传值
    this.router.navigate(['/newsDetail'],{queryParams:{
        sid:key
      }});
  }

}
