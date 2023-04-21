import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newFood: any = {};
  @Output() addFoodEvent = new EventEmitter<Content>();

  addNewBike() {
    this.addFoodEvent.emit(this.newFood);
    this.newFood = {};
  }
}
