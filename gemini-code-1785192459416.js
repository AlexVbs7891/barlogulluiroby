// js/script.js
document.addEventListener("DOMContentLoaded", () => {
    // Custom Cursor & Mouse Glow
    const cursor = document.querySelector('.custom-cursor');
    const glow = document.querySelector('.mouse-glow');
    
    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            if(cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
            if(glow) {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
            }
        });

        const hoverElements = document.querySelectorAll('a, button, .3d-hover, .accordion-btn');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hover'));
        });

        // 3D Hover Effect
        const cards = document.querySelectorAll('.3d-hover');
        cards.forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10;
                const rotateY = ((x - centerX) / centerX) * 10;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });
    }

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
    }

    // Navbar Scroll Background
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(7, 7, 15, 0.85)';
            navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 15, 26, 0.6)';
            navbar.style.borderBottom = '1px solid transparent';
        }
    });

    // Shop Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');
    
    if(filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                
                products.forEach(prod => {
                    if(filter === 'all' || prod.getAttribute('data-category') === filter) {
                        prod.style.display = 'flex';
                        setTimeout(() => prod.style.opacity = '1', 50);
                    } else {
                        prod.style.opacity = '0';
                        setTimeout(() => prod.style.display = 'none', 300);
                    }
                });
            });
        });
    }

    // FAQ Accordion
    const accBtns = document.querySelectorAll('.accordion-btn');
    accBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            // Additional styling handled in CSS max-height
        });
    });
});