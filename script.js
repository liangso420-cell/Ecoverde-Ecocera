document.addEventListener("DOMContentLoaded", function () {

  emailjs.init({
    publicKey: "3niYKOmiouE_hk2u_"
  });

  const btn = document.querySelector(".btn-enviar");

  btn.addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !correo || !mensaje) {
      alert("Completa todos los campos");
      return;
    }

    emailjs.send("service_x9qe9qy", "TU_TEMPLATE_ID", {
      user_name: nombre,
      user_email: correo,
      message: mensaje
    })
    .then(() => {
      alert("Mensaje enviado ✔");

      document.getElementById("nombre").value = "";
      document.getElementById("correo").value = "";
      document.getElementById("mensaje").value = "";
    })
    .catch((error) => {
      console.log(error);
      alert("Error al enviar ❌");
    });

  });

});