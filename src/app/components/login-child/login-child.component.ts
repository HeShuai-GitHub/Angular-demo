import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.scss']
})
export class LoginChildComponent implements OnInit {
// 获取dom元素
  @ViewChild('myChild') myChild: any;
  @ViewChild('parent') parent: any;
  @ViewChild('parentMethod') parentMethod: any;

  dataChild: any = '我是子组件的数据';

// 获取父组件的值和方法
  @Input() dataParent: any;
  @Input() methodParent: any;
// 定义事件驱动
    @Output() outer: any = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  run(): void{
    this.myChild.nativeElement.innerHTML = '触发了子组件的run()方法！';
  }
  showDataParent(): void{
    this.parent.nativeElement.innerHTML = this.dataParent;
  }
  callMethodParent(): void{
    this.parentMethod.nativeElement.innerHTML = this.methodParent();
  }

    transferParent(): void{
      this.outer.emit('通过@Output传播过来的子组件数据');
    }
}
