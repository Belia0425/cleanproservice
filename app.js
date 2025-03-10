document.addEventListener("DOMContentLoaded", function () {

    function toggleMenu() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("active");
    }

    document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
    document.querySelector(".close-btn").addEventListener("click", toggleMenu);

    document.addEventListener("click", function (event) {
        const sidebar = document.getElementById("sidebar");
        const menuBtn = document.querySelector(".menu-btn");

        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Modal Formulario
    const modal = document.getElementById("serviceModal");
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButton = document.querySelector(".close-modal");
    const form = document.getElementById("serviceForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const body = document.body;

    modal.style.display = "none";

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex";
            body.classList.add("modal-active");
        });
    });

    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
        body.classList.remove("modal-active");
    });

    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
            modal.style.display = "none";
            body.classList.remove("modal-active");
        }
    });

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