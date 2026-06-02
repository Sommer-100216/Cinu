const img = document.getElementById("imgHabitacion");

function abrirSala(){

  img.src = "habitaciones/sala.png";

  btnBebe.style.display = "block";
  btnBiblioteca.style.display = "block";
  btnObservatorio.style.display = "block";
  btnSalir.style.display = "block";
}

function abrirBiblioteca(){

  img.src = "habitaciones/biblioteca.png";

  btnBebe.style.display = "none";
  btnObservatorio.style.display = "none";
  btnSalir.style.display = "none";

  btnBiblioteca.innerHTML = "🛋️ Sala";
  btnBiblioteca.onclick = abrirSala;
}

function abrirObservatorio(){

  img.src = "habitaciones/observatorio.png";

  btnBebe.style.display = "none";
  btnBiblioteca.style.display = "none";
  btnSalir.style.display = "none";
}
