
// Menu data
const menuItems = [
    {
        id: 1,
        name: "Espresso",
        price: 3.50,
        description: "Rich and bold espresso shot made from premium beans",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400"
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 4.25,
        description: "Classic cappuccino with steamed milk and foam",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=400"
    },
    {
        id: 3,
        name: "Latte",
        price: 4.75,
        description: "Smooth latte with perfectly steamed milk",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400"
    },
    {
        id: 4,
        name: "Americano",
        price: 3.75,
        description: "Bold espresso diluted with hot water",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400"
    },
    {
        id: 5,
        name: "Croissant",
        price: 2.95,
        description: "Buttery, flaky croissant baked fresh daily",
        category: "pastry",
        image: "https://images.unsplash.com/photo-1555507036-ab794f0cda6c?w=400"
    },
    {
        id: 6,
        name: "Blueberry Muffin",
        price: 3.25,
        description: "Fresh blueberry muffin with a golden top",
        category: "pastry",
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400"
    },
    {
        id: 7,
        name: "Danish Pastry",
        price: 3.75,
        description: "Sweet Danish pastry with seasonal fruit",
        category: "pastry",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
    },
    {
        id: 8,
        name: "Avocado Toast",
        price: 8.50,
        description: "Fresh avocado on artisan bread with tomatoes",
        category: "food",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400"
    },
    {
        id: 9,
        name: "Breakfast Sandwich",
        price: 7.25,
        description: "Eggs, cheese, and bacon on toasted english muffin",
        category: "food",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400"
    },
    {
        id: 10,
        name: "Greek Salad",
        price: 9.75,
        description: "Fresh Greek salad with feta and olives",
        category: "food",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400"
    },
    {
        id: 11,
        name: "Mocha",
        price: 5.25,
        description: "Rich chocolate and espresso blend with whipped cream",
        category: "coffee",
        image: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=400"
    },
    {
        id: 12,
        name: "Chocolate Chip Cookie",
        price: 2.50,
        description: "Warm chocolate chip cookie baked to perfection",
        category: "pastry",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"
    }
];

// Global state
let cart = [];
let filteredItems = [...menuItems];

// DOM elements
const menuGrid = document.getElementById('menu-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const modalOverlay = document.getElementById('modal-overlay');
const checkoutForm = document.getElementById('checkout-form');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderMenuItems();
    updateCartUI();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    categoryFilter.addEventListener('change', handleCategoryFilter);
    checkoutForm.addEventListener('submit', handleCheckoutSubmit);
}

// Render menu items
function renderMenuItems() {
    menuGrid.innerHTML = '';
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>No items found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const cartItem = cart.find(cartItem => cartItem.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        
        const menuItemHTML = `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                <div class="menu-item-content">
                    <div class="menu-item-header">
                        <h3 class="menu-item-name">${item.name}</h3>
                        <span class="menu-item-price">$${item.price.toFixed(2)}</span>
                    </div>
                    <p class="menu-item-description">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="category-badge">${item.category}</span>
                        <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                            Add to Cart
                            ${quantity > 0 ? `<span class="cart-quantity">${quantity}</span>` : ''}
                        </button>
                    </div>
                </div>
            </div>
        `;
        menuGrid.innerHTML += menuItemHTML;
    });
}

// Search functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    filterItems(searchTerm, categoryFilter.value);
}

// Category filter functionality
function handleCategoryFilter(e) {
    const category = e.target.value;
    filterItems(searchInput.value.toLowerCase(), category);
}

// Filter items based on search and category
function filterItems(searchTerm, category) {
    filteredItems = menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) || 
                            item.description.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || item.category === category;
        return matchesSearch && matchesCategory;
    });
    renderMenuItems();
}

// Add item to cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1
        });
    }
    
    updateCartUI();
    renderMenuItems(); // Re-render to update quantity badges
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    renderMenuItems();
}

// Update item quantity in cart
function updateQuantity(itemId, change) {
    const item = cart.find(cartItem => cartItem.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartUI();
            renderMenuItems();
        }
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    
    // Enable/disable checkout button
    checkoutBtn.disabled = cart.length === 0;
    
    // Render cart items
    renderCartItems();
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <h3>Your cart is empty</h3>
                <p>Add some delicious items to get started!</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)} each</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        cartItems.innerHTML += cartItemHTML;
    });
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
}

// Scroll to menu section
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Show checkout modal
function checkout() {
    if (cart.length === 0) return;
    
    toggleCart(); // Close cart sidebar
    checkoutModal.classList.add('open');
    modalOverlay.classList.add('open');
}

// Close checkout modal
function closeCheckout() {
    checkoutModal.classList.remove('open');
    modalOverlay.classList.remove('open');
}

// Handle checkout form submission
function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(checkoutForm);
    const orderData = {
        customer: {
            name: document.getElementById('customer-name').value,
            email: document.getElementById('customer-email').value,
            phone: document.getElementById('customer-phone').value
        },
        orderType: document.getElementById('order-type').value,
        specialInstructions: document.getElementById('special-instructions').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        timestamp: new Date().toISOString()
    };
    
    // Simulate order processing
    processOrder(orderData);
}

// Process order (simulate API call)
function processOrder(orderData) {
    // Show loading state
    const submitBtn = checkoutForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate API delay
    setTimeout(() => {
        // Order success
        alert(`Order placed successfully! 
        
Order Total: $${orderData.total.toFixed(2)}
Order Type: ${orderData.orderType}
        
Thank you, ${orderData.customer.name}! 
We'll contact you at ${orderData.customer.phone} when your order is ready.`);
        
        // Reset cart and close modal
        cart = [];
        updateCartUI();
        renderMenuItems();
        closeCheckout();
        checkoutForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
    }, 2000);
}

// Handle escape key to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
        if (checkoutModal.classList.contains('open')) {
            closeCheckout();
        }
    }
});

// Prevent body scroll when cart is open
function preventBodyScroll(prevent) {
    if (prevent) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Update cart toggle to prevent body scroll
const originalToggleCart = toggleCart;
toggleCart = function() {
    originalToggleCart();
    preventBodyScroll(cartSidebar.classList.contains('open'));
};
