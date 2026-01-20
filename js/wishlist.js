/* ============================================
   WISHLIST FUNCTIONALITY
   ============================================ */

const WISHLIST_STORAGE_KEY = 'wishlist';

/**
 * Get wishlist from LocalStorage
 * @returns {Array} Array of wishlist item IDs
 */
function getWishlist() {
    try {
        const wishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
        return wishlist ? JSON.parse(wishlist) : [];
    } catch (error) {
        console.error('Error loading wishlist:', error);
        return [];
    }
}

/**
 * Save wishlist to LocalStorage
 * @param {Array} wishlist - Wishlist array to save
 */
function saveWishlist(wishlist) {
    try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (error) {
        console.error('Error saving wishlist:', error);
    }
}

/**
 * Check if product is in wishlist
 * @param {number} productId - Product ID
 * @returns {boolean} True if product is in wishlist
 */
function isWishlisted(productId) {
    const wishlist = getWishlist();
    return wishlist.includes(productId);
}

/**
 * Toggle wishlist item
 * @param {number} productId - Product ID
 * @returns {boolean} True if added, false if removed
 */
function toggleWishlist(productId) {
    const wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    const product = window.products?.getProductById(productId);
    
    let added = false;
    
    if (index > -1) {
        // Remove from wishlist
        wishlist.splice(index, 1);
        if (product && window.utils && window.utils.showToast) {
            window.utils.showToast(`${product.name} removed from wishlist`, 'info');
        }
    } else {
        // Add to wishlist
        wishlist.push(productId);
        added = true;
        if (product && window.utils && window.utils.showToast) {
            window.utils.showToast(`${product.name} added to wishlist`, 'success');
        }
    }
    
    saveWishlist(wishlist);
    updateWishlistBadge();
    updateWishlistButtons(productId);
    
    return added;
}

/**
 * Add product to wishlist
 * @param {number} productId - Product ID
 */
function addToWishlist(productId) {
    if (!isWishlisted(productId)) {
        toggleWishlist(productId);
    }
}

/**
 * Remove product from wishlist
 * @param {number} productId - Product ID
 */
function removeFromWishlist(productId) {
    if (isWishlisted(productId)) {
        toggleWishlist(productId);
    }
}

/**
 * Get wishlist count
 * @returns {number} Number of items in wishlist
 */
function getWishlistCount() {
    return getWishlist().length;
}

/**
 * Update wishlist badge count
 */
function updateWishlistBadge() {
    const badge = document.getElementById('wishlistBadge');
    if (badge) {
        const count = getWishlistCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

/**
 * Update wishlist button states
 * @param {number} productId - Product ID to update (optional, updates all if not provided)
 */
function updateWishlistButtons(productId) {
    const isWishlistedValue = isWishlisted(productId);
    
    if (productId) {
        // Update specific product button
        const buttons = document.querySelectorAll(`.product-card-wishlist[data-product-id="${productId}"]`);
        buttons.forEach(btn => {
            if (isWishlistedValue) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    } else {
        // Update all wishlist buttons
        const buttons = document.querySelectorAll('.product-card-wishlist');
        buttons.forEach(btn => {
            const btnProductId = parseInt(btn.dataset.productId);
            if (btnProductId && isWishlisted(btnProductId)) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

/**
 * Initialize wishlist functionality
 */
function initWishlist() {
    // Wishlist button click handlers (using event delegation)
    document.addEventListener('click', function(e) {
        const wishlistBtn = e.target.closest('.product-card-wishlist');
        if (wishlistBtn) {
            e.preventDefault();
            const productId = parseInt(wishlistBtn.dataset.productId);
            if (productId) {
                toggleWishlist(productId);
            }
        }
    });
    
    // Initialize wishlist badge
    updateWishlistBadge();
    
    // Update all wishlist button states on page load
    updateWishlistButtons();
}

// Export functions
window.wishlist = {
    getWishlist,
    saveWishlist,
    isWishlisted,
    toggleWishlist,
    addToWishlist,
    removeFromWishlist,
    getWishlistCount,
    updateWishlistBadge,
    updateWishlistButtons,
    initWishlist
};

