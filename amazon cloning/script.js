// ----- Search functionality -----
const searchInput = document.querySelector(".Search-input");
const searchBtn = document.querySelector(".Search-icon");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // Later: window.location.href = `/search?q=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter something to search!");
    }
});

// ----- Cart counter -----
let cartCount = 0;
const cartElement = document.querySelector(".nav-cart");
const productLinks = document.querySelectorAll(".boxcontent p");

productLinks.forEach(link => {
    link.style.cursor = "pointer";
    link.addEventListener("click", () => {
        cartCount++;
        cartElement.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    });
});

// ----- Back to top -----
const backToTop = document.querySelector(".footpanel1");
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ----- Mobile menu toggle -----
const panelAll = document.querySelector(".panelall");
const panelOps = document.querySelector(".panelops");

panelAll.addEventListener("click", () => {
    panelOps.classList.toggle("show-menu");
});

// ----- Hero section slideshow -----
const hero = document.querySelector(".herosection");
const heroImages = ["img.jpg", "box1.jpg", "box11.jpg", "box12.jpg"]; // add more if you like
let current = 0;

setInterval(() => {
    current = (current + 1) % heroImages.length;
    hero.style.backgroundImage = `url(${heroImages[current]})`;
}, 4000); // change every 4s
