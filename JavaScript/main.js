document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closeBtn = document.querySelector(".close-popup");

    if (!localStorage.getItem("popupShown")) {
        popup.classList.remove("hidden");
        localStorage.setItem("popupShown", "true");
    }

    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key.toLowerCase() === "b") {
            popup.classList.remove("hidden");
        }
    });
});