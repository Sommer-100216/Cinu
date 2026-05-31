const inicio = new Date("2025-11-10T01:30:00-05:00");

function actualizarContador(){

  const ahora = new Date();

  let diff = ahora - inicio;

  const s = Math.floor(diff/1000) % 60;
  const m = Math.floor(diff/60000) % 60;
  const h = Math.floor(diff/3600000) % 24;
  const d = Math.floor(diff/86400000);

  const el = document.getElementById("contador");

  if(el){
    el.innerHTML =
    `${d} días ${h} horas <br> 
    ${m} minutos ${s} segundos`;
  }

}

setInterval(actualizarContador, 1000);
actualizarContador();
