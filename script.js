// Menu Data
const menuData = {
    breads: [
        { name: "Sardine Bread", price: "₦3,600", description: "Savory bread with sardine filling", image: "assets/hero-bread.jpg" },
        { name: "Sardine Bread Plus", price: "₦6,700", description: "Premium sardine bread with extra filling", image: "assets/bread-variety.jpg" },
        { name: "Chocolate Bread", price: "₦3,500", description: "Rich chocolate-flavored bread", image: "assets/hero-bread.jpg" },
        { name: "Mini-burger (sider) Bread", price: "₦2,000", description: "Perfect for mini burgers", image: "assets/bread-variety.jpg" },
        { name: "Hassani Marble Bread", price: "₦4,500", description: "Our signature marble bread", featured: true, image: "assets/hero-bread.jpg" },
        { name: "Coconut Bread", price: "₦3,200", description: "Tropical coconut-flavored bread", image: "assets/bread-variety.jpg" },
        { name: "Fruit Bread", price: "₦3,300", description: "Mixed fruit bread", image: "assets/hero-bread.jpg" },
        { name: "Jumbo Bread", price: "₦3,200", description: "Large family-sized bread", image: "assets/bread-variety.jpg" },
        { name: "Hassani Special \"Dusty Milk\" Bread", price: "₦4,500", description: "Our special milk bread", featured: true, image: "assets/hero-bread.jpg" },
        { name: "Choco-Fruity Mix Bread", price: "₦4,000", description: "Chocolate and fruit combination", image: "assets/bread-variety.jpg" },
        { name: "Small Bread", price: "₦350", description: "Perfect for individual servings", image: "assets/hero-bread.jpg" }
    ],
    pastries: [
        { name: "Meat Pie", price: "₦2,000", description: "Flaky pastry with seasoned meat filling", image: "assets/pastries.jpg" },
        { name: "Chicken Pie", price: "₦2,500", description: "Tender chicken in crispy pastry", image: "assets/pastries.jpg" },
        { name: "Plain Doughnut", price: "₦8,000", description: "Box of 6 classic doughnuts", image: "assets/pastries.jpg" },
        { name: "Creamy Doughnuts", price: "₦14,000", description: "Box of 6 cream-filled doughnuts", image: "assets/pastries.jpg" }
    ],
    cakes: [
        { name: "Chocolate Cake Slices", price: "₦7,500", description: "Rich chocolate cake slices", image: "assets/cake-slices.jpg" },
        { name: "Red Velvet Cake Slices", price: "₦7,500", description: "Classic red velvet cake", image: "assets/cake-slices.jpg" },
        { name: "Marble Cake Slices", price: "₦7,500", description: "Marble cake slices", image: "assets/cake-slices.jpg" },
        { name: "Vanilla Cake Slices", price: "₦7,500", description: "Pure vanilla cake slices", image: "assets/cake-slices.jpg" },
        { name: "Cupcakes Variety Box", price: "₦20,000", description: "Box of 12: Red Velvet, Chocolate, Vanilla, Strawberry, Marble, Oreo", featured: true, image: "assets/cake-slices.jpg" }
    ]
};

// Family Images
const familyImages = [
    'assets/family/family1.jpg',
    'assets/family/family2.jpg', 
    'assets/family/family3.jpg',
    'assets/family/family4.jpg',
    'assets/family/family5.jpg',
    'assets/family/family6.jpg',
    'assets/family/family7.jpg',
    'assets/family/family8.jpg',
    'assets/family/family9.jpg',
    'assets/family/family10.jpg',
    'assets/family/family11.jpg',
    'assets/family/family12.jpg',
    'assets/family/family13.jpg',
    'assets/family/family14.jpg',
    'assets/family/family15.jpg',
    'assets/family/family16.jpg',
    'assets/family/family17.jpg',
    'assets/family/family18.jpg',
    'assets/family/family19.jpg',
    'assets/family/family20.jpg'
];

// Utility Functions

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function orderViaWhatsApp() {
    const message = "Hello Hassani Bakery! I'd like to place an order from your delicious menu. Please assist me.";
    const url = `https://wa.me/2349060413678?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// For menu item orders
function orderItemViaWhatsApp(itemName) {
    const message = `Hello Hassani Bakery! I'd like to order: ${itemName}. Please confirm if it's available.`;
    const url = `https://wa.me/2349060413678?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function quickInquiryViaWhatsApp() {
    const message = "Hello Hassani Bakery! I have a quick question about your products. Can you help me?";
    const url = `https://wa.me/2349060413678?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function openGoogleMaps() {
    window.open('https://maps.app.goo.gl/fhaUEGuiAzdGVWEA7', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/hassanibakery?igsh=eHh0bDhtYnV4amdi', '_blank');
}

function openFacebook() {
    window.open('https://www.facebook.com/profile.php?id=61579212540596&mibextid=rS40aB7S9Ucbxw6v', '_blank');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('active');
}

// Gallery functionality - FIXED VERSION
let currentSlide = 0;
let slideInterval;

function initGallery() {
    const gallerySlides = document.querySelector('.gallery-slides');
    
    if (!gallerySlides) {
        console.log('Gallery slides not found!');
        return;
    }
    
    console.log('Initializing gallery with', familyImages.length, 'images');
    
    // Create slides (NO DOTS, NO CONTROLS)
    gallerySlides.innerHTML = familyImages.map((image, index) => `
        <div class="gallery-slide ${index === 0 ? 'active' : ''}">
            <img src="${image}" alt="Hassani Bakery Customer ${index + 1}" loading="lazy">
        </div>
    `).join('');
    
    // Start auto-play
    startSlideShow();
    
    // Pause on hover
    const gallery = document.querySelector('.trust-gallery');
    if (gallery) {
        gallery.addEventListener('mouseenter', pauseSlideShow);
        gallery.addEventListener('mouseleave', startSlideShow);
    }
}

function startSlideShow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 4000); // Change slide every 4 seconds
    console.log('Slideshow started');
}

function pauseSlideShow() {
    clearInterval(slideInterval);
    console.log('Slideshow paused');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % familyImages.length;
    console.log('Moving to slide:', currentSlide);
    updateGallery();
}

function updateGallery() {
    const slides = document.querySelectorAll('.gallery-slide');
    
    console.log('Updating gallery, current slide:', currentSlide);
    
    // ONLY update slides (NO DOTS)
    slides.forEach((slide, index) => {
        const isActive = index === currentSlide;
        slide.classList.toggle('active', isActive);
        console.log(`Slide ${index}: ${isActive ? 'active' : 'inactive'}`);
    });
}

// Copy to clipboard functionality
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(function() {
        // Change button appearance to show success
        const icon = button.querySelector('i');
        const originalClass = icon.className;
        
        button.classList.add('copied');
        icon.className = 'fas fa-check';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.classList.remove('copied');
            icon.className = originalClass;
        }, 2000);
        
        // Show toast notification
        showToast('Account number copied to clipboard!');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        showToast('Failed to copy. Please copy manually.');
    });
}

// Toast notification function
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #059669;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        animation: toastSlideIn 0.3s ease;
    `;
    
    // Add toast animation styles to document
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes toastSlideIn {
                from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                to { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
            @keyframes toastSlideOut {
                from { opacity: 1; transform: translateX(-50%) translateY(0); }
                to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Create Menu Item HTML
function createMenuItem(item) {
    return `
        <div class="menu-item">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${item.featured ? '<div class="popular-badge">Popular</div>' : ''}
            </div>
            <div class="menu-item-content">
                <h5 class="menu-item-title">${item.name}</h5>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price}</span>
                    <button class="order-btn" onclick="orderItemViaWhatsApp('${item.name}')">Order</button>
                </div>
            </div>
        </div>
    `;
}

// Populate Menu Sections
function populateMenu() {
    // Populate Breads
    const breadsGrid = document.getElementById('breadsGrid');
    if (breadsGrid) {
        breadsGrid.innerHTML = menuData.breads.map(createMenuItem).join('');
    }

    // Populate Pastries
    const pastriesGrid = document.getElementById('pastriesGrid');
    if (pastriesGrid) {
        pastriesGrid.innerHTML = menuData.pastries.map(createMenuItem).join('');
    }

    // Populate Cakes
    const cakesGrid = document.getElementById('cakesGrid');
    if (cakesGrid) {
        cakesGrid.innerHTML = menuData.cakes.map(createMenuItem).join('');
    }
}

// Smooth Scrolling for Navigation Links
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header Scroll Effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// Intersection Observer for Animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe menu items for fade-in animation
    setTimeout(() => {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(item);
        });
    }, 100);

    // Observe other sections
    const sections = document.querySelectorAll('.step, .feature, .contact-item');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(section);
    });
}

// Loading Animation
function showLoadingAnimation() {
    // Add loading class to menu grids
    const grids = ['breadsGrid', 'pastriesGrid', 'cakesGrid'];
    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        if (grid) {
            grid.innerHTML = '<div class="loading">Loading delicious items...</div>';
        }
    });

    // Simulate loading time and then populate menu
    setTimeout(() => {
        populateMenu();
        setupAnimations();
    }, 500);
}

// Close mobile menu when clicking outside
function handleOutsideClick(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && mobileMenuBtn && !mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        mobileMenu.classList.remove('active');
    }
}

// Lazy Loading for Images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        setTimeout(() => {
            const lazyImages = document.querySelectorAll('img[loading="lazy"]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }, 100);
    }
}

// Performance Optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleHeaderScroll, 10);
    });

    // Preload critical images
    const criticalImages = [
        'assets/hassani-logo.jpg',
        'assets/hero-bread.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Error Handling for Images
function handleImageError(img) {
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlmYTZiNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
    img.alt = 'Image not available';
}

// Add error handling to all images
function setupImageErrorHandling() {
    setTimeout(() => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', () => handleImageError(img));
        });
    }, 100);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing Hassani Bakery');
    
    // Show loading animation and populate menu
    showLoadingAnimation();
    
    // Initialize gallery
    initGallery();
    
    // Setup performance optimizations
    optimizePerformance();
    
    // Setup lazy loading
    setupLazyLoading();
    
    // Setup image error handling
    setupImageErrorHandling();
    
    // Add click outside listener for mobile menu
    document.addEventListener('click', handleOutsideClick);
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    console.log('Hassani Bakery website loaded successfully! 🍞');
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}