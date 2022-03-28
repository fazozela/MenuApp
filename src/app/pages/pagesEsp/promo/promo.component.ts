import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  promoList: LaCultaElement[] =
    [
      {
        name: "Ron 2x1",
        price: "30",
        img: "Vaso_Ron"
      },
      {
        name: "Singani 2x1",
        price: "30",
        img: "Vaso_Singani"
      },
      {
        name: "Fernet 2x1",
        price: "30",
        img: "Branca"
      },
      {
        name: "Mojito Frutado 2x1",
        price: "30",
        img: "Mojito_Frutado_Promo"
      },
      {
        name: "Dirty Mojito 2x1",
        price: "30",
        img: "Dirty_Mojito"
      },
      {
        name: "Caipirinha 2x1",
        price: "30",
        img: "Caipirinha"
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
