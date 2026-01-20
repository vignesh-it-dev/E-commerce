/* ============================================
   FILTER & SORT FUNCTIONALITY
   ============================================ */

let currentFilters = {
    categories: [],
    priceMin: 0,
    priceMax: 500
};

let currentSort = 'popularity';

/**
 * Get current filters
 * @returns {Object} Current filter settings
 */
function getCurrentFilters() {
    return { ...currentFilters };
}

/**
 * Get current sort option
 * @returns {string} Current sort option
 */
function getCurrentSort() {
    return currentSort;
}

/**
 * Filter products by category
 * @param {Array} products - Products to filter
 * @param {Array} categories - Selected categories
 * @returns {Array} Filtered products
 */
function filterByCategory(products, categories) {
    if (!categories || categories.length === 0 || categories.includes('all')) {
        return products;
    }
    
    return products.filter(product => categories.includes(product.category));
}

/**
 * Filter products by price range
 * @param {Array} products - Products to filter
 * @param {number} min - Minimum price
 * @param {number} max - Maximum price
 * @returns {Array} Filtered products
 */
function filterByPrice(products, min, max) {
    return products.filter(product => product.price >= min && product.price <= max);
}

/**
 * Sort products
 * @param {Array} products - Products to sort
 * @param {string} sortOption - Sort option
 * @returns {Array} Sorted products
 */
function sortProducts(products, sortOption) {
    const sorted = [...products];
    
    switch (sortOption) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'popularity':
        default:
            // Sort by rating * reviews (popularity score)
            sorted.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
            break;
    }
    
    return sorted;
}

/**
 * Apply all filters and search
 * @returns {Array} Filtered and sorted products
 */
function applyFilters() {
    let products = window.products?.getAllProducts() || [];
    
    // Apply search filter
    const searchQuery = window.search?.getSearchQuery() || '';
    if (searchQuery) {
        products = window.search.searchProducts(searchQuery);
    }
    
    // Apply category filter
    if (currentFilters.categories.length > 0) {
        products = filterByCategory(products, currentFilters.categories);
    }
    
    // Apply price filter
    products = filterByPrice(products, currentFilters.priceMin, currentFilters.priceMax);
    
    // Apply sort
    products = sortProducts(products, currentSort);
    
    // Update filtered products
    if (window.products) {
        window.products.filteredProducts = products;
    }
    
    // Render products
    if (window.products && window.products.renderProducts) {
        window.products.renderProducts(products);
    }
    
    return products;
}

/**
 * Update category filters
 */
function updateCategoryFilters() {
    const categoryCheckboxes = document.querySelectorAll('input[data-filter="category"]:checked');
    currentFilters.categories = Array.from(categoryCheckboxes).map(cb => cb.value);
    applyFilters();
}

/**
 * Update price filter
 */
function updatePriceFilter() {
    const priceMin = parseFloat(document.getElementById('priceMin')?.value) || 0;
    const priceMax = parseFloat(document.getElementById('priceMax')?.value) || 500;
    
    currentFilters.priceMin = Math.min(priceMin, priceMax);
    currentFilters.priceMax = Math.max(priceMin, priceMax);
    
    applyFilters();
}

/**
 * Update sort option
 * @param {string} sortOption - Sort option
 */
function updateSort(sortOption) {
    currentSort = sortOption;
    applyFilters();
}

/**
 * Initialize filter functionality
 */
function initFilter() {
    // Category filter checkboxes
    const categoryCheckboxes = document.querySelectorAll('input[data-filter="category"]');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // If "All Categories" is checked, uncheck others
            if (this.value === 'all' && this.checked) {
                categoryCheckboxes.forEach(cb => {
                    if (cb.value !== 'all') {
                        cb.checked = false;
                    }
                });
            } else if (this.value !== 'all' && this.checked) {
                // If specific category is checked, uncheck "All"
                const allCheckbox = document.querySelector('input[data-filter="category"][value="all"]');
                if (allCheckbox) {
                    allCheckbox.checked = false;
                }
            }
            
            updateCategoryFilters();
        });
    });
    
    // Price filter inputs
    const priceMinInput = document.getElementById('priceMin');
    const priceMaxInput = document.getElementById('priceMax');
    const applyPriceBtn = document.getElementById('applyPriceFilter');
    
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', updatePriceFilter);
    }
    
    // Price filter on Enter key
    if (priceMinInput) {
        priceMinInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                updatePriceFilter();
            }
        });
    }
    
    if (priceMaxInput) {
        priceMaxInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                updatePriceFilter();
            }
        });
    }
    
    // Sort dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            updateSort(this.value);
        });
    }
    
    // Filter toggle button
    const filterToggle = document.getElementById('filterToggle');
    const filterSidebar = document.getElementById('filterSidebar');
    
    if (filterToggle && filterSidebar) {
        filterToggle.addEventListener('click', function() {
            filterSidebar.classList.toggle('active');
            filterToggle.setAttribute('aria-expanded', filterSidebar.classList.contains('active'));
        });
        
        // Close filter sidebar when clicking outside
        document.addEventListener('click', function(e) {
            if (!filterSidebar.contains(e.target) && !filterToggle.contains(e.target)) {
                filterSidebar.classList.remove('active');
                filterToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Category links in footer
    const categoryLinks = document.querySelectorAll('[data-category-link]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.dataset.categoryLink;
            
            // Check the category checkbox
            const checkbox = document.querySelector(`input[data-filter="category"][value="${category}"]`);
            if (checkbox) {
                // Uncheck "All Categories" first
                const allCheckbox = document.querySelector('input[data-filter="category"][value="all"]');
                if (allCheckbox) {
                    allCheckbox.checked = false;
                }
                checkbox.checked = true;
                updateCategoryFilters();
            }
            
            // Scroll to products section
            const productsSection = document.querySelector('.products-container');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // Category cards in hero section
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Check the category checkbox
            const checkbox = document.querySelector(`input[data-filter="category"][value="${category}"]`);
            if (checkbox) {
                // Uncheck "All Categories" first
                const allCheckbox = document.querySelector('input[data-filter="category"][value="all"]');
                if (allCheckbox) {
                    allCheckbox.checked = false;
                }
                checkbox.checked = true;
                updateCategoryFilters();
            }
            
            // Scroll to products section
            const productsSection = document.querySelector('.products-container');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Export functions
window.filter = {
    getCurrentFilters,
    getCurrentSort,
    filterByCategory,
    filterByPrice,
    sortProducts,
    applyFilters,
    updateCategoryFilters,
    updatePriceFilter,
    updateSort,
    initFilter
};



