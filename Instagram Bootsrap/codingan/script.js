// ===================================
// TAB SWITCHING FUNCTIONALITY
// ===================================
const tabs = document.querySelectorAll('.tab-item');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get tab name
        const tabName = this.getAttribute('data-tab');
        console.log('Switched to tab:', tabName);
        
        // Here you could implement different content for each tab
        // For example: showTabContent(tabName);
    });
});

// ===================================
// SIDEBAR NAVIGATION
// ===================================
const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        sidebarLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        console.log('Sidebar navigation clicked:', this.querySelector('span').textContent);
    });
});

// ===================================
// BOTTOM NAVIGATION
// ===================================
const bottomNavLinks = document.querySelectorAll('.bottom-nav a');

bottomNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        bottomNavLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        console.log('Bottom navigation clicked');
    });
});

// ===================================
// POST CLICK INTERACTION
// ===================================
const posts = document.querySelectorAll('.post-item');

posts.forEach(post => {
    post.addEventListener('click', function() {
        console.log('Post clicked');
        
        // Get post image src
        const imgSrc = this.querySelector('img').src;
        console.log('Post image:', imgSrc);
        
        // Here you could implement:
        // - Open post in modal
        // - Navigate to post detail page
        // - Show post overlay with more information
        
        // Example: alert('Opening post detail...');
    });
});

// ===================================
// STORY CLICK INTERACTION
// ===================================
const stories = document.querySelectorAll('.story-circle');

stories.forEach(story => {
    story.addEventListener('click', function() {
        console.log('Story clicked');
        
        // Here you could implement:
        // - Open story viewer
        // - Play story animation
        // - Show story in fullscreen
        
        // Example: openStoryViewer(this);
    });
});

// ===================================
// ADD NEW STORY FUNCTION
// ===================================
const addStoryBtn = document.querySelector('.add-story-btn');

if (addStoryBtn) {
    addStoryBtn.addEventListener('click', addNewStory);
}

function addNewStory() {
    alert('Fitur tambah sorotan baru akan segera hadir!');
    
    // Here you could implement:
    // - Open file picker
    // - Upload story image/video
    // - Add story to highlights
    
    console.log('Add new story clicked');
}

// ===================================
// SMOOTH SCROLL BEHAVIOR
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===================================
// IMAGE LOADING ERROR HANDLING
// ===================================
const images = document.querySelectorAll('img');

images.forEach(img => {
    img.addEventListener('load', function() {
        console.log('Image loaded successfully:', this.alt);
    });
    
    img.addEventListener('error', function() {
        this.style.backgroundColor = '#f2f2f2';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        console.log('Image failed to load:', this.src);
        
        // Optional: Set placeholder
        // this.src = 'placeholder.jpg';
    });
});

// ===================================
// PROFILE ACTION BUTTONS
// ===================================
const actionButtons = document.querySelectorAll('.btn-custom');

actionButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const buttonText = this.textContent.trim();
        console.log('Button clicked:', buttonText);
        
        // Handle different button actions
        if (buttonText === 'Edit profil') {
            console.log('Opening profile editor...');
            // Implement edit profile functionality
        } else if (buttonText === 'Lihat arsip') {
            console.log('Opening archive...');
            // Implement view archive functionality
        } else {
            console.log('Opening settings...');
            // Implement settings functionality
        }
    });
});

// ===================================
// SIDEBAR MORE OPTIONS
// ===================================
const sidebarMore = document.querySelector('.sidebar-more a');

if (sidebarMore) {
    sidebarMore.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('More options clicked');
        
        // Here you could implement:
        // - Show dropdown menu
        // - Show modal with more options
        // - Navigate to settings page
    });
}

// ===================================
// WINDOW RESIZE HANDLER
// ===================================
let resizeTimer;

window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    
    resizeTimer = setTimeout(function() {
        console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        
        // Handle responsive behavior
        // Update layout if needed
    }, 250);
});

// ===================================
// SCROLL EVENT HANDLER
// ===================================
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        console.log('Scrolling down');
    } else {
        // Scrolling up
        console.log('Scrolling up');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// ===================================
// KEYBOARD SHORTCUTS
// ===================================
document.addEventListener('keydown', function(e) {
    // ESC key to close modals/overlays
    if (e.key === 'Escape') {
        console.log('ESC pressed - close any open modals');
        // Close modal/overlay functionality here
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowLeft') {
        console.log('Navigate to previous post');
        // Previous post functionality
    }
    
    if (e.key === 'ArrowRight') {
        console.log('Navigate to next post');
        // Next post functionality
    }
});

// ===================================
// INITIALIZE ON PAGE LOAD
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Instagram Profile Page Loaded');
    console.log('Total posts:', posts.length);
    console.log('Total stories:', stories.length);
    
    // Any initialization code here
    // For example: loadUserData(), checkAuthentication(), etc.
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format number (e.g., 1200 -> 1.2k)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===================================
// EXPORT FUNCTIONS (if using modules)
// ===================================
// Uncomment if using ES6 modules
// export { formatNumber, debounce, isInViewport, addNewStory };