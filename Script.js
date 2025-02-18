// script.js

// To access the stars
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// Function to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        let cls = "";
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
    for (let i = 0; i < 5; i++) {
        stars[i].className = "star";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let existingMenu = document.getElementById("menu");

    // Only create the menu if it doesn't already exist
    if (!existingMenu) {
        let menu = document.createElement("div");
        menu.id = "menu";
        menu.innerHTML = `
          <ul>
            <li><a href="members.html"><span>People</span></a></li>
            <li><a href="PreviousProjects.html"><span>Our Previous Projects</span></a></li>
            <li><a href="finalMockUp.html"><span>Final Project</span></a></li>
            <li><a href="ContactUs.html"><span>Contact Us</span></a></li>
          </ul>
        `;
        document.body.prepend(menu); 
    }
});
  
// Function to generate the menu dynamically
function createMenu() {
    const menuContainer = document.getElementById("menu"); // Make sure your HTML has an element with id "menu"
    
    if (!menuContainer) {
        console.error("Menu container not found!");
        return;
    }

    const ul = document.createElement("ul"); // Create unordered list

    menuItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = item.link;
        a.textContent = item.name;

        li.appendChild(a);
        ul.appendChild(li);
    });

    menuContainer.appendChild(ul);
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", createMenu);

let slideIndex = [0, 0, 0]; // Track slides for each project
let slideClass = ["mySlides1", "mySlides2", "mySlides3"];

function showSlides(n, projectIndex) {
    let slides = document.getElementsByClassName(slideClass[projectIndex]);
    if (n >= slides.length) {
        slideIndex[projectIndex] = 0;
    }
    if (n < 0) {
        slideIndex[projectIndex] = slides.length - 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex[projectIndex]].style.display = "block";
}

function plusSlides(n, projectIndex) {
    showSlides(slideIndex[projectIndex] += n, projectIndex);
}

// Initialize slideshows
document.addEventListener("DOMContentLoaded", function() {
    showSlides(0, 0);
    showSlides(0, 1);
    showSlides(0, 2);
});
