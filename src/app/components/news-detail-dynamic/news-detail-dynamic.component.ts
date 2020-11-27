import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail-dynamic',
  templateUrl: './news-detail-dynamic.component.html',
  styleUrls: ['./news-detail-dynamic.component.scss']
})
export class NewsDetailDynamicComponent implements OnInit {

  public sid : any;
  constructor(public route:ActivatedRoute) { }
// 动态路由请求
  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe(data => {
      console.log(data.sid);
      this.sid = data.sid;
    });
  }

}
