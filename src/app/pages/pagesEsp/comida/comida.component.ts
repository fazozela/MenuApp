import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  foodList: LaCultaElement[] =
    [
      {
        name: "Pasta criolla",
        price: 30,
        ingredients: "Pasta criolla, crema de leche, albahaca, tocino, pollo salteado.",
        img: "Pasta_Criolla"
      },
      {
        name: "Karapecho",
        price: 30,
        ingredients: "Carne deshidratada, mote, papa, huevo, limón.",
        img: "Karapecho"
      },
      {
        name: "Sullka Karapanza",
        price: 25,
        ingredients: "Carne de res, mote salteado, papas doradas, salsa de la casa.",
        img: "Sullka"
      },
      {
        name: "Muslitos",
        price: 30,
        ingredients: "Muslitos de pollo crocante, salsa semi picante.",
        img: "Muslitos"
      },
      {
        name: "Anticucho Ajicero",
        price: 25,
        ingredients: "Corazón de res, papas cocktail, ensalada de la casa, salsa de maní, uchuluru.",
        img: "Anticucho_Ajicero"
      },
      {
        name: "Ají de fideo colonial",
        price: 18,
        ingredients: "Fideo, carne de res, ají padilla, huevo, arveja, zarza criolla, pan.",
        img: "Aji_Fideo"
      },
      {
        name: "Pique a lo macho",
        price: 35,
        ingredients: "Lomo, salchicha, papa frita, tomate cebolla, huevo de codorniz, salsas, mayonesa y mayonesa picante.",
        img: "Pique_Macho"
      },
      {
        name: "Burguer de la casa",
        price: 30,
        ingredients: "300 gramos de carne de res, pan, pickels, lechuga, tocino, queso muzarella, papas fritas, mayonesa.",
        img: "Burguer"
      }
    ]

  paniniList: LaCultaElement[] =
    [
      {
        name: "Panini de sullka",
        price: 20,
        img: "Panini_Sullka"
      },
      {
        name: "Panini queso y pesto",
        price: 20,
        img: "Panini_Pesto"
      },
      {
        name: "Panini de tocino y queso",
        price: 20,
        img: "Panini_Tocino"
      },
    ]

  piqueoList: LaCultaElement[] =
  [
    {
      name: "Porción de papas rústicas",
      price: 25,
      img: "Papas_Rusticas"
    },
    {
      name: "Porción de papas",
      price: 25,
      img: "Papas_Fritas"
    },
    {
      name: "Nachos con queso y tocino",
      price: 25,
      img: "Nachos_Queso"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
