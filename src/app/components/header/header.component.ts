import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // 定义属性、也叫数据
  data = '我是一个无情的属性';
  // 上边这个属性不可以使用var或者let来定义，它完整的定义方式是
  public data1: any = '我是一个无情的属性-完整定义';
  // 也就是说默认的是any类型，就是任何类型的意思，当然也可以在定义的时候指定确定的类型，比如string,number等,
  // 当然我这个下边两个就不写类型了，因为这里边有了TSLint配置，可以自动从上下文推断出类型，你写类型反而认为你的代码多余
  public data2 = '我是一个无情的String类型';
  data3 = 110;

  // 以上可以看到，除了类型修饰符以外，还有一个范围权限修饰符，如public，除了这个还有private、protected
  // public:就是公共数据的意思，可以被其他模块引入使用；
  // private: 私有数据，只能被本组件使用，当然包括这个组件的页面引用
  // protected: 受保护数据，只可以被本组件或子模块所使用，也就是继承这个组件的组件可以使用
  private data4 = '我是private 修饰的数据';
  protected data5 = '我是protected 修饰的数据';

  data6 = '属性绑定';

  arr = [
    '数组1',
    '数组2'
  ];
  public arr1: Array<any> = [
    {name: '张三', age: 12},
    {name: '李四', age: 15}
  ];
  // 嵌套循环
  public arr2: Array<any> = [
    {name: '品牌', content: ['格力', '小米', '阿里']},
    {name: '价格', content: [11, 12, 13]}
  ];

  img = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3140171551,1885365254&fm=26&gp=0.jpg';

  flag = true;
  choose = 0;
  col = 'yellow';
  upper = 'HELLO';
  lower = 'hello';
  date = new Date();
  num = 100.12345;
  keywords;

  constructor() { }
  // ngOnInit() 组件和指令初始化完成，并不是真正的dom加载完成
  ngOnInit(): void {
  }

  show1(): void {
    alert('自定义事件提示');
  }

  down(e): void{
    console.log(e.key);
    if (e.keyCode === 82){
      e.target.style.color = 'red';
    }
  }

  getKeywords(): string{
    console.log(this.keywords);
    return this.keywords;
  }

  setKeywords(): void{
    this.keywords  = '这是改变后的值';
  }

}
