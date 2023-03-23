//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './Content-list.component.html',
  styleUrls: ['./Content-list.component.scss'],
})

export class ContentListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  contentList = [

    {
      id: 1,
      title: 'Panner Tikka',
      description: 'Main Course Food',
      imageURL: "https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg",
      type: "MainCourse",
      tag: ["food3", "food4"],
      creator: 'creator1'
    },
    {
      id: 2,
      title: 'Malai kofta',
      description: "Indian Cusine",
      imageURL: 'https://as2.ftcdn.net/v2/jpg/01/30/05/81/1000_F_130058194_x6lBJhCpwcvFXfugxEVbkoov8Ru91IHo.jpg',
      type: "MainCourse",
      tag: ["food1", "food2"],
      creator: 'creator2'
    },
    {
      id: 3,
      title: 'Kaju Masala',
      description: 'A survey found that paneer butter masala was one of the top five foods ordered in India.',
      imageURL: "https://as2.ftcdn.net/v2/jpg/02/37/83/99/1000_F_237839917_ZjhoF520vETpKFFbXv1bgBGvxzlM9T0Z.jpg",
      type: "MainCourse",
      tag: ["Food"],
      creator: 'creator3'
    },
    {
      id: 4,
      title: 'churos',
      description: 'A churro (Spanish pronunciation:, Portuguese pronunciation: is a type of fried dough from Spanish and Portuguese cuisine, ',
      imageURL: "https://thumbs.dreamstime.com/z/churros-isolated-white-background-stacked-79122348.jpg",

      tag: ["Churos", "Churos"],
      creator: 'creator4'
    },
    {
      id: 5,
      title: 'Donut',
      description: 'A doughnut or donut is a type of food made from leavened fried dough.',
      imageURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-doughnuts-1666119864.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",

      tag: ["Cake", "Chocolate"],
      creator: ' creator5'
    },
    {
      id: 7,
      title: 'baklava',
      description: 'The pre-Ottoman origin of the dish is unknown, but, in modern times, it is a common dessert of Turkish, Iranian and Arab cuisines, and other countries of the Levant and Maghreb. ',
      imageURL: "https://thumbs.dreamstime.com/z/baklava-sweet-turkish-pastry-closeup-31955869.jpg",
      type: "Dessert",
      tag: ["baklava", "baklava"],
      creator: 'creator6'
    },
    {
      id: 7,
      title: 'Cake and Pastry',
      description: 'Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate.',
      imageURL: "https://thumbs.dreamstime.com/z/baklava-sweet-turkish-pastry-closeup-31955869.jpg",
      type: "Dessert",
      tag: ["Baking", "Cake"],
      creator: 'creator7'
    }
  ];
  searchTerm = '';
  searchResults: Content[] = [];
  searchExists = false;

  checkExistence() {

    if (this.searchTerm.trim() === '') {
      this.searchExists = false;
      return;
    }


  
}
addContent(newContent: Content) {
  const AddPromise = new Promise((resolve, reject) => {
    this.contentArray.push(newContent);
    console.log(`Content Added successfully, Country: ${this.title}`);
    this.contentArray = [...this.contentArray];
    resolve(newContent.title);
  });

  AddPromise.then(title => {

    this.errTxt = false;
  }).catch(err => {
    this.errTxt = true;
  });

}


}
