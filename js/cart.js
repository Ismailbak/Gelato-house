/*
 * Gelato House - Cart System
 * Handles shopping cart functionality and WhatsApp integration
 */

class Cart {
    constructor() {
        this.items = [];
        this.total = 0;
        this.whatsappNumber = '+212717034039';
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateCartDisplay();
    }

    bindEvents() {
        // Cart button
        document.getElementById('cart-btn').addEventListener('click', () => {
            this.openCart();
        });

        // Close cart
        document.getElementById('close-cart').addEventListener('click', () => {
            this.closeCart();
        });

        // Cart overlay
        document.getElementById('cart-overlay').addEventListener('click', () => {
            this.closeCart();
            this.closeCheckout();
        });

        // Add to cart buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart-btn')) {
                const btn = e.target.closest('.add-to-cart-btn');
                const name = btn.dataset.name;
                const price = parseInt(btn.dataset.price);
                this.addItem(name, price);
            }
        });

        // Checkout button
        document.getElementById('checkout-btn').addEventListener('click', () => {
            this.openCheckout();
        });

        // Close checkout
        document.getElementById('close-checkout').addEventListener('click', () => {
            this.closeCheckout();
        });

        // Order type radio buttons
        document.querySelectorAll('input[name="orderType"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                const addressGroup = document.getElementById('address-group');
                const addressInput = document.getElementById('customer-address');
                
                if (e.target.value === 'delivery') {
                    addressGroup.style.display = 'block';
                    addressInput.required = true;
                } else {
                    addressGroup.style.display = 'none';
                    addressInput.required = false;
                }
            });
        });

        // Checkout form
        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.processOrder();
        });
    }

    addItem(name, price) {
        const existingItem = this.items.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        this.updateCartDisplay();
        this.showAddToCartFeedback();
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        this.updateCartDisplay();
    }

    updateQuantity(name, quantity) {
        const item = this.items.find(item => item.name === name);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(name);
            } else {
                item.quantity = quantity;
                this.updateCartDisplay();
            }
        }
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const checkoutBtn = document.getElementById('checkout-btn');

        // Update cart count
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';

        // Update cart items
        cartItems.innerHTML = '';
        
        if (this.items.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            checkoutBtn.disabled = true;
        } else {
            this.items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'cart-item';
                itemElement.innerHTML = `
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-price">${item.price}dh each</div>
                    </div>
                    <div class="item-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.name}', ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.name}', ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <div class="item-total">${item.price * item.quantity}dh</div>
                    <button class="remove-item" onclick="cart.removeItem('${item.name}')">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(itemElement);
            });
            checkoutBtn.disabled = false;
        }

        // Update total
        this.total = this.calculateTotal();
        cartTotal.textContent = this.total + 'dh';
    }

    showAddToCartFeedback() {
        const cartBtn = document.getElementById('cart-btn');
        cartBtn.classList.add('cart-bounce');
        setTimeout(() => {
            cartBtn.classList.remove('cart-bounce');
        }, 600);
    }

    openCart() {
        document.getElementById('cart-sidebar').classList.add('active');
        document.getElementById('cart-overlay').classList.add('active');
        document.body.classList.add('cart-open');
    }

    closeCart() {
        document.getElementById('cart-sidebar').classList.remove('active');
        document.getElementById('cart-overlay').classList.remove('active');
        document.body.classList.remove('cart-open');
    }

    openCheckout() {
        if (this.items.length === 0) return;

        // Populate checkout items
        const checkoutItems = document.getElementById('checkout-items');
        const checkoutTotal = document.getElementById('checkout-total');

        checkoutItems.innerHTML = '';
        this.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'checkout-item';
            itemElement.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>${item.price * item.quantity}dh</span>
            `;
            checkoutItems.appendChild(itemElement);
        });

        checkoutTotal.textContent = this.total + 'dh';

        // Show checkout modal
        document.getElementById('checkout-modal').classList.add('active');
        document.getElementById('cart-overlay').classList.add('active');
    }

    closeCheckout() {
        document.getElementById('checkout-modal').classList.remove('active');
        if (!document.getElementById('cart-sidebar').classList.contains('active')) {
            document.getElementById('cart-overlay').classList.remove('active');
        }
    }

    processOrder() {
        const form = document.getElementById('checkout-form');
        const formData = new FormData(form);
        
        const customerName = formData.get('customerName');
        const customerPhone = formData.get('customerPhone');
        const orderType = formData.get('orderType');
        const customerAddress = formData.get('customerAddress') || '';

        // Create WhatsApp message
        let message = `🍨 *New Order - Gelato House* 🍨\n\n`;
        message += `👤 *Customer:* ${customerName}\n`;
        message += `📞 *Phone:* ${customerPhone}\n`;
        message += `📦 *Type:* ${orderType === 'delivery' ? 'Delivery' : 'Pickup (In House)'}\n`;
        
        if (orderType === 'delivery') {
            message += `📍 *Address:* ${customerAddress}\n`;
        }
        
        message += `\n🛒 *Order Details:*\n`;
        
        this.items.forEach(item => {
            message += `• ${item.name} x ${item.quantity} = ${item.price * item.quantity}dh\n`;
        });
        
        message += `\n💰 *Total: ${this.total}dh*\n\n`;
        message += `Order placed at ${new Date().toLocaleString()}`;

        // Open WhatsApp
        const whatsappUrl = `https://wa.me/${this.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        // Show success message
        this.showOrderSuccess();
        
        // Clear cart
        this.clearCart();
        this.closeCheckout();
        this.closeCart();
    }

    showOrderSuccess() {
        // Create and show success message
        const successDiv = document.createElement('div');
        successDiv.className = 'order-success';
        successDiv.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h3>Order Placed Successfully!</h3>
                <p>Your order has been sent via WhatsApp. We'll contact you shortly to confirm!</p>
            </div>
        `;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

    clearCart() {
        this.items = [];
        this.total = 0;
        this.updateCartDisplay();
        
        // Reset form
        document.getElementById('checkout-form').reset();
        document.getElementById('address-group').style.display = 'none';
    }
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.cart = new Cart();
});

// Add all menu items with + buttons (we'll need to update the HTML to add all items)
document.addEventListener('DOMContentLoaded', function() {
    // This will automatically add cart buttons to existing menu items
    // We'll update this after adding buttons to all menu items
});
