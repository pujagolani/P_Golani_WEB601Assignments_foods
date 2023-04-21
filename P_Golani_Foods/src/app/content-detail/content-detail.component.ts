import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultFood: string = '/assets/images/image.png';

  constructor(private route: ActivatedRoute, private FoodService: FoodService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      this.id = Number(params.get('id') ?? 0);

      this.FoodService.getFoodById(this.id).subscribe((food: any) => {
        this.content = food;
      })
    });
  }

  handleClick(content: Content) {
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }

}

function Number(arg0: any): number {
    throw new Error('Function not implemented.');
}
