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
        img: "Horchalita"
      },
      {
        name: "Mockochinchi",
        price: 30,
        img: "Mockochinchi"
      },
      {
        name: "Juanita guayaba",
        price: 30,
        img: "Juanita"
      },
      {
        name: "Jatun Pocoy",
        price: 30,
      },
      {
        name: "Misky Sucre",
        price: 30,
        img: "Misky"
      },
      {
        name: "Kachamosita",
        price: 30,
        img: "Kachamosita"
      },
      {
        name: "Warmi",
        price: 30,
        img: "Warmi"
      },
      {
        name: "Jin Cinnamon",
        price: 30,
        img: "Cinnamon"
      },
      {
        name: "Caramel",
        price: 25,
        img: "Caramel"
      }
    ]

  casaList: LaCultaElement[] =
    [
      {
        name: "Ajenjo",
        price: 125,
        ingredients: "Licor botánico",
        recomendation: "(botella)",
        img: "Ajenjo"
      },
      {
        name: "Trencito los cintis",
        price: 100,
        ingredients: "Ratafia membrillo, ratafia ciruela, coñac, ajenjo.",
        img: "Trencito"
      }
    ]

  botellonesList: LaCultaElement[] =
    [
      {
        name: "Berry Singani Punch",
        price: 175,
        ingredients: "Frutos rojos, singani, agua gasificada, limón.",
        img: "Berries3"
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
        ingredients: "Ahumado",
        img: "Old"
      },
      {
        name: "Margarita",
        price: 20,
        img: "Margarita"
      },
      {
        name: "White Lady",
        price: 20,
        img: "White"
      },
      {
        name: "Negroni",
        price: 20,
        img: "Negroni"
      },
      {
        name: "Berry Singani Punch",
        price: 30,
        img: "BerryV"
      },
      {
        name: "Piña colada",
        price: 25,
        img: "PinaColada"
      },
      {
        name: "Mojitos frutados",
        price: 25,
        img: "Mojito_Frutado"
      },
      {
        name: "Queen Park Swizzle",
        price: 30,
        img: "Queen"
      },
      {
        name: "Branca Julep",
        price: 25,
        img: "Branca_Julep"
      }
    ]

  botellinesList: LaCultaElement[] =
    [
      {
        name: "Botellín cerveza Huari",
        price: 20,
        recomendation: "Chocolate, Miel, Lagger",
        img: "Botellin_Huari"
      },
      {
        name: "Botellín cerveza Corona",
        price: 20,
        img: "Corona"
      },
      {
        name: "Botellín cerveza Sureña",
        price: 20,
        img: "Surena"
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
        img: "Huari620"
      }
    ]

  botellaLitroList: LaCultaElement[] =
    [
      {
        name: "Cerveza Paceña",
        price: 30,
        img: "Pacena1"
      },
      {
        name: "Cerveza Potosina",
        price: 35,
        recomendation: "1 & 1/4 lt",
        img: "Potosina"
      }
    ]

  botellaList: LaCultaElement[] =
    [
      {
        name: "Johnnie Walker Double Black",
        recomendation: "WHISKY",
        img: "Walker"
      },
      {
        name: "Johnnie Walker Black",
        recomendation: "WHISKY",
        img: "Walker_Black"
      },
      {
        name: "Johnnie Walker Red",
        recomendation: "WHISKY",
        img: "Walker_Red"
      },
      {
        name: "Old Parr",
        recomendation: "WHISKY",
        img: "Old_Parr"
      },
      {
        name: "Sandy Mac",
        recomendation: "WHISKY",
        img: "Sandy_Mac"
      },
      {
        name: "San Pedro",
        recomendation: "SINGANI",
        img: "San_Pedro"
      },
      {
        name: "Flor de Caña 5 años",
        recomendation: "RON",
        img: "Flor"
      },
      {
        name: "Ron Abuelo 7 años",
        recomendation: "RON",
        img: "Abuelo"
      },

    ]

  otrosList: LaCultaElement[] =
    [
      {
        name: "Ajenjo 750 ml",
        img: "Shot_Ajenjo"
      },
      {
        name: "Ajenjo 50 ml",
        img: "Shot_Ajenjo"
      },
      {
        name: "Jaguermeister",
        img: "Jagger"
      },
      {
        name: "Fernet branca",
        img: "Branca"
      },
      {
        name: "Fernet menta",
        img: "Branca"
      },
      {
        name: "Gin Tanqueray",
        img: "Tanquerray"
      },
      {
        name: "Gin La Republica Amazónico, andino",
        img: "Republica"
      },
      {
        name: "Tequila José Cuervo reposado, plata",
        img: "Tequila"
      }
  ]

  sinAlcoholList: LaCultaElement[] =
    [
      {
        name: "Mocktail",
        price: 20,
        ingredients: "Coctel de frutas sin alcohol.",
        img: "Mocktail"
      },
      {
        name: "Jugos naturales",
        recomendation: "VASO",
        img: "Jugos"
      },
      {
        name: "Jugos naturales",
        recomendation: "1 LITRO",
        img: "Jugos"
      },
      {
        name: "Jugos naturales",
        recomendation: "2 LITROs",
        img: "Jugos"
      },
      {
        name: "Agua C/S gas",
        img: "Agua"
      },
      {
        name: "Gaseosa",
        recomendation: "500ML",
        img: "Soda"
      },
      {
        name: "Gaseosa",
        recomendation: "2 LITROS",
        img: "Soda"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
