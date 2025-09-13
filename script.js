document.addEventListener('DOMContentLoaded', () => {

    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMenuButton = document.getElementById('close-menu-button');
    const menuLinks = document.querySelectorAll('.close-menu-link');

    function toggleMenu() {
        const isMenuOpen = hamburgerButton.classList.toggle('open');
        hamburgerButton.setAttribute('aria-expanded', isMenuOpen);
        
        mobileMenu.classList.toggle('menu-hidden');
        mobileMenu.classList.toggle('menu-visible');
        
        mobileMenuOverlay.classList.toggle('opacity-0');
        mobileMenuOverlay.classList.toggle('pointer-events-none');

        document.body.style.overflow = mobileMenu.classList.contains('menu-visible') ? 'hidden' : '';
    }

    hamburgerButton.addEventListener('click', toggleMenu);
    mobileMenuOverlay.addEventListener('click', toggleMenu);
    closeMenuButton.addEventListener('click', toggleMenu);
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('menu-visible')) {
                toggleMenu();
            }
        });
    });

    const bookingModal = document.getElementById('booking-modal');

    window.openModal = function() {
        bookingModal.classList.remove('modal-hidden');
        bookingModal.classList.add('modal-visible');
        document.body.style.overflow = 'hidden';
    }

    window.closeModal = function() {
        bookingModal.classList.add('modal-hidden');
        bookingModal.classList.remove('modal-visible');
        if (!mobileMenu.classList.contains('menu-visible')) {
           document.body.style.overflow = ''; 
        }
    }
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && bookingModal.classList.contains('modal-visible')) {
            closeModal();
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formularul a fost trimis! (Aceasta este o demonstrație - datele nu au fost trimise nicăieri)');
        closeModal();
    });

    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
        }
    });
});