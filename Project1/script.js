// Resize Menu on Window Resize


// Simple Form Validation on Contact Page
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
    } else {
        alert('Thank you for your message!');
        // You can also integrate an email service to send the form details
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("themeToggle");

    // Check if a theme is already set
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.add("light-theme");
    }

    themeToggleButton.addEventListener("click", function() {
        // Toggle between light and dark theme
        if (document.body.classList.contains("light-theme")) {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark"); // Save preference
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light"); // Save preference
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Back to Top functionality
    window.onscroll = function() {
        let backToTopButton = document.getElementById("backToTop");
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Scroll smoothly to the top when the button is clicked
    document.getElementById("backToTop").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Toggle dark mode
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
