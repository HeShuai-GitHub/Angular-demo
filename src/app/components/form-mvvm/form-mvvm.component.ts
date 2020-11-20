import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-mvvm',
  templateUrl: './form-mvvm.component.html',
  styleUrls: ['./form-mvvm.component.scss']
})
export class FormMVVMComponent implements OnInit {

  public payload: any = {
    userName: '',
    sex: '1',
    cities: [
      '石家庄',
      '秦皇岛',
      '北京'
    ],
    citys: '1',
    hobbies: [
      {
        name: '打篮球',
        checked: false
      },
      {
        name: '打足球',
        checked: false
      },
      {
        name: '游泳',
        checked: false
      }
    ],
    remark: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  getPayload(): void {
    console.log(this.payload);
  }

}
