import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/interfaces/comida.interface';

@Component({
  selector: 'app-comida-eng',
  templateUrl: './comida-eng.component.html',
  styleUrls: ['./comida-eng.component.css']
})
export class ComidaEngComponent implements OnInit {

  foodList: Food[] =
    [
      {
        name: "Karapecho",
        price: 30,
        ingredients: "Carne deshidratada, mote, papa, huevo, limón.",
        recomendation: "Recomendado para 2 personas"
      },
      {
        name: "Sullka Karapanza",
        price: 25,
        ingredients: "Carne de res, mote salteado, papas doradas, salsa de la casa.",
        recomendation: "Recomendado para 2 personas"
      },
      {
        name: "Anticucho Ajicero",
        price: 25,
        ingredients: "Corazón de res, papas cocktail, ensalada de la casa, salsa de maní, uchuluru.",
        recomendation: "Recomendado para 2 personas"
      },
      {
        name: "Ají de fideo colonial",
        price: 18,
        ingredients: "Fideo, carne de res, ají padilla, huevo, arveja, zarza criolla, pan.",
        recomendation: "Recomendado para 2 personas"
      },
      {
        name: "Pique a lo macho",
        price: 35,
        ingredients: "Lomo, salchicha, papa frita, tomate cebolla, huevo de codorniz, salsas, mayonesa y mayonesa picante.",
        recomendation: "Recomendado para 2 personas"
      },
      {
        name: "Muslitos",
        price: 30,
        ingredients: "Muslitos de pollo crocante, salsa semi picante.",
        recomendation: "Recomendado para 2 personas"
      },
      {
        name: "Burguer de la casa",
        price: 30,
        ingredients: "300 gramos de carne de res, pan, pickels, lechuga, tocino, queso muzarella, papas fritas, mayonesa.",
        recomendation: "Recomendado para 2 personas"
      },
      {
        name: "Pasta criolla",
        price: 30,
        ingredients: "Pasta criolla, crema de leche, albahaca, tocino, pollo salteado.",
        recomendation: "Recomendado para 2 personas"
      }

    ]

  paniniList: Food[] =
  [
    {
      name: "Tocino y queso",
      price: 18,
      ingredients: "falta",
      recomendation: "Recomendado para 2 personas"
    },
    {
      name: "Panini sullka",
      price: 18,
      ingredients: "falta",
      recomendation: "Recomendado para 2 personas"
    },
    {
      name: "Panini queso y pesto",
      price: 18,
      ingredients: "falta",
      recomendation: "Recomendado para 2 personas"
    }
    ]

  tablitaList: Food[] =
  [
    {
      name: "Poner nombre",
      price: 55,
      ingredients: "Quesos de viejo a joven, frutos deshidratados, chocolate, pan tostado, jamón",
      recomendation: "Recomendado para 2 personas"
    },
    {
      name: "Poner nombre",
      price: 100,
      ingredients: "Quesos de viejo a joven, frutos deshidratados, chocolate, pan tostado, jamón",
      recomendation: "Recomendado para 4 personas"
    }
    ]

  piqueoList: Food[] =
  [
    {
      name: "Poner nombre",
      price: 25,
      ingredients: "Papas rústicas y quedo.",
      recomendation: "Recomendado para 2 personas"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
