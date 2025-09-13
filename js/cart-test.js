// Test script to verify cart functionality
console.log('🛒 Cart system loading...');

// Test after page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        console.log('🔍 Testing cart system...');
        
        // Check if cart exists
        if (window.cart) {
            console.log('✅ Cart system loaded successfully');
        } else {
            console.log('❌ Cart system failed to load');
        }
        
        // Count menu items with cart buttons
        const itemsWithButtons = document.querySelectorAll('.menu-item .add-to-cart-btn');
        console.log(`✅ Found ${itemsWithButtons.length} menu items with cart buttons`);
        
        // Check cart button in header
        const cartBtn = document.getElementById('cart-btn');
        if (cartBtn) {
            console.log('✅ Cart button in header found');
        } else {
            console.log('❌ Cart button in header missing');
        }
        
        // Test WhatsApp number
        if (window.cart && window.cart.whatsappNumber === '+212649511492') {
            console.log('✅ WhatsApp number configured correctly: +212649511492');
        }
        
    }, 2000);
});
