const cinu = {

  hogar: {
    nombre: "Cinu"
  },

  bebe: {
    hambre: 100,
    felicidad: 100,
    salud: 100,
    enfermo: false,
    ultimaComida: Date.now()
  }

};

function guardarCinu(){

  localStorage.setItem(
    "cinu",
    JSON.stringify(cinu)
  );

}

function cargarCinu(){

  const datos =
  localStorage.getItem("cinu");

  if(datos){

    Object.assign(
      cinu,
      JSON.parse(datos)
    );

  }

}
