import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss']
})
export class NewDetailComponent implements OnInit {

  public sid : any;
  constructor(public route:ActivatedRoute) { }
// get请求
  ngOnInit(): void {
    console.log(this.route);
    this.route.queryParams.subscribe(data => {
      console.log(data.sid);
      this.sid = data.sid;
    });
  }

}
