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
        name: "Ron",
        price: "30",
        img: "Vaso_Ron"
      },
      {
        name: "Singani",
        price: "30",
        img: "Vaso_Singani"
      },
      {
        name: "Fernet",
        price: "30",
        img: "Vaso_Ron"
      },
      {
        name: "Mojito Frutado",
        price: "40",
        img: "Mojito_Frutado_Promo"
      },
      {
        name: "Dirty Mojito",
        price: "35",
        img: "Dirty_Mojito"
      },
      {
        name: "Caipirinha",
        price: "30",
        img: "Caipirinha"
      },
      {
        name: "Cerveza rubia o artesanal 2x1",
        price: "30",
        img: "Promo_Artesanal"
      },
      {
        name: "Gin con Gin/Tonic",
        price: 50,
        img: "Promo_Gin"
      },
      {
        name: "Ajenjo Collins 2x35",
        price: 35,
        img: ""
      },
      {
        name: "cubeta botellines 5 cervezas mix",
        price: 90,
        img: ""
      }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
