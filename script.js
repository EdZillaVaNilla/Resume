function toggleFooterVisibility() {
    const footer = document.querySelector('footer');
    const contactSection = document.querySelector('#contact');
    
    // Get the position of the contact section relative to the viewport
    const contactRect = contactSection.getBoundingClientRect();

    // Check if the contact section is in the viewport
    if (contactRect.top <= window.innerHeight && contactRect.bottom >= 0) {
        footer.style.transform = 'translateY(100%)';
    } else {
        footer.style.transform = 'translateY(0)';
    }
}

window.addEventListener('scroll', toggleFooterVisibility);


//Navigation Animations
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);

        // Scroll to the target section with smooth behavior
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scroll to the top of the target element
        });
    });
});

 // Array of words to cycle through
 const words = ["Virtual Assistant", "Aspiring Computer Scientist", "Developer", "Data editor", "Creator"];
 let currentIndex = 0;
 const changingWordElement = document.querySelector(".changing-word");

 function changeWord() {
     // Fade out the word
     changingWordElement.classList.add("fade-out");

     // Wait for the fade-out transition to complete
     setTimeout(() => {
         // Change the word
         currentIndex = (currentIndex + 1) % words.length;
         changingWordElement.textContent = words[currentIndex];

         // Fade in the new word
         changingWordElement.classList.remove("fade-out");
         changingWordElement.classList.add("fade-in");
     }, 1000); 
 }

    // Array of image URLs for the background
    const images = [
        'url("SLU.jpg")',
        'url("AnyConv.com__FGDa12uVgAE1S5e.jpg")',
        'url("274884749_349223360412994_4009864011524854427_n.jpg")'
    ];

    let currentImageIndex = 0;

    function changeBackground() {
        currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
        document.body.style.backgroundImage = images[currentImageIndex];
    }


    setInterval(changeBackground, 3000);


    changeBackground();

