import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './Content-list.component.html',
  styleUrls: ['./Content-list.component.scss'],
})
export class ContentListComponent {
  contentList =[
    {
      id: 1,
      title: 'Chocolate with Sprinkles',
      description: 'A fun, colorful crowd-pleaser for kids and adults, or all combined',
      imageURL :"https://deanssweets.com/wp-content/uploads/2020/07/nonpareils1.jpg",
      type : "Chocolate",
      tag : ["Candy", "Chocolate"],
      creator: 'Jonas'
    },
    {
      id: 2,
      title: 'Maple',
      description: "Maple syrup is a syrup made from the sap of maple trees. In cold climate",
      imageURL : 'https://www.macmillandictionary.com/external/slideshow/full/maple_full.jpg',
      type : "Leaves",
      tag : ["tree", "Leave"],
      creator: 'Nature'
    },
    {
      id: 3,
      title: 'Blueberry',
      description: 'Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries.',
      imageURL :"https://m.media-amazon.com/images/I/51jk5Ao6NIL._SX466_.jpg",
      type : "Fruits",
      tag : ["Fruit"],
      creator: 'Natural'
    },
    {
      id: 4,
      title: 'Glazed Pottery',
      description: 'Born on December 2016, it has been our endeavor to bring the traditional Indian styles blended ',
      imageURL :"https://ii1.pepperfry.com/media/catalog/product/g/l/800x880/glazed-pottery-300ml--set-of-4--red-ceramic-coffee-mug-by-miah-decor-glazed-pottery-300ml--set-of-4--nnzdic.jpg",
      type : "Pottery",
      tag : ["Pottery", "Mug"],
      creator: 'Arkanjuli'
    },
    {
      id: 5,
      title: 'Donut',
      description: 'A doughnut or donut is a type of food made from leavened fried dough.',
      imageURL :"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-doughnuts-1666119864.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
      type : "Cake",
      tag : ["Cake", "Chocolate"],
      creator: 'Jeny lizard'
    },
    {
      id: 6,
      title: 'Clay and Glaze',
      description: 'Glazing can enhance the fired clay piece both on an aesthetic and a functional level. Visually',
      imageURL :"https://clayandglaze.in/wp-content/uploads/slider/cache/cc0c662086bf2c4159a882dad45495ba/DSC_8545-01.jpg",
      type : "Pottery",
      tag : ["Pottery", "Mug"],
      creator: 'Arkanjuli'
    }
  ];

  displayData(data : Content){
    console.log(`content Id is ${data.id} and content title is ${data.title}` )
  }
}
