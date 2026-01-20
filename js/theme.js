/* ============================================
   THEME MANAGEMENT (DARK/LIGHT MODE)
   ============================================ */

const THEME_STORAGE_KEY = 'theme';

/**
 * Get theme from LocalStorage or system preference
 * @returns {string} Theme value ('light' or 'dark')
 */
function getTheme() {
    // Check LocalStorage first
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    
    // Default to light
    return 'light';
}

/**
 * Set theme
 * @param {string} theme - Theme value ('light' or 'dark')
 */
function setTheme(theme) {
    if (theme !== 'light' && theme !== 'dark') {
        theme = 'light';
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    
    // Update theme toggle button icon
    updateThemeToggle(theme);
}

/**
 * Toggle theme between light and dark
 * @returns {string} New theme value
 */
function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    return newTheme;
}

/**
 * Update theme toggle button appearance
 * @param {string} theme - Current theme
 */
function updateThemeToggle(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    // Update aria-label
    const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-label', label);
}

/**
 * Initialize theme functionality
 */
function initTheme() {
    // Load saved theme or system preference
    const theme = getTheme();
    setTheme(theme);
    
    // Theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only use system preference if no saved preference
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            mediaQuery.addEventListener('change', function(e) {
                setTheme(e.matches ? 'dark' : 'light');
            });
        }
    }
}

// Export functions
window.theme = {
    getTheme,
    setTheme,
    toggleTheme,
    initTheme
};

// Alias for global access
window.initTheme = initTheme;



