export const menu = [
    {id:1,name:"Home",url:"/home"},
    {id:2,name:"Drink",url:"/drink"},
    {id:3,name:"Food",url:"/food"},
    {id:4,name:"Contact Us",url:"/contact"},
] 

import  Drinks from './assets/images/Drinks.jpg'; 
import  Foods from './assets/images/Foods.jpg'; 
import  Desserts from './assets/images/Desserts.jpg'; 
import  Others from './assets/images/Others.jpg'; 

export const categories = [
  {
    id: 1,
    name: "Drinks",
    imageUrl: Drinks,
    description: "All kinds of coffee, tea, juice and soft drinks"
  },
  {
    id: 2,
    name: "Foods",
    imageUrl:Foods,
    description: "Breakfast, fast food fast food, and local dishes"
  },
  {
    id: 3,
    name: "Desserts",
    imageUrl:Desserts,
    description: "Cakes, donuts, croissants, ice cream and sweets"
  },
  {
    id: 4,
    name: "Others",
    imageUrl:Others,
    description: "Merchandise, coffee beans, promotions and combo"
  }
];
