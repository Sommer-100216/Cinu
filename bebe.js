function actualizarBebe() {

  const ahora = Date.now();

  const horasSinComer =
  (ahora - cinu.bebe.ultimaComida)
  / 1000 / 60 / 60;

  cinu.bebe.hambre =
  Math.max(
    0,
    100 - horasSinComer * 2
  );

  if(cinu.bebe.hambre <= 0){

    cinu.bebe.enfermo = true;

    cinu.bebe.salud =
    Math.max(
      30,
      cinu.bebe.salud - 0.05
    );

  }

}
