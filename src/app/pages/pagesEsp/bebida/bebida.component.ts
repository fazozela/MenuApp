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
        img: "Jatun"
      },
      {
        name: "Misky Sucre",
        price: 30,
        img: "Misky"
      },
      {
        name: "K´achamosita",
        price: 30,
        img: "Kachamosita"
      },
      {
        name: "Warmi",
        price: 30,
        img: "Warmi"
      },
      {
        name: "Ajenjo Collins",
        price: 25,
        img: ""
      },
      {
        name: "Gin Cinnamon",
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
        name: "Ajenjo botella 750 ml",
        price: 150,
        ingredients: "Licor botánico",
        recomendation: "(botella)",
        img: "Ajenjo"
      },
      {
        name: "Ajenjo botella 350 ml",
        price: 95,
        ingredients: "Licor botánico",
        recomendation: "(botella)",
        img: "Ajenjo"
      },
      {
        name: "Ajenjo botella 250 ml",
        price: 55,
        ingredients: "Licor botánico",
        recomendation: "(botella)",
        img: "Ajenjo"
      },
      {
        name: "Ajenjo botella 50 ml",
        price: 30,
        ingredients: "Licor botánico",
        recomendation: "(botella)",
        img: "Ajenjo"
      },
      {
        name: "Ratafia Botella 750 ml",
        price: 95,
        recomendation: "(botella)",
      },
      {
        name: "Ratafia Botella 250 ml",
        price: 50,
        recomendation: "(botella)",
      },
      {
        name: "Ratafia Botella 50 ml",
        price: 30,
        recomendation: "(botella)",
      },
      {
        name: "Coñac botella 750 ml",
        price: 150,
        recomendation: "(botella)",
      },
      {
        name: "Coñac botella 250 ml",
        price: 55,
        recomendation: "(botella)",
      },
      {
        name: "Coñac botella 50 ml",
        price: 30,
        recomendation: "(botella)",
      },
      {
        name: "Trencito los Cintis 4 botellas de 50 ml",
        price: 100,
        ingredients: "Ratafias, coñac, ajenjo.",
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
        ingredients: "Botella San Pedro, hielo, limón, bitter y canela.",
        img: "Singanito"
      },
      {
        name: "Charcas Punch",
        price: 175,
        ingredients: "Mango, durazno, tumbo, limón.",
        img: "Charcas"
      },
      {
        name: "Ajenjo Collins",
        price: 25,
      }
    ]

  clasicasList: LaCultaElement[] =
    [
      {
        name: "Old Fashioned",
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
        ingredients: "Chocolate, Miel, Lagger",
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
        ingredients: "Black, White, Ipa, Maracuyango",
        img: "Artesanal"
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
        ingredients: "1250ml",
        img: "Potosina"
      }
    ]

  botellaList: LaCultaElement[] =
    [
      {
        name: "Johnnie Walker Gold",
        price: 730,
        recomendation: "WHISKY",
        img: "Walker_Gold"
      },
      {
        name: "Johnnie Walker Double Black",
        price: 500,
        recomendation: "WHISKY",
        img: "Walker"
      },
      {
        name: "Johnnie Walker Black",
        price: 400,
        recomendation: "WHISKY",
        img: "Walker_Black"
      },
      {
        name: "Johnnie Walker Red",
        price: 200,
        recomendation: "WHISKY",
        img: "Walker_Red"
      },
      {
        name: "Jack Daniel's",
        price: 400,
        recomendation: "WHISKY",
        img: "Jack"
      },
      {
        name: "Old Parr",
        price: 450,
        recomendation: "WHISKY",
        img: "Old_Parr"
      },
      {
        name: "Sandy Mac",
        price: 200,
        recomendation: "WHISKY",
        img: "Sandy_Mac"
      },
      {
        name: "San Pedro",
        price: 175,
        recomendation: "SINGANI",
        img: "San_Pedro"
      },
      {
        name: "Tierra Alta",
        price: 175,
        recomendation: "SINGANI",
        img: "Tierra_Alta"
      },
      {
        name: "Flor de Caña 5 años",
        price: 160,
        recomendation: "RON",
        img: "Flor"
      },
      {
        name: "Ron Abuelo 7 años",
        price: 220,
        recomendation: "RON",
        img: "Abuelo"
      },

    ]

  otrosList: LaCultaElement[] =
    [
      {
        name: "Ajenjo 250 ml",
        price: 60,
        img: "Ajenjo_Mediano",
      },
      {
        name: "Ajenjo 50 ml",
        price: 30,
        img: "Shot_Ajenjo"
      },
      {
        name: "Jaguermeister",
        price: 200,
        img: "Jagger"
      },
      {
        name: "Fernet branca",
        price: 170,
        priceGlass: 20,
        img: "Branca"
      },
      {
        name: "Fernet menta",
        price: 170,
        priceGlass: 20,
        img: "Branca_Menta"
      },
      {
        name: "Gin Tanqueray",
        price: 350,
        priceGlass: 30,
        img: "Tanquerray"
      },
      {
        name: "Gin La República reserva del maestro",
        price: 380,
        priceGlass: 40,
        img: "Republica_Maestro"
      },
      {
        name: "Tequila José Cuervo reposado, plata",
        price: 200,
        img: "Tequila"
      }
    ]

  shotsList: LaCultaElement[] =
    [
      {
        name: "Ajenjo",
        price: 15,
        img: "Shot_Ajenjo_2"
      },
      {
        name: "Tequila",
        price: 15,
        img: "Shot_Tequila"
      },
      {
        name: "Jagermeister",
        price: 15,
        img: "Shot_Jagger"
      },
      {
        name: "Vodka",
        price: 15,
        img: "Shot_Vodka"
      },
      {
        name: "Ratafia",
        price: 15,
      },
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
        price: 10,
        recomendation: "VASO",
        img: "Jugos"
      },
      {
        name: "Jugos naturales",
        price: 18,
        recomendation: "1 LITRO",
        img: "Jugos"
      },
      {
        name: "Jugos naturales",
        price: 25,
        recomendation: "2 LITROs",
        img: "Jugos"
      },
      {
        name: "Agua C/S gas",
        price: 10,
        img: "Agua"
      },
      {
        name: "Gaseosa",
        price: 10,
        ingredients: "Salvietti, Coca-Cola, Fanta, Sprite, Guaraná",
        recomendation: "500ML",
        img: "Soda"
      },
      {
        name: "Gaseosa",
        price: 20,
        ingredients: "Salvietti, Coca-Cola, Fanta, Sprite, Guaraná",
        recomendation: "2 LITROS",
        img: "Soda"
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
