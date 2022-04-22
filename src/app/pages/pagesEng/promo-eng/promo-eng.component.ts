import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-promo-eng',
  templateUrl: './promo-eng.component.html',
  styleUrls: ['./promo-eng.component.css']
})
export class PromoEngComponent implements OnInit {

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
      img: "Vaso_Ron"
    },
    {
      name: "Fruity Mojito 2x1",
      price: "40",
      img: "Mojito_Frutado_Promo"
    },
    {
      name: "Dirty Mojito 2x1",
      price: "35",
      img: "Dirty_Mojito"
    },
    {
      name: "Caipirinha 2x1",
      price: "30",
      img: "Caipirinha"
    },
    {
      name: "Blonde or craft beer 2x1",
      price: "30",
      img: "Promo_Artesanal"
    },
    {
      name: "Gin with Gin/Tonic",
      price: 50,
      img: "Promo_Gin"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
