import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-bebida',
  templateUrl: './bebida.component.html',
  styleUrls: ['./bebida.component.css']
})
export class BebidaComponent implements OnInit {

  autorList: LaCultaElement[] =

    [
      {
        name: "Horchalita",
        price: 25,
      },
      {
        name: "Mockochinchi",
        price: 30,
      },
      {
        name: "Juanita guayaba",
        price: 30,
      },
      {
        name: "Jatun Pocoy",
        price: 30,
      },
      {
        name: "Misky Sucre",
        price: 30,
      },
      {
        name: "Kachamosita",
        price: 30
      },
      {
        name: "Warmi",
        price: 30
      },
      {
        name: "Jin Cinnamon",
        price: 30
      },
      {
        name: "Caramel",
        price: 25
      }
    ]

  casaList: LaCultaElement[] =
    [
      {
        name: "Ajenjo",
        price: 125,
        ingredients: "Licor botánico",
        recomendation: "(botella)"
      },
      {
        name: "Trencito los cintis",
        price: 100,
        ingredients: "Ratafia membrillo, ratafia ciruela, coñac, ajenjo."
      }
    ]

  botellonesList: LaCultaElement[] =
    [
      {
        name: "Berry Singani Punch",
        price: 175,
        ingredients: "Frutos rojos, singani, agua gasificada, limón."
      },
      {
        name: "Singanito",
        price: 175,
        ingredients: "Botella San Pedro, hielo, limón, bitter y canela."
      },
      {
        name: "Charcas Punch",
        price: 175,
        ingredients: "Mango, durazno, tumbo, limón."
      }
    ]

  clasicasList: LaCultaElement[] =
    [
      {
        name: "Old Fashoned",
        price: 30,
        ingredients: "Ahumado"
      },
      {
        name: "Margarita",
        price: 20,
      },
      {
        name: "White Lady",
        price: 20,
      },
      {
        name: "Negroni",
        price: 20,
      },
      {
        name: "Berry Singani Punch",
        price: 30,
      },
      {
        name: "Piña colada",
        price: 25,
      },
      {
        name: "Mojitos frutados",
        price: 25
      },
      {
        name: "Queen Park Swizzle",
        price: 30,
      },
      {
        name: "Branca Julep",
        price: 25
      }
    ]

  botellinesList: LaCultaElement[] =
    [
      {
        name: "Botellín cerveza Huari",
        price: 20,
        recomendation: "Chocolate, Miel, Lagger"
      },
      {
        name: "Botellín cerveza Corona",
        price: 20,
      },
      {
        name: "Botellín cerveza Sureña",
        price: 20,
      },
      {
        name: "Botellín cerveza artesanal",
        price: 20,
        recomendation: "Maracuyango, White, Ipa, Black"
      }
    ]

  botella620List: LaCultaElement[] =
    [
      {
        name: "Cerveza Huari",
        price: 25,
        recomendation: "Chocolate, Miel, Lagger"
      }
    ]

  botellaLitroList: LaCultaElement[] =
    [
      {
        name: "Cerveza Paceña",
        price: 30
      },
      {
        name: "Cerveza Potosina",
        price: 35,
        recomendation: "1 & 1/4 lt"
      }
    ]

  botellaList: LaCultaElement[] =
    [
      {
        name: "Johnnie Walker Double Black",
        recomendation: "WHISKY"
      },
      {
        name: "Johnnie Walker Black",
        recomendation: "WHISKY"
      },
      {
        name: "Johnnie Walker Red",
        recomendation: "WHISKY"
      },
      {
        name: "Old Parr",
        recomendation: "WHISKY"
      },
      {
        name: "Sandy Mac",
        recomendation: "WHISKY"
      },
      {
        name: "San Pedro",
        recomendation: "SINGANI"
      },
      {
        name: "Flor de Caña 5 años",
        recomendation: "RON"
      },
      {
        name: "Ron Abuelo 7 años",
        recomendation: "RON"
      },

    ]

  otrosList: LaCultaElement[] =
    [
      {
        name: "Ajenjo 750 ml"
      },
      {
        name: "Ajenjo 50 ml"
      },
      {
        name: "Jaguermeister"
      },
      {
        name: "Fernet branca"
      },
      {
        name: "Fernet menta"
      },
      {
        name: "Gin Tanqueray"
      },
      {
        name: "Gin La Republica Amazónico, andino"
      },
      {
        name: "Tequila José Cuervo reposado, plata"
      }
  ]

  sinAlcoholList: LaCultaElement[] =
    [
      {
        name: "Mocktail",
        price: 20,
        ingredients: "Coctel de frutas sin alcohol."
      },
      {
        name: "Jugos naturales",
        recomendation: "VASO"
      },
      {
        name: "Jugos naturales",
        recomendation: "1 LITRO"
      },
      {
        name: "Jugos naturales",
        recomendation: "2 LITROs"
      },
      {
        name: "Agua C/S gas"
      },
      {
        name: "Gaseosa",
        recomendation: "500ML"
      },
      {
        name: "Gaseosa",
        recomendation: "2 LITROS"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
