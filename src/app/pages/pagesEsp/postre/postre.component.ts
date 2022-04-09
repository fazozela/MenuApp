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
        price: 18,
        img: "Sable"
      },
      {
        name: "Minitarta de hojarascas con guayaba",
        price: 18,
        img: "Minitarta"
      },
      {
        name: "Trufas de ajenjo",
        price: 25,
        ingredients: "Paquete de 9 unidades.",
        img: "Trufas"
      },
      {
        name: "Torta de chocolate amargo y ajenjo",
        price: 20,
        img: "Chocolate_Amargo"
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
