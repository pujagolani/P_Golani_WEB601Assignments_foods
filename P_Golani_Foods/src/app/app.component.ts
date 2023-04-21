/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assignment2';
}
*/
import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { FoodService } from './services/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Puja_Food';
  foodId: number = 8;
  oneFoodById: any = {};

  constructor(private FoodService: FoodService) { }

  ngOnInit() {
    this.findFoodById();
  }

  findFoodById() {
    this.FoodService.getFoodById(this.foodId).subscribe((result: any) => {
      if (typeof result === "object") {
        this.oneFoodById = result;
      }
    });
  }
}
