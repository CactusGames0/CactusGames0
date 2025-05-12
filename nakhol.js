// Add sticky class to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});// Select the "Explore" button
const exploreButton = document.querySelector('.hero .btn');

// Add a click event listener to the button
exploreButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    // Select the Games section
    const gamesSection = document.getElementById('games');

    // Scroll to the Games section with smooth behavior
    gamesSection.scrollIntoView({ behavior: 'smooth' });
});
// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener("DOMContentLoaded", () => {
    const statBoxes = document.querySelectorAll(".stat-box h3");

    statBoxes.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-count"));
        const suffix = stat.getAttribute("data-suffix") || "";
        const duration = 2000;
        const increment = target / (duration / 16);

        let current = 0;

        const updateCount = () => {
            current += increment;
            if (current < target) {
                if (suffix) {
                    stat.textContent = Math.ceil(current / 1000) + suffix;
                } else {
                    stat.textContent = Math.ceil(current);
                }
                requestAnimationFrame(updateCount);
            } else {
                if (suffix) {
                    stat.textContent = (target / 1000) + suffix;
                } else {
                    stat.textContent = target;
                }
            }
        };

        updateCount();
    });
});
document.getElementById('animated-text').textContent =  'Next Level Gaming ';
const cards = document.querySelectorAll('.game-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position within the card
        const y = e.clientY - rect.top; // Y position within the card
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = (x - centerX) /50; // Tilt on Y-axis
        const rotateX = (centerY - y) / 50; // Tilt on X-axis

        // Apply smooth tilt effect to the hovered card
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        card.style.transition = 'transform 0.1s ease-out'; // Smooth transition
    });

    card.addEventListener('mouseleave', () => {
        // Reset to default position when mouse leaves
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        card.style.transition = 'transform 0.5s ease-out'; // Smooth reset
    });
});
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    const particlesContainer = document.getElementById('particles-container');
  
    // Update custom cursor position
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  
    // Create particle effect
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
  
    particlesContainer.appendChild(particle);
  
    setTimeout(() => {
      particle.remove();
    }, 1000);
  });
  function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.getElementById('particles-container').appendChild(particle);

    const size = Math.random() * 8 + 6;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    particle.style.top = `${Math.random() * window.innerHeight}px`;

    particle.style.background = `hsl(${Math.random() * 360}, 80%, 70%)`;
    particle.addEventListener('animationend', () => {
      particle.remove();
    });
  }

  setInterval(createParticle, 50);
    let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else {
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }

  lastScroll = currentScroll;
});
    






  