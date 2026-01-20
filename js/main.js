/* ============================================
   MAIN APP INITIALIZATION
   ============================================ */

/**
 * Initialize all modules when DOM is ready
 */
function initApp() {
    // Initialize theme first (before other modules)
    if (window.theme && window.theme.initTheme) {
        window.theme.initTheme();
    }
    
    // Initialize utilities
    if (window.utils && window.utils.initScrollToTop) {
        window.utils.initScrollToTop();
    }
    
    if (window.utils && window.utils.initRevealOnScroll) {
        window.utils.initRevealOnScroll();
    }
    
    // Initialize cart
    if (window.cart && window.cart.initCart) {
        window.cart.initCart();
    }
    
    // Initialize wishlist
    if (window.wishlist && window.wishlist.initWishlist) {
        window.wishlist.initWishlist();
    }
    
    // Initialize search
    if (window.search && window.search.initSearch) {
        window.search.initSearch();
    }
    
    // Initialize filters
    if (window.filter && window.filter.initFilter) {
        window.filter.initFilter();
    }
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Render initial products
    if (window.products && window.products.getAllProducts) {
        const allProducts = window.products.getAllProducts();
        if (window.products.renderProducts) {
            // Show skeleton loaders first
            if (window.products.showSkeletonLoaders) {
                window.products.showSkeletonLoaders();
            }
            
            // Then render products after a short delay for smooth loading effect
            setTimeout(() => {
                window.products.renderProducts(allProducts);
                
                // Update wishlist button states after rendering
                if (window.wishlist && window.wishlist.updateWishlistButtons) {
                    window.wishlist.updateWishlistButtons();
                }
            }, 500);
        }
    }
    
    // Page load animation complete
    document.body.classList.add('loaded');
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbar = document.querySelector('.navbar');
    
    if (!mobileMenuToggle) return;
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
        
        // Toggle mobile menu (if you have a mobile menu structure)
        if (navbar) {
            navbar.classList.toggle('mobile-menu-open');
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuToggle.contains(e.target) && !navbar.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            if (navbar) {
                navbar.classList.remove('mobile-menu-open');
            }
        }
    });
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// Handle page visibility changes (update cart/wishlist badges)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // Page became visible, update badges
        if (window.cart && window.cart.updateCartBadge) {
            window.cart.updateCartBadge();
        }
        if (window.wishlist && window.wishlist.updateWishlistBadge) {
            window.wishlist.updateWishlistBadge();
        }
    }
});



