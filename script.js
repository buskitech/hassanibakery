// Menu Data - COMPLETE WITH ALL ITEMS AND PRICES
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

// Family Images for Gallery
const familyImages = [
    'assets/family/family1.jpg', 'assets/family/family2.jpg', 'assets/family/family3.jpg',
    'assets/family/family4.jpg', 'assets/family/family5.jpg', 'assets/family/family6.jpg',
    'assets/family/family7.jpg', 'assets/family/family8.jpg', 'assets/family/family9.jpg',
    'assets/family/family10.jpg', 'assets/family/family11.jpg', 'assets/family/family12.jpg',
    'assets/family/family13.jpg', 'assets/family/family14.jpg', 'assets/family/family15.jpg',
    'assets/family/family16.jpg', 'assets/family/family17.jpg', 'assets/family/family18.jpg',
    'assets/family/family19.jpg', 'assets/family/family20.jpg'
];

// Utility Functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function orderViaWhatsApp() {
    const message = "Hello Hassani Bakery! I'd like to place an order from your delicious menu. Please assist me.";
    window.open(`https://wa.me/2349060413678?text=${encodeURIComponent(message)}`, '_blank');
}

function orderItemViaWhatsApp(itemName) {
    const message = `Hello Hassani Bakery! I'd like to order: ${itemName}. Please confirm if it's available.`;
    window.open(`https://wa.me/2349060413678?text=${encodeURIComponent(message)}`, '_blank');
}

function quickInquiryViaWhatsApp() {
    const message = "Hello Hassani Bakery! I have a quick question about your products. Can you help me?";
    window.open(`https://wa.me/2349060413678?text=${encodeURIComponent(message)}`, '_blank');
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
    document.getElementById('mobileMenu').classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

// Gallery - NO LAZY LOADING, INSTANT LOAD
let currentSlide = 0;
let slideInterval;

function initGallery() {
    const gallerySlides = document.querySelector('.gallery-slides');
    if (!gallerySlides) return;
    
    // Create slides WITHOUT lazy loading - all images load immediately
    gallerySlides.innerHTML = familyImages.map((image, index) => 
        `<div class="gallery-slide ${index === 0 ? 'active' : ''}">
            <img src="${image}" alt="Hassani Bakery Customer ${index + 1}">
        </div>`
    ).join('');
    
    startSlideShow();
    
    const gallery = document.querySelector('.gallery-wrapper');
    if (gallery) {
        gallery.addEventListener('mouseenter', pauseSlideShow);
        gallery.addEventListener('mouseleave', startSlideShow);
    }
}

function startSlideShow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

function pauseSlideShow() {
    clearInterval(slideInterval);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % familyImages.length;
    const slides = document.querySelectorAll('.gallery-slide');
    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
}

// Copy to Clipboard
function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        const icon = button.querySelector('i');
        const originalClass = icon.className;
        
        button.classList.add('copied');
        icon.className = 'fas fa-check';
        
        setTimeout(() => {
            button.classList.remove('copied');
            icon.className = originalClass;
        }, 2000);
        
        showToast('Account number copied!');
    }).catch(() => {
        showToast('Failed to copy. Please copy manually.');
    });
}

// Toast Notification
function showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastSlideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
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

// Populate Menu Sections - OPTIMIZED
function populateMenu() {
    const breadsGrid = document.getElementById('breadsGrid');
    const pastriesGrid = document.getElementById('pastriesGrid');
    const cakesGrid = document.getElementById('cakesGrid');
    
    if (breadsGrid) breadsGrid.innerHTML = menuData.breads.map(createMenuItem).join('');
    if (pastriesGrid) pastriesGrid.innerHTML = menuData.pastries.map(createMenuItem).join('');
    if (cakesGrid) cakesGrid.innerHTML = menuData.cakes.map(createMenuItem).join('');
}

// Header Scroll Effect - DEBOUNCED
let scrollTimeout;
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 71, 171, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// Intersection Observer - SIMPLIFIED
function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Observe only after menu is loaded
    setTimeout(() => {
        document.querySelectorAll('.menu-item, .step-modern, .feature-modern, .contact-card').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;
            observer.observe(el);
        });
    }, 100);
}

// Fast Loading
function fastLoad() {
    populateMenu();
    setupAnimations();
}

// Close mobile menu on outside click
function handleOutsideClick(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileMenu && mobileMenuBtn && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
}

// Image Error Handling
function handleImageError(img) {
    img.src = 'data:image/svg+xml,%3Csvg width="300" height="200" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="100%25" height="100%25" fill="%23f3f4f6"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="14" fill="%239fa6b7" text-anchor="middle" dy=".3em"%3EImage Not Found%3C/text%3E%3C/svg%3E';
    img.alt = 'Image not available';
}

function setupImageErrorHandling() {
    setTimeout(() => {
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('error', () => handleImageError(img), { once: true });
        });
    }, 100);
}

// Initialize - OPTIMIZED FOR SPEED
document.addEventListener('DOMContentLoaded', () => {
    console.log('🍞 Initializing Hassani Bakery...');
    
    // Fast menu load
    fastLoad();
    
    // Init gallery
    initGallery();
    
    // Setup image error handling
    setupImageErrorHandling();
    
    // Debounced scroll
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleHeaderScroll, 50);
    }, { passive: true });
    
    // Mobile menu handlers
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMobileMenu();
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                closeMobileMenu();
            }
        });
    });
    
    console.log('✅ Loaded! 🍞');
});
