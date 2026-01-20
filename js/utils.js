/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

/**
 * Debounce function to limit function execution frequency
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
function debounce(func, delay = 300) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Format price to currency format
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency symbol (default: $)
 * @returns {string} Formatted price string
 */
function formatPrice(amount, currency = '$') {
    return `${currency}${parseFloat(amount).toFixed(2)}`;
}

/**
 * Show toast notification
 * @param {string} message - Message to display
 * @param {string} type - Toast type: 'success', 'error', 'info'
 * @param {number} duration - Duration in milliseconds (default: 3000)
 */
function showToast(message, type = 'info', duration = 3000) {
    const toastContainer = document.getElementById('toastContainer') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    
    const messageEl = document.createElement('div');
    messageEl.className = 'toast-message';
    messageEl.textContent = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.setAttribute('aria-label', 'Close notification');
    closeBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    `;
    
    toast.appendChild(messageEl);
    toast.appendChild(closeBtn);
    toastContainer.appendChild(toast);
    
    // Close button handler
    closeBtn.addEventListener('click', () => {
        removeToast(toast);
    });
    
    // Auto remove after duration
    setTimeout(() => {
        removeToast(toast);
    }, duration);
    
    return toast;
}

/**
 * Remove toast notification
 * @param {HTMLElement} toast - Toast element to remove
 */
function removeToast(toast) {
    if (toast && toast.parentNode) {
        toast.classList.add('hide');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }
}

/**
 * Create toast container if it doesn't exist
 * @returns {HTMLElement} Toast container element
 */
function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    document.body.appendChild(container);
    return container;
}

/**
 * Create skeleton loader for product card
 * @returns {HTMLElement} Skeleton card element
 */
function createSkeletonLoader() {
    const skeletonCard = document.createElement('div');
    skeletonCard.className = 'skeleton-card skeleton-loader';
    
    skeletonCard.innerHTML = `
        <div class="skeleton-image skeleton-loader"></div>
        <div style="padding: 1rem;">
            <div class="skeleton-text skeleton-loader medium" style="margin-bottom: 0.5rem;"></div>
            <div class="skeleton-text skeleton-loader short" style="margin-bottom: 0.5rem;"></div>
            <div class="skeleton-text skeleton-loader short" style="width: 40%;"></div>
        </div>
    `;
    
    return skeletonCard;
}

/**
 * Create multiple skeleton loaders
 * @param {number} count - Number of skeletons to create
 * @returns {Array<HTMLElement>} Array of skeleton elements
 */
function createSkeletonLoaders(count = 8) {
    const skeletons = [];
    for (let i = 0; i < count; i++) {
        skeletons.push(createSkeletonLoader());
    }
    return skeletons;
}

/**
 * Scroll to top of page smoothly
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Initialize scroll to top button
 */
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) return;
    
    // Show/hide button based on scroll position
    function handleScroll() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', debounce(handleScroll, 100));
    scrollBtn.addEventListener('click', scrollToTop);
    
    // Initial check
    handleScroll();
}

/**
 * Setup scroll reveal animations using Intersection Observer
 */
function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    if (revealElements.length === 0) return;
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Unobserve after animation to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Lazy load images using Intersection Observer
 * @param {NodeList|Array} imageElements - Image elements to lazy load
 */
function initLazyLoading(imageElements) {
    if (!imageElements || imageElements.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Load image from data-src or src attribute
                const dataSrc = img.getAttribute('data-src');
                if (dataSrc) {
                    img.src = dataSrc;
                    img.removeAttribute('data-src');
                }
                
                // Add loaded class
                img.classList.add('loaded');
                
                // Stop observing once loaded
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    imageElements.forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Format number with commas (thousand separator)
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Get random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Clamp number between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

/**
 * Generate unique ID
 * @returns {string} Unique ID string
 */
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} threshold - Threshold percentage (0-1)
 * @returns {boolean} True if element is in viewport
 */
function isInViewport(element, threshold = 0) {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    return (
        rect.top >= -rect.height * threshold &&
        rect.left >= -rect.width * threshold &&
        rect.bottom <= windowHeight + rect.height * threshold &&
        rect.right <= windowWidth + rect.width * threshold
    );
}

/**
 * Smooth scroll to element
 * @param {HTMLElement|string} element - Element or selector to scroll to
 * @param {number} offset - Offset from top in pixels
 */
function scrollToElement(element, offset = 0) {
    const target = typeof element === 'string' ? document.querySelector(element) : element;
    if (!target) return;
    
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

/**
 * Get URL parameters
 * @param {string} param - Parameter name
 * @returns {string|null} Parameter value or null
 */
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

/**
 * Set URL parameter without page reload
 * @param {string} param - Parameter name
 * @param {string} value - Parameter value
 */
function setUrlParam(param, value) {
    const url = new URL(window.location);
    url.searchParams.set(param, value);
    window.history.pushState({}, '', url);
}

/**
 * Remove URL parameter
 * @param {string} param - Parameter name
 */
function removeUrlParam(param) {
    const url = new URL(window.location);
    url.searchParams.delete(param);
    window.history.pushState({}, '', url);
}

// Export functions for use in other modules
window.utils = {
    debounce,
    formatPrice,
    showToast,
    removeToast,
    createSkeletonLoader,
    createSkeletonLoaders,
    scrollToTop,
    initScrollToTop,
    initRevealOnScroll,
    initLazyLoading,
    formatNumber,
    getRandomInt,
    clamp,
    generateId,
    isInViewport,
    scrollToElement,
    getUrlParam,
    setUrlParam,
    removeUrlParam
};



