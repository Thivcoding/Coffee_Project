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
    link:"prodcutDrink",
    imageUrl: Drinks,
    description: "All kinds of coffee, tea, juice and soft drinks"
  },
  {
    id: 2,
    name: "Foods",
    link:"prodcutFoods",
    imageUrl:Foods,
    description: "Breakfast, fast food fast food, and local dishes"
  },
  {
    id: 3,
    name: "Desserts",
    link:"ProductDesserts",
    imageUrl:Desserts,
    description: "Cakes, donuts, croissants, ice cream and sweets"
  },
  {
    id: 4,
    name: "Others",
    link:"ProductOthers",
    imageUrl:Others,
    description: "Merchandise, coffee beans, promotions and combo"
  }
];


// category drinks
import drinks1 from './assets/images/cate-drink-1.jpg';
import drinks2 from './assets/images/cate-drink-2.jpg';
import drinks3 from './assets/images/cate-drink-3.jpg';
import drinks4 from './assets/images/cate-drink-4.jpg';
import drinks5 from './assets/images/cate-drink-5.jpg';
import drinks6 from './assets/images/cate-drink-6.jpg';
import drinks7 from './assets/images/cate-drink-7.jpg';
import drinks8 from './assets/images/cate-drink-8.jpg';

export const cate_drinks = [ 
  {
    id: 1,
    name: "Caffè Americano",
    description: "Espresso shots topped with hot water, creating a light layer of crema.",
    qty: 50,
    price: 2.50,
    image: drinks1,
    category: "Drink - Coffee"
  },
  {
    id: 2,
    name: "Caffè Latte",
    description: "Rich, full-bodied espresso blended with steamed milk and a light layer of foam.",
    qty: 40,
    price: 3.75,
    image: drinks2,
    category: "Drink - Coffee"
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam.",
    qty: 35,
    price: 3.95,
    image: drinks3,
    category: "Drink - Coffee"
  },
  {
    id: 4,
    name: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup, espresso, and topped with caramel drizzle.",
    qty: 25,
    price: 4.25,
    image: drinks4,
    category: "Drink - Coffee"
  },
  {
    id: 5,
    name: "Espresso",
    description: "Rich and caramelly sweet espresso—the heart of Starbucks handcrafted beverages.",
    qty: 60,
    price: 2.00,
    image: drinks5,
    category: "Drink - Coffee"
  },
  {
    id: 6,
    name: "Mocha",
    description: "Espresso with bittersweet mocha sauce and steamed milk. Topped with sweetened whipped cream.",
    qty: 30,
    price: 4.50,
    image: drinks6,
    category: "Drink - Coffee"
  },
  {
    id: 7,
    name: "Flat White",
    description: "Smooth ristretto shots of espresso with a thin layer of steamed whole milk.",
    qty: 20,
    price: 4.00,
    image: drinks7,
    category: "Drink - Coffee"
  },
  {
    id: 8,
    name: "Iced Coffee",
    description: "Freshly brewed Starbucks® Iced Coffee Blend served chilled and sweetened over ice.",
    qty: 45,
    price: 3.25,
    image: drinks8,
    category: "Drink - Coffee"
  }
];

