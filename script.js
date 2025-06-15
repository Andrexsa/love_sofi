const contador = document.getElementById("contador");

// Cambia esta fecha por la fecha en la que te enamoraste
const fechaInicio = new Date("2023-08-01T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  contador.innerHTML = `${dias} días, ${horas} hs, ${minutos} min, ${segundos} seg`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
