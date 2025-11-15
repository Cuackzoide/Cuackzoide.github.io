// Funcion de navegación con Enter (ADICIONAL UX)
const darleEnter = (nextInput) => (e) => {
  if (e.key === "Enter") {
    nextInput.focus();
  }
};

// Navegacion con Enter en jQuery
$("#name").on("keypress", darleEnter($("#email")));
$("#email").on("keypress", darleEnter($("#message")));
$("#message").on("keypress", darleEnter($("#form-btn")));
$("#form-btn").on("focus", (e) => {
  if (e.key === "Enter") {
    $("#form-btn").click();
  }
});

// Validación del formulario con jQuery
$("#form-btn").on("click", () => {
  const isValidMessage =
    $("#message").val() !== "" && $("#message").val().length >= 4;
  const isValidName = $("#name").val() !== "" && $("#name").val().length >= 3;
  const isValidEmail =
    $("#email").val() !== "" && $("#email").val().includes("@");

  if (isValidMessage && isValidName && isValidEmail) {
    $("#form-message").html(`
      <div class="card border-info m-3 d-block">
        <div class='card-header bg-info'>Envio exitoso</div>
        <div class='card-body'>¡Gracias por completar el formulario!</div>
      </div>`);
  } else {
    $("#form-message").html(`
      <div class="card border-warning m-3 d-block">
        <div class='card-header bg-warning'>Envio erroneo</div>
        <div class='card-body'>Por favor, complete correctamente todos los campos.</div>
      </div>`);
  }
});

// Smooth scroll con jQuery (Desde el menú de navegación)
$('.dropdown-menu a[href^="#"]').on("click", (e) => {
  e.preventDefault(); // Previene el salto inmediato !important
  let destino = $(e.currentTarget).attr("href");
  let alturaTop = $(".navbar").outerHeight() + 20;

  // Animación de scroll al DOCUMENTO COMPLETO
  $("html, body").animate(
    {
      scrollTop: $(destino).offset().top - alturaTop, // Calcula la posición final
    },
    "slow"
  );
  $(".navbar-collapse").collapse("hide"); // Cierra el menú en celulares !important
});
