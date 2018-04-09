import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.template.html'
})
export class Page {
  @Output() getDatasFromChild = new EventEmitter<Object>();
  data: any = {
    field1: null,
    field2: null
  }
  showMessage: boolean = false
  emitData(){
    if(this.data.field1 && this.data.field2) {
      this.getDatasFromChild.emit(this.data)
      this.data = {
        field1: null,
        field2: null
      }
      return
    }
    else {
      this.getDatasFromChild.emit({
        error: 'Потрбно ввести дані'
      })
      return
    }
  }
  focusFild(){
    this.showMessage = true
  }
  leaveField(){
    this.showMessage = false
  }
}