
// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-out-back'
});

// Toggle del menú móvil
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
    menuToggle.innerHTML = mainMenu.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        mainMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Animaciones con GSAP
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Animación de partículas de fondo
function createParticles() {
    const particlesContainer = document.getElementById('particles-js');
    const particleCount = window.innerWidth < 768 ? 20 : 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio entre 2px y 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Opacidad aleatoria
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Animación flotante
        gsap.to(particle, {
            x: `${Math.random() * 100 - 50}px`,
            y: `${Math.random() * 100 - 50}px`,
            duration: Math.random() * 20 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        particlesContainer.appendChild(particle);
    }
}

// Animación del encabezado
gsap.to("header", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "elastic.out(1, 0.5)"
});

gsap.to(".logo", {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    delay: 0.3,
    ease: "back.out(4)"
});

gsap.to(".menu a", {
    y: 0,
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.5,
    ease: "back.out(2)"
});

// Animación del título typewriter
gsap.to(".typewriter", {
    text: "VIVOS PARA SERVIR",
    duration: 3,
    ease: "none",
    delay: 0.8
});

// Animación para las secciones
gsap.utils.toArray(".seccion").forEach((section, i) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
            gsap.to(section, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out"
            });
        }
    });
});

// Animación para las tarjetas
gsap.utils.toArray(".tarjeta").forEach((card, i) => {
    ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        onEnter: () => {
            gsap.to(card, {
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                delay: i * 0.1
            });
        }
    });
});

// Animación para los miembros del equipo
gsap.utils.toArray(".miembro-equipo").forEach((member, i) => {
    ScrollTrigger.create({
        trigger: member,
        start: "top 80%",
        onEnter: () => {
            gsap.to(member, {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(2)",
                delay: i * 0.15
            });
        }
    });
});

// Animación para los testimonios
gsap.utils.toArray(".testimonio-card").forEach((card, i) => {
    ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        onEnter: () => {
            gsap.to(card, {
                y: 0,
                rotationY: 0,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(2)",
                delay: i * 0.1
            });
        }
    });
});

// Animación para el mapa de misiones
ScrollTrigger.create({
    trigger: ".mapa-misiones",
    start: "top 80%",
    onEnter: () => {
        gsap.to(".mapa-misiones", {
            rotationX: 0,
            opacity: 1,
            duration: 1.2,
            ease: "back.out(2)"
        });
        
        // Animación de los puntos de misión
        gsap.to(".punto-mision", {
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "elastic.out(1, 0.5)"
        });
    }
});

// Animación para la barra de progreso
ScrollTrigger.create({
    trigger: ".barra-progreso",
    start: "top 80%",
    onEnter: () => {
        gsap.to(".barra-progreso", {
            width: "85%",
            duration: 2,
            ease: "power2.out"
        });
    }
});

// Animación para los iconos de estadísticas
gsap.utils.toArray(".stats-icon").forEach((icon, i) => {
    ScrollTrigger.create({
        trigger: icon,
        start: "top 80%",
        onEnter: () => {
            gsap.to(icon, {
                opacity: 1,
                duration: 0.8,
                ease: "back.out(2)",
                delay: i * 0.2
            });
        }
    });
});

// Animación para el formulario de contacto
ScrollTrigger.create({
    trigger: ".formulario-contacto",
    start: "top 80%",
    onEnter: () => {
        gsap.to(".formulario-contacto", {
            rotationY: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out(2)"
        });
        
        gsap.utils.toArray(".input-grupo input, .input-grupo textarea").forEach((input, i) => {
            gsap.to(input, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: i * 0.1,
                ease: "back.out(2)"
            });
        });
        
        gsap.to(".btn-enviar", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.4,
            ease: "back.out(2)"
        });
    }
});

// Crear partículas después de que todo esté cargado
window.addEventListener('load', createParticles);

// Reducir partículas en pantallas pequeñas
window.addEventListener('resize', () => {
    const particlesContainer = document.getElementById('particles-js');
    particlesContainer.innerHTML = '';
    createParticles();
});
