import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  public item: any;
  public items: any[] = [];
  constructor(public storage: DataStorageService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    let lists: any = this.storage.get('items');
    if (lists){
      this.items = lists;
    }
  }

  public pushItems(e): void{
    if (e !== null && e.keyCode !== 13){
      return;
    }
    this.items.push({
      title: this.item,
      checked: false
    });
    this.item = '';
    this.storage.set('items', this.items);
  }

  clickCheck(key): void{
    console.log(this.items[key]);
    this.items[key].checked = !this.items[key].checked;
    this.storage.set('items', this.items);
  }
  removeItems(key): void{
    this.items.splice(key, 1);
    this.storage.set('items', this.items);
  }


}
