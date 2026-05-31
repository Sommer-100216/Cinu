// =======================
// 🌸 CINU GLOBAL SYSTEM
// =======================

window.cinu = {
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

    hambre: 50,
    energia: 100,
    felicidad: 70,
    salud: 80,

    enfermo: false,
    ultimaComida: Date.now(),
    puedeMorir: false
  },

  habitaciones: {
    sala: { desbloqueada: true },

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
      peluches: ["oso", "conejo", "zorro"]
    }
  },

  recuerdos: [],
  poemas: [],
  cartas: []
};



// =======================
// 👶 BEBÉ (SIMULACIÓN)
// =======================

function actualizarBebe() {

  if (!window.cinu || !window.cinu.bebe) return;

  const b = window.cinu.bebe;

  b.hambre = Math.min(100, b.hambre + 0.2);
  b.felicidad = Math.max(0, b.felicidad - 0.05);

  if (b.hambre > 80) {
    b.salud = Math.max(0, b.salud - 0.1);
  }
}



// =======================
// 💾 GUARDADO
// =======================

function guardarCinu() {
  localStorage.setItem("cinu", JSON.stringify(window.cinu));
}



// =======================
// 📥 CARGAR SEGURO
// =======================

(function cargar() {

  const data = localStorage.getItem("cinu");

  if (data) {
    const guardado = JSON.parse(data);

    window.cinu = {
      ...window.cinu,
      ...guardado,
      bebe: {
        ...window.cinu.bebe,
        ...(guardado.bebe || {})
      }
    };
  }
})();



// =======================
// 🔁 LOOP GLOBAL
// =======================

setInterval(() => {

  actualizarBebe();
  guardarCinu();

}, 3000);
