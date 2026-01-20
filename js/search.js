/* ============================================
   SEARCH FUNCTIONALITY
   ============================================ */

let searchQuery = '';

/**
 * Search products by query
 * @param {string} query - Search query
 * @returns {Array} Array of filtered products
 */
function searchProducts(query) {
    if (!query || query.trim() === '') {
        return window.products?.getAllProducts() || [];
    }
    
    const searchTerm = query.toLowerCase().trim();
    const allProducts = window.products?.getAllProducts() || [];
    
    return allProducts.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm);
        const descMatch = product.description.toLowerCase().includes(searchTerm);
        const categoryMatch = product.category.toLowerCase().includes(searchTerm);
        
        return nameMatch || descMatch || categoryMatch;
    });
}

/**
 * Handle search input
 * @param {string} query - Search query
 */
function handleSearch(query) {
    searchQuery = query;
    
    // Get current filters and apply search
    if (window.filter && window.filter.applyFilters) {
        window.filter.applyFilters();
    } else {
        // If filter module not available, just render search results
        const results = searchProducts(query);
        if (window.products && window.products.renderProducts) {
            window.products.renderProducts(results);
        }
    }
}

/**
 * Clear search
 */
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    searchQuery = '';
    
    if (window.filter && window.filter.applyFilters) {
        window.filter.applyFilters();
    } else {
        const allProducts = window.products?.getAllProducts() || [];
        if (window.products && window.products.renderProducts) {
            window.products.renderProducts(allProducts);
        }
    }
}

/**
 * Get current search query
 * @returns {string} Current search query
 */
function getSearchQuery() {
    return searchQuery;
}

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    // Debounced search handler
    const debouncedSearch = window.utils?.debounce(function() {
        const query = searchInput.value.trim();
        handleSearch(query);
    }, 300) || function() {
        const query = searchInput.value.trim();
        handleSearch(query);
    };
    
    // Search input event
    searchInput.addEventListener('input', debouncedSearch);
    
    // Search button click
    const searchBtn = searchInput.nextElementSibling;
    if (searchBtn && searchBtn.classList.contains('search-btn')) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            handleSearch(query);
        });
    }
    
    // Enter key search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim();
            handleSearch(query);
        }
    });
}

// Export functions
window.search = {
    searchProducts,
    handleSearch,
    clearSearch,
    getSearchQuery,
    initSearch
};

