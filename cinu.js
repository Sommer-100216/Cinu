const cinu = {

  hogar: {
    nombre: "Cinu",
    frase: "Mi amor por ti comenzó hace...",
    fechaInicio: "2025-11-10T01:30:00-05:00"
  },

  ambiente: {
    modoAutomatico: true,
    horaActual: null,
    clima: "normal"
  },

  bebe: {
    nombre: "Nuestro Bebito",

    edad: 0,

    hambre: 100,
    energia: 100,
    felicidad: 100,
    salud: 100,

    enfermo: false,

    ultimaComida: Date.now(),

    puedeMorir: false
  },

  habitaciones: {

    sala: {
      desbloqueada: true
    },

    biblioteca: {
      desbloqueada: true,
      poemas: []
    },

    observatorio: {
      desbloqueada: true,
      estrellas: []
    },

    cuartoBebe: {
      desbloqueada: true,

      cartas: [],

      cuna: true,

      peluches: [
        "oso",
        "conejo",
        "zorro"
      ]
    }
  },

  recuerdos: [],

  poemas: [],

  cartas: []

};
