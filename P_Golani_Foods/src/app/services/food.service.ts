import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  addFood(newFood: Content) {
      throw new Error('Method not implemented.');
  }
  getfoodById(foodId: number) {
      throw new Error('Method not implemented.');
  }

  constructor(private MessageService: MessageService) { }
  getFoods(): Observable<Content[]> {
    const foods = contents;
    this.MessageService.add("Content array loaded!");
    return of(foods);
  }
  getFoodById(id: number): Observable<any> {
    const food = contents.find(content => content.id === id);

    if (food) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(food);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}
