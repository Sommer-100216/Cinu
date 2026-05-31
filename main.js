
// =======================
// 🧠 MAIN CONTROLLER
// =======================

// 🔥 espera a que todo cargue bien
document.addEventListener("DOMContentLoaded", () => {

  iniciarSistema();
});



// =======================
// 🚀 INICIALIZACIÓN
// =======================

function iniciarSistema() {

  // 🧸 asegurar cinu existe
  if (!window.cinu) {
    window.cinu = {};
  }

  if (!window.cinu.bebe) {
    window.cinu.bebe = {
      hambre: 50,
      salud: 80,
      felicidad: 70,
      energia: 100,
      enfermo: false,
      ultimaComida: Date.now()
    };
  }

  console.log("🌸 Cinu iniciado correctamente");

  // 🌤️ activar fondo inicial si existe función
  if (typeof actualizarEscena === "function") {
    actualizarEscena();
  }

  // 👶 asegurar actualización del bebé
  setInterval(() => {

    if (typeof actualizarBebe === "function") {
      actualizarBebe();
    }

  }, 3000);

  // 💾 guardado automático seguro
  setInterval(() => {

    if (typeof guardarCinu === "function") {
      guardarCinu();
    }

  }, 5000);

}



// =======================
// 🛑 SEGURIDAD GLOBAL
// =======================

// evita errores raros si algo no carga aún
window.addEventListener("error", (e) => {
  console.log("⚠️ Error controlado:", e.message);
});
