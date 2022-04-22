import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-postre-eng',
  templateUrl: './postre-eng.component.html',
  styleUrls: ['./postre-eng.component.css']
})
export class PostreEngComponent implements OnInit {

  postreList: LaCultaElement[] =
  [
    {
      name: "Sable of berries",
      price: 18,
      img: "Sable"
    },
    {
      name: "Leaf litter mini tart with guayaba",
      price: 18,
      img: "Minitarta"
    },
    {
      name: "Truffles of ajenjo",
      price: 25,
      ingredients: "Paquete de 9 unidades.",
      img: "Trufas"
    },
    {
      name: "Dark chocolate cake and ajenjo",
      price: 20,
      img: "Chocolate_Amargo"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
