import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private data: string[] = [];

  constructor() { 
    console.log("Service initialized");
  }

  addData(item: string): void {
    if(item.trim() !== '') {
      this.data.push(item);
    }
  }

  getData(): string[] {
    return this.data;
  }
}