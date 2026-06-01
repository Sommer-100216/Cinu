function ordenarLibros() {
  return [...biblioteca].sort(
    (a, b) => new Date(a.fecha) - new Date(b.fecha)
  );
}

function abrirBiblioteca() {

  const librosOrdenados = ordenarLibros();

  let html = `
    <h2>📚 Biblioteca de Cinu</h2>
    <div id="lista-libros">
  `;

  librosOrdenados.forEach((libro, index) => {

    html += `
      <div class="libro"
           onclick="abrirLibro(${index})">
        📖 ${index + 1}. ${libro.titulo}
        <br>
        <small>${libro.autor}</small>
      </div>
    `;
  });

  html += `</div>`;

  document.getElementById("modalContent").innerHTML = html;
  document.getElementById("modal").style.display = "flex";
}

function abrirLibro(index){

  const librosOrdenados = ordenarLibros();
  const libro = librosOrdenados[index];

  document.getElementById("modalContent").innerHTML = `
    <h2>${libro.titulo}</h2>

    <p>
      ✍️ ${libro.autor}<br>
      📅 ${libro.fecha}
    </p>

    <hr>

    <div style="
      white-space: pre-line;
      text-align:left;
      max-height:400px;
      overflow-y:auto;
    ">
      ${libro.contenido}
    </div>

    <button onclick="abrirBiblioteca()">
      ⬅ Volver
    </button>

    <button onclick="cerrarModal()">
      ❌ Cerrar
    </button>
  `;
}
