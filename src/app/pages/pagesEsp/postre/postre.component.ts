import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-postre',
  templateUrl: './postre.component.html',
  styleUrls: ['./postre.component.css']
})
export class PostreComponent implements OnInit {

  postreList: LaCultaElement[] =
    [
      {
        name: "Sable de frutos rojos",
        img: "Sable"
      },
      {
        name: "Minitarta de hojarascas con guayaba",
        price: 15,
        img: "Minitarta"
      },
      {
        name: "Brownie de chocolate con glass de Ajenjo",
        price: 15,
        img: "Brownie"
      },
      {
        name: "Volcán de chocolate",
        price: 15,
        img: "Volcan"
      },
      {
        name: "Trufas de ajenjo",
        price: 15,
        ingredients: "Paquete de 9 unidades.",
        img: "Trufas"
      },
    ]

  tortaList: LaCultaElement[] =
  [
    {
      name: "Torta de chocolate amargo y ajenjo",
      price: 20,
      img: "Chocolate_Amargo"
    },
    {
      name: "Torta de tres leches tumbo",
      price: 20,
      img: "Tres_Leches"
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
