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
      title: 'Panner Tikka',
      description: 'Main Course Food',
      imageURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.krumpli.co.uk%2Fpaneer-tikka-kebab%2F&psig=AOvVaw0p_Q98g1j5Bim-XAkmdmET&ust=1676597093219000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjh1ILxmP0CFQAAAAAdAAAAABAE",
      type : "MainCourse",
      tag : ["food3", "food4"],
      creator: 'creator1'
    },
    {
      id: 2,
      title: 'Malai kofta',
      description: "Indian Cusine",
      imageURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vegrecipesofindia.com%2Fmalai-kofta%2F&psig=AOvVaw1JP-wP0dKn0iQ_wPn2SyT0&ust=1676597212394000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDpxbvxmP0CFQAAAAAdAAAAABAE',
      type : "MainCourse",
      tag : ["food1", "food2"],
      creator: 'creator2'
    },
    {
      id: 3,
      title: 'Kaju Masala',
      description: 'A survey found that paneer butter masala was one of the top five foods ordered in India.',
      imageURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DyIjXRwjkqFw&psig=AOvVaw22IYzTbr1gv2SO7RTbqqYA&ust=1676597130329000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNi3-pTxmP0CFQAAAAAdAAAAABAE",
      type : "MainCourse",
      tag : ["Food"],
      creator: 'creator3'
    },
    {
      id: 4,
      title: 'churos',
      description: 'A churro (Spanish pronunciation:, Portuguese pronunciation: is a type of fried dough from Spanish and Portuguese cuisine, ',
      imageURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpreppykitchen.com%2Fchurros%2F&psig=AOvVaw3cEyfXKazV5QF7tHVRVumy&ust=1676597267941000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC1ldbxmP0CFQAAAAAdAAAAABAE",
     
      tag : ["Churos", "Churos"],
      creator: 'creator4'
    },
    {
      id: 5,
      title: 'Donut',
      description: 'A doughnut or donut is a type of food made from leavened fried dough.',
      imageURL :"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-doughnuts-1666119864.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*",
      
      tag : ["Cake", "Chocolate"],
      creator: ' creator5'
    },
    {
      id: 7,
      title: 'baklava',
      description: 'The pre-Ottoman origin of the dish is unknown, but, in modern times, it is a common dessert of Turkish, Iranian and Arab cuisines, and other countries of the Levant and Maghreb. ',
      imageURL:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.onceuponachef.com%2Frecipes%2Fbaklava.html&psig=AOvVaw3LprJMUbjmhAwYcDfXvl0G&ust=1676597349398000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjGgP3xmP0CFQAAAAAdAAAAABAE",
      type : "Dessert",
      tag : ["baklava", "baklava"],
      creator: 'creator6'
    },
    {
      id: 7,
      title: 'Cake and Pastry',
      description: 'Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate.',
      imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhandletheheat.com%2Fbest-birthday-cake%2F&psig=AOvVaw1qndxMuqa_pswlpS4sOe3C&ust=1676596397309000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDF-7bumP0CFQAAAAAdAAAAABAH",
      type: "Dessert",
      tag: ["Baking", "Cake"],
      creator: 'creator7'
    }
  ];

  displayData(data : Content){
    console.log(`content Id is ${data.id} and content title is ${data.title}` )
  }
}
