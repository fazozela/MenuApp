import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/interfaces/juego.interface';

@Component({
  selector: 'app-juego-eng',
  templateUrl: './juego-eng.component.html',
  styleUrls: ['./juego-eng.component.css']
})
export class JuegoEngComponent implements OnInit {

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
