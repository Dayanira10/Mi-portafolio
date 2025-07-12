 // JS para validar el formulario de contacto

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const tipo = document.getElementById("tipo").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje || !tipo) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    if (!emailValido) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    alert("¡Gracias por tu mensaje! Te responderé pronto.");
    form.reset();
  });
});