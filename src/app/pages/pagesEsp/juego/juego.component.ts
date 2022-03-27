import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego.interface';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juegoList: Juego[] =
  [
    {
      name: "Juego 1",
      price: "Gratis",
      ingredients: "Juego de rol para 4 personas."
      },
    {
      name: "Juego 2",
      price: "Gratis",
      ingredients: "Juego de rol para 4 personas."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
