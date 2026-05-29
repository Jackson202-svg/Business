/* ============================================
   PALMY × JAYDEN IMEL - INTERACTIVE FEATURES
   ============================================ */

// Copy Email Function
document.addEventListener('DOMContentLoaded', function() {
    const copyBtn = document.getElementById('copyBtn');
    const copyFeedback = document.getElementById('copyFeedback');
    const email = 'iimel3952@gmail.com';

    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            // Copy to clipboard
            navigator.clipboard.writeText(email).then(function() {
                // Show feedback
                copyFeedback.textContent = '✓ Email copied!';
                copyFeedback.classList.add('show');

                // Reset button text
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '✓ Copied!';
                copyBtn.style.opacity = '0.8';

                // Reset after 3 seconds
                setTimeout(function() {
                    copyFeedback.classList.remove('show');
                    copyBtn.textContent = originalText;
                    copyBtn.style.opacity = '1';
                }, 3000);
            }).catch(function(err) {
                copyFeedback.textContent = '✗ Failed to copy';
                copyFeedback.classList.add('show');
                setTimeout(function() {
                    copyFeedback.classList.remove('show');
                }, 3000);
            });
        });
    }

    // Scroll-triggered fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && entry.target.classList.contains('fade-in')) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(function(element) {
        observer.observe(element);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active nav link highlighting on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.style.color = 'var(--accent-purple)';
            } else {
                link.style.color = 'var(--text-secondary)';
            }
        });
    });

    // Parallax scroll effect for hero
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPosition = `0px ${scrollPosition * 0.5}px`;
        });
    }

    // External links tracking (optional analytics)
    document.querySelectorAll('a[target="_blank"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const url = this.href;
            // You can add analytics tracking here if needed
            console.log('Opening external link:', url);
        });
    });
});

// Performance optimization: debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}