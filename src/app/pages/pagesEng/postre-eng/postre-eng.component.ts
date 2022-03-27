import { Component, OnInit } from '@angular/core';
import { Postre } from 'src/app/interfaces/postre.interface';

@Component({
  selector: 'app-postre-eng',
  templateUrl: './postre-eng.component.html',
  styleUrls: ['./postre-eng.component.css']
})
export class PostreEngComponent implements OnInit {

  postreList: Postre[] =
  [
    {
      name: "Minitarta de hojarascas con guayaba",
      price: 15,
    },
    {
      name: "Brownie de chocolate con glass de Ajenjo",
      price: 15,
    },
    {
      name: "Volcán de chocolate",
      price: 15,
    },
    {
      name: "Sable de avellana y frutos rojos",
      price: 15,
    },
    {
      name: "Trufas de ajenjo",
      price: 15,
      ingredients: "Paquete de 9 unidades."
    },
    ]

  tortaList: Postre[] =
  [
    {
      name: "Torta de chocolate amargo y ajenjo",
      price: 20,
    },
    {
      name: "Torta de tres leches tumbo",
      price: 20,
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
