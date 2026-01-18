/*
 * Script to add cart buttons to all menu items
 * This will automatically update the HTML with cart functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment for the page to fully load
    setTimeout(() => {
        addCartButtonsToAllItems();
    }, 100);
});

function addCartButtonsToAllItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        // Skip if already has a cart button
        if (item.querySelector('.add-to-cart-btn')) {
            return;
        }
        
        // Get item name and price
        const nameElement = item.querySelector('h3');
        const priceElement = item.querySelector('.price-tag');
        
        if (nameElement && priceElement) {
            const name = nameElement.textContent.trim();
            const priceText = priceElement.textContent.trim();
            const price = parseInt(priceText.replace(/[^0-9]/g, ''));
            
            // Create cart button
            const cartButton = document.createElement('button');
            cartButton.className = 'add-to-cart-btn';
            cartButton.setAttribute('data-name', name);
            cartButton.setAttribute('data-price', price);
            cartButton.innerHTML = '<i class="fas fa-plus"></i>';
            
            // Add button to menu item
            item.appendChild(cartButton);
        }
    });
}
