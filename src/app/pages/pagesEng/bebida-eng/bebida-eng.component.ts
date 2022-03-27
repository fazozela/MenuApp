import { Component, OnInit } from '@angular/core';
import { LaCultaElement } from 'src/app/interfaces/element.interface';

@Component({
  selector: 'app-bebida-eng',
  templateUrl: './bebida-eng.component.html',
  styleUrls: ['./bebida-eng.component.css']
})
export class BebidaEngComponent implements OnInit {

  cAperitivosList: LaCultaElement[] =
  [
    {
      name: "Gin Basil Smash",
      price: 30,
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
    }
    ]

  cDulcesList: LaCultaElement[] =
  [
    {
      name: "Berry Singani Punch",
      price: 30,
    },
    {
      name: "Piña colada",
      price: 25,
    }
    ]

  cCortosList: LaCultaElement[] =
  [
    {
      name: "Penicillin",
      price: 25,
    },
    {
      name: "Old Fashoned",
      price: 30,
      ingredients: "Ahumado"
    },
    {
      name: "Coctel Caliente",
      price: 25,
    }
    ]

  refrescantesList: LaCultaElement[] =
  [
    {
      name: "Dirty Mojito",
      price: 25,
    },
    {
      name: "Branca Julep",
      price: 25
    },
    {
      name: "Queen Park Swizzle",
      price: 30,
    }
    ]

  deAutorList: LaCultaElement[] =
  [
    {
      name: "Mockochinchi",
      price: 25,
    },
    {
      name: "Kachamosita",
      price: 30,
      ingredients: "Kari Warmi"
    },
    {
      name: "Juanita guayaba",
      price: 30,
    },
    {
      name: "Mojitos frutados",
      price: 25,
    },
    {
      name: "Horchalita",
      price: 25,
    },
    {
      name: "Jatun Pocoy",
      price: 30,
    },
    {
      name: "Gin Cinnamon",
      price: 30,
    },
    {
      name: "Coctel caliente",
      price: 25,
    },
    {
      name: "Ciudad Blanca",
      price: 30,
    },
    {
      name: "Misky Sucre",
      price: 30,
    }
    ]

  deLaCasaList: LaCultaElement[] =
  [
    {
      name: "Mojitos frutados",
      price: 25,
      ingredients: "Tumbo, frutos rojos, mango, maracuya."
      },
    {
      name: "Mocktail",
      price: 20,
      ingredients: "Coctel de frutas sin alcohol."
      },
    {
      name: "Cata Menestral",
      price: 75,
      ingredients: "Degustación de 4 variedades de nuestras cervezas artesanales."
      },
    {
      name: "Trencito los cintis",
      price: 55,
      ingredients: "Ratafia membrillo, ratafia ciruela, coñac, ajenjo."
      },
    {
      name: "Shots",
      price: 15,
      ingredients: "Ajenjo, ratafia, coñac, tequila, Jaguermeister, baileys."
      },
    {
      name: "Botellín cerveza artesanal",
      price: 20,
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
      name: "Botellín cerveza Huari",
      price: 20,
      },
    {
      name: "Maracuyango",
      price: 30,
      ingredients: "500 ml"
      },
    {
      name: "Cerveza Paceña",
      price: 35,
      ingredients: "1 litro"
      },
    {
      name: "Cerveza Huari",
      price: 25,
      ingredients: "620 ml"
      },
    {
      name: "Cerveza artesanal",
      price: 25,
      ingredients: "620 ml"
    },
    ]

  botellonesList: LaCultaElement[] =
  [
    {
      name: "Berry Singani Punch",
      price: 175,
      ingredients: "Frutos rojos, singani, agua gasificada, limón."
      },
    {
      name: "Charcas Punch",
      price: 175,
      ingredients: "Mango, durazno, tumbo, limón."
      },
    {
      name: "Singanito",
      price: 175,
      ingredients: "Botella San Pedro, hielo, limón, bitter y canela."
      },
    ]

  barrilCervezaList: LaCultaElement[] =
  [
    {
      name: "Artensalaes",
      price: 145,
      ingredients: "Cervezas artesanales de temporada."
      },
    {
      name: "Huari",
      price: 125
      },
    {
      name: "Paceña Pilsener",
      price: 110,
      },
    ]

  vasosList: LaCultaElement[] =
  [
    {
      name: "Singani",
      price: 20,
      ingredients: "C/S canela"
      },
    {
      name: "Ron",
      price: 20
      },
    {
      name: "Fernet",
      price: 20,
      },
    {
    name: "Mojito y mojito frutado",
    price: 25,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
