document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Resaltar el ítem del menú activo
                document.querySelectorAll('.navbar a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Cambiar el navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.padding = '1rem 2rem';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'white';
            navbar.style.padding = '1.5rem 2rem';
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Animación al cargar la página
    const heroContent = document.querySelector('.hero-text');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Animación para las tarjetas de proyectos
    const animateOnScroll = (elements) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.5s ease';
        observer.observe(element);
    });
};
    
    animateOnScroll(document.querySelectorAll('.project-card'), 'show');
    animateOnScroll(document.querySelectorAll('.course-card'), 'show');
    
    // Modal para imágenes
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    const closeModal = document.querySelector(".close-modal");
    
    // Funcionalidad para imágenes de proyectos y cursos
    const setupImageModal = (selector) => {
        document.querySelectorAll(selector).forEach(img => {
            img.addEventListener("click", function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt || "Imagen del proyecto";
            });
        });
    };
    
    setupImageModal(".project-img");
    setupImageModal(".course-img");
    
    // Cerrar modal
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });
    
    // Cerrar al hacer clic fuera de la imagen
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});


