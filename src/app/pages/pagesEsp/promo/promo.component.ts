import { Component, OnInit } from '@angular/core';
import { Promo } from 'src/app/interfaces/promo.interface';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {

  promoList: Promo[] =
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
