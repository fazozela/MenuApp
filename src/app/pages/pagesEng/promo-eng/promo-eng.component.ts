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
      name: "Promo 1",
      price: "-50",
      ingredients: "Promo válida los miércoles"
      },
    {
      name: "Promo 2",
      price: "-80",
      ingredients: "Promo válida los miércoles"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
