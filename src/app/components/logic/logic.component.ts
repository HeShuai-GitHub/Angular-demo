import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent implements OnInit {

  public flag = true;
  // 通过@ViewChild 获取dom节点
  @ViewChild('myChild') myChild: any;
  @ViewChild('child') child: any;
// 获取子组件元素
  @ViewChild('childComponent') childComponent: any;

  // 子组件通过@Output传播过来的数据
  outputTran: any;

  dataParent: any = '我是父组件的数据';

  constructor() { }

  // 组件和指令初始化完成，并不是正在的页面加载完成
  ngOnInit(): void {
    // 可获取dom节点
    const div1: any = document.getElementById('div1');
    console.log(div1.innerHTML);

    // 设置了Angular指令，js原生获取不到dom节点
    /*const div2: any = document.getElementById('div2');
    console.log(div2.innerHTML);*/
  }

  // 视图加载成功以后触发的方法，dom加载完成，一般将对dom操作放到这个生命周期函数中
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void{
    const div2: any = document.getElementById('div2');
    console.log(div2.innerHTML);
// 设置元素样式
    this.myChild.nativeElement.style.fontSize = '100px';
  }
// 调用子组件方法
  getChildComponent(): void{
    this.childComponent.run();
  }
  methodParent(): any{
    return '调用了父组件的方法';
  }
  // 获取子组件数据
  showDataChild(): void{
    this.child.nativeElement.innerHTML = this.childComponent.dataChild;
  }
    // 显示子组件Output传播过来的数据
    setOutputTran(e): void{
      this.outputTran = e;
    }

}
