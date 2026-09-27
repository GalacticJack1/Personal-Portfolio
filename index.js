let darkModeToggle = false;

function toggleDarkMode() {
    darkModeToggle = !darkModeToggle;
    if (darkModeToggle) {
        document.body.classList.add("dark-mode")
    }
    else {
        document.body.classList.remove("dark-mode")
    }

}

function toggleModal() {
    const modal = document.querySelector(".modal");

    modal.classList.toggle("modal--open");

}