function getBebe(){
  if(!window.cinu || !window.cinu.bebe) return null;
  return window.cinu.bebe;
}



// =======================
// 👶 ACTUALIZAR BEBÉ
// =======================

function actualizarBebe() {

  const b = getBebe();
  if(!b) return;

  const ahora = Date.now();

  const horasSinComer =
    (ahora - b.ultimaComida) / 1000 / 60 / 60;

  // 🍎 hambre baja con el tiempo
  b.hambre = Math.max(0, 100 - horasSinComer * 2);

  // 😢 LLANTO si tiene mucha hambre
  if (b.hambre < 10) {
    b.enfermo = true;
    b.felicidad = Math.max(0, b.felicidad - 0.3);
  }

  // 😴 SUEÑO si felicidad baja
  if (b.felicidad < 30) {
    b.energia = Math.max(0, b.energia - 0.2);
  }

  // 💔 si está con hambre media
  if (b.hambre <= 20) {
    b.salud = Math.max(0, b.salud - 0.05);
  }
}



// =======================
// 🍼 ALIMENTAR BEBÉ
// =======================

function alimentarBebe(comida = 20) {

  const b = getBebe();
  if(!b) return;

  b.hambre = Math.min(100, b.hambre + comida);
  b.felicidad = Math.min(100, b.felicidad + 5);
  b.salud = Math.min(100, b.salud + 2);

  b.enfermo = false;
  b.ultimaComida = Date.now();

  if (typeof guardarCinu === "function") {
    guardarCinu();
  }
}
