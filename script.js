function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");

}


// Close mobile menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.querySelector(".nav-links")
            .classList.remove("active");

    });

});


// Contact form

document.querySelector(".contact-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

        this.reset();

    });