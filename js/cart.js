/* ============================================
   CART MANAGEMENT
   ============================================ */

const CART_STORAGE_KEY = 'cart';

/**
 * Get cart from LocalStorage
 * @returns {Array} Array of cart items
 */
function getCart() {
    try {
        const cart = localStorage.getItem(CART_STORAGE_KEY);
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error('Error loading cart:', error);
        return [];
    }
}

/**
 * Save cart to LocalStorage
 * @param {Array} cart - Cart array to save
 */
function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart:', error);
    }
}

/**
 * Add product to cart
 * @param {number} productId - Product ID
 * @param {number} quantity - Quantity to add (default: 1)
 * @returns {boolean} True if added successfully
 */
function addToCart(productId, quantity = 1) {
    const product = window.products?.getProductById(productId);
    if (!product) {
        if (window.utils && window.utils.showToast) {
            window.utils.showToast('Product not found', 'error');
        }
        return false;
    }
    
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart(cart);
    updateCartBadge();
    renderCart();
    
    if (window.utils && window.utils.showToast) {
        window.utils.showToast(`${product.name} added to cart`, 'success');
    }
    return true;
}

/**
 * Remove product from cart
 * @param {number} productId - Product ID
 */
function removeFromCart(productId) {
    const cart = getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    updateCartBadge();
    renderCart();
    
    const product = window.products?.getProductById(productId);
    if (product && window.utils && window.utils.showToast) {
        window.utils.showToast(`${product.name} removed from cart`, 'info');
    }
}

/**
 * Update product quantity in cart
 * @param {number} productId - Product ID
 * @param {number} quantity - New quantity
 */
function updateCartQuantity(productId, quantity) {
    if (quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const cart = getCart();
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        item.quantity = quantity;
        saveCart(cart);
        updateCartBadge();
        renderCart();
    }
}

/**
 * Clear entire cart
 */
function clearCart() {
    saveCart([]);
    updateCartBadge();
    renderCart();
}

/**
 * Get cart item count
 * @returns {number} Total quantity of items in cart
 */
function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Calculate cart totals
 * @returns {Object} Object with subtotal, tax, and total
 */
function calculateCartTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;
    
    return {
        subtotal,
        tax,
        total,
        itemCount: getCartItemCount()
    };
}

/**
 * Update cart badge count
 */
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const count = getCartItemCount();
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
        
        // Pulse animation when items added
        if (count > 0) {
            badge.classList.add('pulse');
            setTimeout(() => badge.classList.remove('pulse'), 1000);
        }
    }
}

/**
 * Render cart sidebar
 */
function renderCart() {
    const cartContent = document.getElementById('cartContent');
    const cartFooter = document.getElementById('cartFooter');
    
    if (!cartContent) return;
    
    const cart = getCart();
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart empty-cart-animation">
                <div class="empty-cart-icon">🛒</div>
                <h3 class="empty-cart-text">Your cart is empty</h3>
                <p class="empty-cart-text">Start shopping to add items to your cart</p>
            </div>
        `;
        if (cartFooter) {
            cartFooter.style.display = 'none';
        }
        return;
    }
    
    if (cartFooter) {
        cartFooter.style.display = 'block';
    }
    
    const fragment = document.createDocumentFragment();
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.dataset.productId = item.id;
        
        const itemTotal = item.price * item.quantity;
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-price">${window.utils?.formatPrice(item.price) || '$' + item.price.toFixed(2)} each</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" data-action="decrease" data-product-id="${item.id}" aria-label="Decrease quantity">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-product-id="${item.id}" aria-label="Increase quantity">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-product-id="${item.id}" aria-label="Remove item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        `;
        
        fragment.appendChild(cartItem);
    });
    
    cartContent.innerHTML = '';
    cartContent.appendChild(fragment);
    
    // Update totals
    const totals = calculateCartTotals();
    const subtotalEl = document.getElementById('cartSubtotal');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');
    
    if (subtotalEl) subtotalEl.textContent = window.utils?.formatPrice(totals.subtotal) || '$' + totals.subtotal.toFixed(2);
    if (taxEl) taxEl.textContent = window.utils?.formatPrice(totals.tax) || '$' + totals.tax.toFixed(2);
    if (totalEl) totalEl.textContent = window.utils?.formatPrice(totals.total) || '$' + totals.total.toFixed(2);
    
    // Add event listeners
    setupCartEventListeners();
}

/**
 * Setup cart event listeners
 */
function setupCartEventListeners() {
    // Quantity buttons
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    quantityButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            const action = this.dataset.action;
            const cart = getCart();
            const item = cart.find(item => item.id === productId);
            
            if (item) {
                if (action === 'increase') {
                    updateCartQuantity(productId, item.quantity + 1);
                } else if (action === 'decrease') {
                    updateCartQuantity(productId, item.quantity - 1);
                }
            }
        });
    });
    
    // Remove buttons
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            removeFromCart(productId);
        });
    });
}

/**
 * Toggle cart sidebar
 */
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (!sidebar || !overlay) return;
    
    const isActive = sidebar.classList.contains('active');
    
    if (isActive) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        sidebar.setAttribute('aria-hidden', 'true');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    } else {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        sidebar.setAttribute('aria-hidden', 'false');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        renderCart();
    }
}

/**
 * Initialize cart functionality
 */
function initCart() {
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    
    // Close cart button
    const cartClose = document.getElementById('cartClose');
    if (cartClose) {
        cartClose.addEventListener('click', toggleCart);
    }
    
    // Cart overlay
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }
    
    // Close cart on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const sidebar = document.getElementById('cartSidebar');
            if (sidebar && sidebar.classList.contains('active')) {
                toggleCart();
            }
        }
    });
    
    // Add to cart buttons (using event delegation)
    document.addEventListener('click', function(e) {
        const addToCartBtn = e.target.closest('.btn-add-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.productId);
            if (productId) {
                addToCart(productId);
            }
        }
    });
    
    // Initialize cart badge
    updateCartBadge();
    
    // Initial cart render
    renderCart();
}

// Export functions
window.cart = {
    getCart,
    saveCart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartItemCount,
    calculateCartTotals,
    updateCartBadge,
    renderCart,
    toggleCart,
    initCart
};

