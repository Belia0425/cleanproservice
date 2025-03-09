document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("serviceModal");
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButton = document.querySelector(".close-modal");
    const form = document.getElementById("serviceForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const body = document.body;

    // Aseguramos que el modal esté oculto al cargar la página
    modal.style.display = "none";

    // Evento para abrir el modal solo cuando se hace clic en un botón "Solicita tu servicio"
    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
            body.classList.add("modal-active");
        });
    });

    // Evento para cerrar el modal cuando se hace clic en la "X"
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        body.classList.remove("modal-active");
    });

    // Cerrar modal si se hace clic fuera de él
    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            modal.style.display = "none";
            body.classList.remove("modal-active");
        }
    });

    // Evento para mostrar mensaje de agradecimiento al enviar el formulario
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.style.display = "none";
        thankYouMessage.classList.remove("hidden");

        setTimeout(() => {
            modal.style.display = "none";
            form.style.display = "block";
            body.classList.remove("modal-active");
        }, 3000);
    });
});

