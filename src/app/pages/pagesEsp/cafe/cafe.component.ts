import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';


@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafeList: LaCultaElement[] =
  [
    {
      name: "Espresso",
      price: 13,
      ingredients: "falta",
    },
    {
      name: "Capuccino",
      price: 15,
      ingredients: "Espresso, agua, leche espumosa",
    },
    {
      name: "Americano",
      price: 15,
      ingredients: "Espresso, agua",
    },
    {
      name: "Latte",
      price: 15,
      ingredients: "Espresso, leche",
    },
    {
      name: "Infusión de hierbas",
      price: 15,
      ingredients: "Manzanilla, coca, aniz, cedrón",
    },
    {
      name: "Infusión de hierbas",
      price: 15,
    },
    {
      name: "Té de menta y limón",
      price: 10,
    },
    {
      name: "Té de la casa",
      price: 13,
      ingredients: "Té, leche evaporada"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
