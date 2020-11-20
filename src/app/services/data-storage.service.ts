import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  set(key: string, value: any): void{
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string): any{
    return JSON.parse(localStorage.getItem(key));
  }
  remove(key: string): void{
    localStorage.removeItem(key);
  }
}
