document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, 
                    behavior: "smooth"
                });
            }
        });
    });
});

// cart----

// ----Product-Details---

// Change Main Product Image
function changeImage(imageSrc) {
    document.getElementById("main-product-image").src = imageSrc;
   
}

// Pin Code Checker
function checkPin() {
    let pinCode = document.getElementById("pin-code").value;
    let pinResult = document.getElementById("pin-result");

    let validPins = ["123456", "654321", "789101"];
    
    if (validPins.includes(pinCode)) {
        pinResult.innerHTML = "✅ Delivery Available!";
        pinResult.style.color = "green";
    } else {
        pinResult.innerHTML = "❌ Delivery Not Available!";
        pinResult.style.color = "red";
    }
}

// Add Review
function addReview() {
    let reviewText = document.getElementById("review-input").value;
    if (reviewText.trim() === "") return;

    let reviewDiv = document.getElementById("reviews");
    let newReview = document.createElement("p");
    newReview.textContent = reviewText;
    reviewDiv.appendChild(newReview);

    document.getElementById("review-input").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded! ✅");

    // Signup Form Logic
    document.addEventListener("DOMContentLoaded", function () {
        const signupForm = document.getElementById("signupForm");
    
        if (signupForm) {
            signupForm.addEventListener("submit", function (event) {
                event.preventDefault();
                console.log("Signup form submitted! 🔄");
            });
        } else {
            console.error("⚠️ signupForm not found! Check your HTML ID.");
        }
    });
    
    
    document.addEventListener("DOMContentLoaded", function () {
        const signupForm = document.getElementById("signupForm");
        if (signupForm) {
            signupForm.addEventListener("submit", function (event) {
                event.preventDefault();
    
                // Fetch input fields safely
                const emailInput = document.getElementById("email");
                const passwordInput = document.getElementById("password");
    
                if (emailInput && passwordInput) {
                    const email = emailInput.value;
                    const password = passwordInput.value;
                    
                    console.log("Email:", email);
                    console.log("Password:", password);
                    
                    // Save to localStorage
                    localStorage.setItem("userEmail", email);
                    localStorage.setItem("userPassword", password);
    
                    alert("Signup Successful! 🎉");
                    window.location.href = "login.html"; // Redirect to login page
                } else {
                    console.error("Form elements not found!");
                }
            });
        }
    });
    
    // Login Form Logic
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let email = document.getElementById("login-email").value.trim();
            let password = document.getElementById("login-password").value.trim();

            let users = JSON.parse(localStorage.getItem("users")) || [];

            let validUser = users.find(user => user.email === email && user.password === password);

            if (validUser) {
                localStorage.setItem("loggedInUser", JSON.stringify(validUser));
                alert("Login Successful! Redirecting to Home...");
                window.location.href = "index.html";
            } else {
                alert("Invalid email or password!");
            }
        });
    }
});

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

