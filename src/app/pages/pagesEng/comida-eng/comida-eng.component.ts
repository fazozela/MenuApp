import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-comida-eng',
  templateUrl: './comida-eng.component.html',
  styleUrls: ['./comida-eng.component.css']
})
export class ComidaEngComponent implements OnInit {

  foodList: LaCultaElement[] =
    [
      {
        name: "Creole pasta",
        price: 30,
        ingredients: "Creole pasta, milk cream, basil, bacon, sautéed chicken.",
        img: "Pasta_Criolla"
      },
      {
        name: "Milanese Cheese",
        price: 30,
        ingredients: "Chicken milanese, cheese, tomato, rustic fries.",
        img: "Mila_Cheese"
      },
      {
        name: "Karapecho",
        price: 30,
        ingredients: "Dehydrated meat, mote, potato, egg, lemon.",
        img: "Karapecho"
      },
      {
        name: "Sullka Karapanza",
        price: 25,
        ingredients: "Beef, sautéed mote, golden potatoes, house sauce.",
        img: "Sullka"
      },
      {
        name: "BBQ drumsticks",
        price: 30,
        ingredients: "Crispy chicken thighs, semi spicy sauce.",
        img: "Muslitos"
      },
      {
        name: "Anticucho Ajicero",
        price: 25,
        ingredients: "Beef heart, cocktail potatoes, house salad, peanut sauce, uchuluru.",
        img: "Anticucho_Ajicero"
      },
      {
        name: "Ají de fideo colonial",
        price: 18,
        ingredients: "Noodles, beef, padilla chili, egg, peas, Creole bush, bread.",
        img: "Aji_Fideo"
      },
      {
        name: "Pique a lo macho",
        price: 35,
        ingredients: "Beef, sausage, french fries, onion tomato, quail egg, sauces, mayonnaise and spicy mayonnaise.",
        img: "Pique_Macho"
      },
      {
        name: "House burger",
        price: 30,
        ingredients: "300 grams of beef, bread, pickels, lettuce, bacon, mozzarella cheese, french fries, mayonnaise.",
        img: "Burguer"
      }
    ]

  paniniList: LaCultaElement[] =
    [
      {
        name: "Sullka panini",
        price: 22,
        img: "Panini_Sullka"
      },
      {
        name: "Bacon and Cheese Panini",
        price: 20,
        img: "Panini_Tocino"
      },
      {
        name: "Panini cheese and pesto",
        price: 20,
        img: "Panini_Pesto"
      }
    ]

  piqueoList: LaCultaElement[] =
  [
    {
      name: "Portion of rustic potatoes",
      price: 25,
      img: "Papas_Rusticas"
    },
    {
      name: "Portion of potatoes",
      price: 10,
      img: "Papas_Fritas"
    },
    {
      name: "Nachos with cheese and bacon",
      price: 25,
      img: "Nachos_Queso"
    },
    {
      name: "Rolled piqueo, ham, bread and sauces",
      price: 40,
      img: "Piqueo_Tabla"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
