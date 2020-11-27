import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  Input
} from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-lifecycle-method',
  templateUrl: './lifecycle-method.component.html',
  styleUrls: ['./lifecycle-method.component.scss']
})
export class LifecycleMethodComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
                                                AfterViewChecked, OnDestroy{


  @Input() childData: any;
  num = 0;
  @ViewChild('count') count: any;
  // 构造方法
  constructor() {
    console.log('000 构造方法被执行---除了对局部变量的初始化，不应该进行其他操作(重点)');
  }


  ngOnChanges(): void{
    // 此组件作为子组件，被父组件传值的时候才会被调用,并且每次父组件传值过来时都会被调用，这里就不写例子了，很好理解
    console.log('001 ngOnChanges()被调用---当被绑定输入属性的值发生变化时被调用，一般为父子组件传值');
  }

  ngOnInit(): void {
    console.log('002 ngOnInit()被调用---请求数据一般被放到这里(重点)');
  }

  ngDoCheck(): void{
    console.log('003 ngDoCheck()被调用---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应');
  }

  ngAfterContentInit(): void{
    console.log('004 ngAfterContentInit()被调用---当 Angular 把外部内容投影进组件视图或指令所在的视图之后调用。');
  }

  ngAfterContentChecked(): void{
    console.log('005 ngAfterContentChecked()被调用---每当 Angular 检查完被投影到组件或指令中的内容之后调用。');
  }

  ngAfterViewInit(): void{
    console.log('006 ngAfterViewInit()被调用---当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用，一般进行dom操作(重点)');
  }

  ngAfterViewChecked(): void{
    console.log('007 ngAfterViewChecked()被调用---每当 Angular 做完组件视图和子视图或包含该指令的视图的变更检测之后调用。');
  }

  ngOnDestroy(): void{
    console.log('008 ngOnDestroy()被调用---每当 Angular 每次销毁指令/组件之前调用并清扫，当组件进行路由时会触发此声明周期函数(重点)');
  }

  countOperation(): void{
    this.num ++;
    this.childData ++;
    this.count.nativeElement.innerHTML = this.num;
  }

}
