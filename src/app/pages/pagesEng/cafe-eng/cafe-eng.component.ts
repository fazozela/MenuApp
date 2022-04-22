import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-cafe-eng',
  templateUrl: './cafe-eng.component.html',
  styleUrls: ['./cafe-eng.component.css']
})
export class CafeEngComponent implements OnInit {

  cafeList: LaCultaElement[] =
  [
    {
      name: "Espresso",
      price: 13,
      img: "Expresso"
    },
    {
      name: "Capuccino",
      price: 15,
      ingredients: "Espresso, water, foamy milk",
      img: "Capuccino"
    },
    {
      name: "American",
      price: 15,
      ingredients: "Espresso, water",
      img: "Americano"
    },
    {
      name: "Latte",
      price: 15,
      ingredients: "Espresso, milk",
      img: "Latte"
    },
    {
      name: "Herbs infusion",
      price: 15,
      ingredients: "Manzanilla, coca, aniz, cedrón",
      img: "Infusion"
    },
    {
      name: "Lemon mint tea",
      price: 10,
      img: "Te_Menta"
    },
    {
      name: "House tea",
      price: 13,
      ingredients: "Tea, evaporated milk",
      img: "Te_Evaporada"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
