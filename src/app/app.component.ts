// 引入核心模块中的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // 组件的名字
  templateUrl: './app.component.html', // Html
  styleUrls: ['./app.component.scss'] // css
})
export class AppComponent {
  title = 'demo1'; // 定义属性

  constructor(){  // 构造函数

  }
}
