/*
 * Gelato House - Main JavaScript
 * Handles interactivity and dynamic behavior
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the mobile menu
    initMobileMenu();

    // Initialize flavor filtering
    initFlavorFiltering();

    // Initialize menu filtering
    initMenuFiltering();

    // Load gallery images
    loadGalleryImages();

    // Initialize scroll effects
    initScrollEffects();

    // Initialize form validation
    initFormValidation();

    // Initialize See More functionality
    initSeeMore();
});

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const leftMenu = document.querySelector('.left-menu');
    const rightMenu = document.querySelector('.right-menu');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('menu-overlay');

    if (mobileMenuBtn && leftMenu && rightMenu && overlay) {
        // Toggle mobile menu
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = mobileMenuBtn.classList.contains('active');
            
            mobileMenuBtn.classList.toggle('active');
            leftMenu.classList.toggle('active');
            rightMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', function() {
            closeMenu();
        });

        // Close menu when clicking a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMenu();
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && 
                (leftMenu.classList.contains('active') || rightMenu.classList.contains('active'))) {
                closeMenu();
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && 
                (leftMenu.classList.contains('active') || rightMenu.classList.contains('active'))) {
                closeMenu();
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });

        // Function to close menu
        function closeMenu() {
            mobileMenuBtn.classList.remove('active');
            leftMenu.classList.remove('active');
            rightMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
}

// Flavor filtering functionality
function initFlavorFiltering() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const flavorItems = document.querySelectorAll('.flavor-item');

    if (categoryBtns.length && flavorItems.length) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                // Show/hide flavor items based on category
                flavorItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Add click event for the "All" see more button
        const allSeeMoreBtn = document.querySelector('.see-more-btn[data-category="all"]');
        if (allSeeMoreBtn) {
            allSeeMoreBtn.addEventListener('click', function() {
                showAllItemsForCategory('all');
                this.parentElement.style.display = 'none';
            });
        }
    }
}

// Function to initialize the menu on page load
function initializeMenu() {
    const menuItems = document.querySelectorAll('.menu-item');
    const defaultCategory = 'crepes'; // Default active category
    
    // Mark all relevant items as visible for the active category
    menuItems.forEach(item => {
        if (item.getAttribute('data-category') === defaultCategory) {
            item.classList.add('category-visible');
            item.style.display = 'block';
        } else {
            item.classList.remove('category-visible');
            item.style.display = 'none';
        }
    });
}



// Menu filtering functionality
function initMenuFiltering() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuItems = document.querySelectorAll('.menu-item');
    
    if (categoryBtns.length && menuItems.length) {
        // Initial setup
        initializeMenu();
        
        // Add click event for category buttons
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                categoryBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const category = this.getAttribute('data-category');

                // Show/hide menu items based on category
                menuItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === category) {
                        item.classList.add('category-visible');
                        item.style.display = 'block';
                    } else {
                        item.classList.remove('category-visible');
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Initialize gallery functionality
function loadGalleryImages() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (!galleryItems.length) return;

    // Add click event to each gallery item to open Instagram
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            window.open('https://www.instagram.com/gelato_house__/', '_blank');
        });

        // Add hover effect for better UX
        item.addEventListener('mouseenter', function() {
            item.style.cursor = 'pointer';
        });
    });
}

// Lightbox functionality
function openLightbox(imagePath) {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    
    const lightboxContent = document.createElement('div');
    lightboxContent.classList.add('lightbox-content');
    
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('lightbox-close');
    closeBtn.innerHTML = '&times;';
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Lightbox Image';
    
    // Append elements
    lightboxContent.appendChild(closeBtn);
    lightboxContent.appendChild(img);
    lightbox.appendChild(lightboxContent);
    document.body.appendChild(lightbox);
    
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
    
    // Close lightbox when clicking close button or outside the image
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Add lightbox styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1010;
            animation: fadeIn 0.3s;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-content img {
            max-width: 100%;
            max-height: 90vh;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        }
        
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 30px;
            color: white;
            background: transparent;
            border: none;
            cursor: pointer;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.remove();
        document.body.style.overflow = '';
    }
}

// Scroll effects
function initScrollEffects() {
    // Add shadow to header on scroll
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                // Add scrolled styles dynamically
                if (!document.querySelector('#scrolled-styles')) {
                    const style = document.createElement('style');
                    style.id = 'scrolled-styles';
                    style.textContent = `
                        header.scrolled {
                            background-color: rgba(255, 255, 255, 0.98);
                            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
                        }
                        header.scrolled .container {
                            height: 6.5rem;
                        }
                    `;
                    document.head.appendChild(style);
                }
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Active nav menu based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (sections.length && navLinks.length) {
        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// Form validation
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Form submission would normally be handled here with AJAX
            // For demo purposes, we'll just show an alert
            alert('Thank you! Your message has been sent.');
            contactForm.reset();
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value.trim();
            
            if (!email || !isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Form submission would normally be handled here with AJAX
            // For demo purposes, we'll just show an alert
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
}

// Initialize See More functionality
function initSeeMore() {
    // Simply call the initializeMenu function to set up everything correctly
    initializeMenu();
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
