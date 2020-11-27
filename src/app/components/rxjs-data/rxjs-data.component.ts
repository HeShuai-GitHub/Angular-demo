import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-data',
  templateUrl: './rxjs-data.component.html',
  styleUrls: ['./rxjs-data.component.scss']
})
export class RxjsDataComponent implements OnInit {

  constructor(public storage: DataStorageService) { }

  ngOnInit(): void {
    let data = this.storage.getData();
    console.log(data);
    data = this.storage.getAsynData();
    console.log(data);
    this.storage.getFunData((da) => {
      console.log(da);
    });
    const promise = this.storage.getPromiseData();
    promise.then((da) => {
      console.log(da);
    });
    const observable = this.storage.getRxjsData();
    observable.subscribe((da) => {
      console.log(da);
    });
    // 从上述看，rxjs并没有比Promise强到哪里，为什么不使用ES6的Promise，而选择第三方包的rxjs呢？
    // 很简单，因为rxjs支持订阅中断、重复订阅等功能
    const observableInterval: any = this.storage.getRxjsInterval();
    const inter: any = observableInterval.subscribe((da) => {
      console.log(da);
    });
    // 中断订阅
    setTimeout(() => {
      inter.unsubscribe();
    },3000);
    // pipe 工具
    const num = this.storage.getRxjsNum();
    num.pipe(
      filter((val) => {
        // @ts-ignore
        return 0 === val % 2 ;
      }),
      map((val) => {
        // @ts-ignore
        return val * val;
      })
    ).subscribe((da) => {
      console.log(da);
    });

  }
}



