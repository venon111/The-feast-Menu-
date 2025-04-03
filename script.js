// Load menu items from localStorage if available, otherwise use default
let menuItems = JSON.parse(localStorage.getItem('menuItemsWithOrderCounts')) || [
    // Main Courses - Mozambican Specialties
    { id: 1, name: 'Frango à Zambeziana 🍗', category: 'main', description: 'Grilled chicken in a spicy coconut sauce, a Mozambican classic.', price: 350, isBestseller: true, prepTime: 25, orderCount: 0 },
    { id: 2, name: 'Galinha à Cafreal 🌿', category: 'main', description: 'Spicy peri-peri chicken with fresh coriander and garlic.', price: 320, isBestseller: true, prepTime: 30, orderCount: 0 },
    { id: 3, name: 'Caril de Camarão 🍤', category: 'main', description: 'Prawn curry with coconut milk and spices.', price: 450, isBestseller: true, prepTime: 35, orderCount: 0 },
    { id: 4, name: 'Matapa 🍃', category: 'main', description: 'Cassava leaves cooked with peanut sauce, garlic and coconut milk.', price: 280, prepTime: 40, orderCount: 0 },
    { id: 5, name: 'Feijão com Arroz 🍛', category: 'main', description: 'Traditional beans and rice with coconut, served with fish or meat.', price: 250, prepTime: 20, orderCount: 0 },
    { id: 6, name: 'Xima com Peixe 🐟', category: 'main', description: 'Maize porridge with grilled fish and vegetables.', price: 300, prepTime: 30, orderCount: 0 },
    { id: 7, name: 'Frango com Amendoim 🥜', category: 'main', description: 'Chicken in peanut sauce with coconut milk.', price: 320, prepTime: 25, orderCount: 0 },
    { id: 8, name: 'Caril de Caranguejo 🦀', category: 'main', description: 'Crab curry with coconut and Mozambican spices.', price: 500, prepTime: 45, orderCount: 0 },
    { id: 9, name: 'Bife à Portuguesa 🥩', category: 'main', description: 'Portuguese-style steak with fried egg and chips.', price: 380, prepTime: 20, orderCount: 0 },
    { id: 10, name: 'Rissois de Camarão 🥟', category: 'main', description: 'Shrimp-filled pastry turnovers, a popular snack.', price: 200, prepTime: 15, orderCount: 0 },
    { id: 11, name: 'Peixe Grelhado 🐠', category: 'main', description: 'Grilled fresh fish with lemon and garlic.', price: 400, prepTime: 25, orderCount: 0 },
    { id: 12, name: 'Piri-Piri Prawns 🍤', category: 'main', description: 'Grilled prawns with fiery piri-piri sauce.', price: 420, prepTime: 30, orderCount: 0 },
    { id: 13, name: 'Prego Roll 🥪', category: 'main', description: 'Steak sandwich with piri-piri sauce in a fresh roll.', price: 220, prepTime: 15, orderCount: 0 },
    { id: 14, name: 'Espetada de Peixe 🐟', category: 'main', description: 'Fish kebabs with peppers and onions.', price: 350, prepTime: 25, orderCount: 0 },
    { id: 15, name: 'Camarão à Moçambicana 🦐', category: 'main', description: 'Shrimp cooked in garlic, lemon and piri-piri sauce.', price: 400, prepTime: 30, orderCount: 0 },

    // International Dishes
    { id: 16, name: 'Beef Burger 🍔', category: 'main', description: 'Juicy beef patty with lettuce, tomato, and cheese.', price: 200, prepTime: 15, orderCount: 0 },
    { id: 17, name: 'Cheese Burger 🍔', category: 'main', description: 'Cheddar cheese, beef patty, and pickles.', price: 250, prepTime: 15, orderCount: 0 },
    { id: 18, name: 'Chicken Burger 🍗', category: 'main', description: 'Grilled chicken patty with lettuce and mayo.', price: 220, prepTime: 15, orderCount: 0 },
    { id: 19, name: 'Veggie Burger 🥗', category: 'main', description: 'Veggie patty with tomatoes, lettuce, and vegan mayo.', price: 200, prepTime: 15, orderCount: 0 },

    // Pizzas
    { id: 20, name: 'Pepperoni Pizza 🍕', category: 'pizza', description: 'Classic pepperoni pizza with mozzarella.', price: 350, prepTime: 20, orderCount: 0 },
    { id: 21, name: 'Margherita Pizza 🍕', category: 'pizza', description: 'Tomato, mozzarella, and basil pizza.', price: 300, prepTime: 20, orderCount: 0 },
    { id: 22, name: 'BBQ Chicken Pizza 🍕', category: 'pizza', description: 'BBQ sauce, chicken, and red onions.', price: 400, prepTime: 25, orderCount: 0 },
    { id: 23, name: 'Veggie Supreme Pizza 🍕', category: 'pizza', description: 'Bell peppers, olives, onions, and mushrooms.', price: 350, prepTime: 25, orderCount: 0 },
    { id: 24, name: 'Pizza Moçambicana 🌶️', category: 'pizza', description: 'Pizza with piri-piri chicken and local spices.', price: 420, prepTime: 25, orderCount: 0 },

    // Drinks
    { id: 25, name: '2M 🍺', category: 'drinks', description: 'Mozambican beer.', price: 120, prepTime: 2, orderCount: 0 },
    { id: 26, name: 'Laurentina 🍺', category: 'drinks', description: 'Mozambican premium beer.', price: 150, prepTime: 2, orderCount: 0 },
    { id: 27, name: 'Manica 🍺', category: 'drinks', description: 'Another popular Mozambican beer.', price: 130, prepTime: 2, orderCount: 0 },
    { id: 28, name: 'Heineken 🍺', category: 'drinks', description: 'Popular Dutch beer.', price: 150, prepTime: 2, orderCount: 0 },
    { id: 29, name: 'Corona 🍺', category: 'drinks', description: 'Mexican pale lager.', price: 160, prepTime: 2, orderCount: 0 },
    { id: 30, name: 'Stella Artois 🍺', category: 'drinks', description: 'Belgian pilsner beer.', price: 170, prepTime: 2, orderCount: 0 },
    { id: 31, name: 'Água Mineral 💧', category: 'drinks', description: 'Cold refreshing water.', price: 50, prepTime: 1, orderCount: 0 },
    { id: 32, name: 'Sumo de Caju 🥤', category: 'drinks', description: 'Fresh cashew fruit juice.', price: 90, prepTime: 5, orderCount: 0 },
    { id: 33, name: 'Sumo de Manga 🥤', category: 'drinks', description: 'Fresh mango juice.', price: 90, prepTime: 5, orderCount: 0 },
    { id: 34, name: 'Coca-Cola 🥤', category: 'drinks', description: 'Classic cola drink.', price: 80, prepTime: 2, orderCount: 0 },
    { id: 35, name: 'Fanta Laranja 🥤', category: 'drinks', description: 'Orange soda.', price: 80, prepTime: 2, orderCount: 0 },
    { id: 36, name: 'Café ☕', category: 'drinks', description: 'Strong Mozambican coffee.', price: 70, prepTime: 5, orderCount: 0 },

    // Desserts
    { id: 37, name: 'Bolo Polana 🍰', category: 'desserts', description: 'Traditional Mozambican cashew nut cake.', price: 150, prepTime: 10, orderCount: 0 },
    { id: 38, name: 'Gelado de Coco 🍨', category: 'desserts', description: 'Homemade coconut ice cream.', price: 120, prepTime: 5, orderCount: 0 },
    { id: 39, name: 'Doce de Manga 🥭', category: 'desserts', description: 'Sweet mango preserve.', price: 100, prepTime: 5, orderCount: 0 },
    { id: 40, name: 'Pudim de Coco 🍮', category: 'desserts', description: 'Coconut flan.', price: 130, prepTime: 10, orderCount: 0 },
    { id: 41, name: 'Rabanada 🍞', category: 'desserts', description: 'Mozambican-style French toast.', price: 110, prepTime: 10, orderCount: 0 },

    // Sides
    { id: 42, name: 'Batata Frita 🍟', category: 'side', description: 'Crispy fries with piri-piri sauce.', price: 70, prepTime: 10, orderCount: 0 },
    { id: 43, name: 'Salada de Tomate 🥗', category: 'side', description: 'Fresh tomato and onion salad.', price: 60, prepTime: 5, orderCount: 0 },
    { id: 44, name: 'Pãozinho 🥖', category: 'side', description: 'Fresh Portuguese-style bread rolls.', price: 30, prepTime: 2, orderCount: 0 },
    { id: 45, name: 'Arroz de Coco 🍚', category: 'side', description: 'Coconut rice.', price: 80, prepTime: 15, orderCount: 0 },
    { id: 46, name: 'Mandioca Frita 🍠', category: 'side', description: 'Fried cassava.', price: 70, prepTime: 15, orderCount: 0 }
];

// Cart functionality
let cart = [];
let isCartVisible = false;
let orderType = 'dine-in';

// Save menu items to localStorage
function saveMenuItems() {
    localStorage.setItem('menuItemsWithOrderCounts', JSON.stringify(menuItems));
}

// Initialize the page
window.onload = function() {
    displayMenu(menuItems);
    updateCart();
    updateCartCount();

    // Set up cart button click event
    document.getElementById('cart-button').addEventListener('click', function() {
        toggleCart();
    });

    // Set up reservation form submission
    document.getElementById('reservation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        makeReservation();
    });
};

// Display the menu items in the DOM with animations
function displayMenu(items) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    items.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.style.animationDelay = `${index * 0.1}s`;

        menuItem.innerHTML = `
            <div class="menu-item-content">
                <h3>
                    ${item.name}
                    ${item.isBestseller ? '<span class="badge">Bestseller</span>' : ''}
                </h3>
                <p>${item.description}</p>
                <div class="price-and-time">
                    <span class="price">${item.price} MZN</span>
                    <span class="prep-time">⏱️ ${item.prepTime} min</span>
                </div>
                <div class="order-count">
                    Ordered ${item.orderCount || 0} times
                </div>
                <div class="menu-item-actions">
                    <button onclick="addToCart(${item.id}, event)">Add to Cart</button>
                </div>
            </div>
        `;

        menu.appendChild(menuItem);
    });
}

// Filter the menu based on category
function filterMenu(category) {
    // Update active tab
    document.querySelectorAll('.menu-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    if (category === 'all') {
        displayMenu(menuItems);
    } else {
        const filteredItems = menuItems.filter(item => item.category === category);
        displayMenu(filteredItems);
    }
}

// Search menu items
function searchMenu(query) {
    if (query.length < 2) {
        // Show all items when search query is too short
        const activeTab = document.querySelector('.menu-tab.active');
        if (activeTab && activeTab.textContent !== 'All Menu') {
            filterMenu(activeTab.textContent.replace(' Menu', '').toLowerCase());
        } else {
            displayMenu(menuItems);
        }
        return;
    }

    const filtered = menuItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    displayMenu(filtered);
}

// Cart functionality
function addToCart(itemId, event) {
    if (event) event.stopPropagation();
    
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    // Increment the order count
    item.orderCount = (item.orderCount || 0) + 1;
    saveMenuItems();

    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }
    
    updateCart();
    animateCartButton();
    showAddedNotification(item.name);
    updateCartCount();
    displayMenu(menuItems); // Refresh the menu to show updated order counts
}

function removeFromCart(itemId, event) {
    if (event) event.stopPropagation();
    
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    
    updateCart();
    updateCartCount();
}

function removeItemCompletely(itemId, event) {
    if (event) event.stopPropagation();
    
    cart = cart.filter(item => item.id !== itemId);
    
    updateCart();
    updateCartCount();
}

function calculateDeliveryTime() {
    if (cart.length === 0) return "--";
    
    // Get the longest preparation time from cart items
    const longestPrepTime = Math.max(...cart.map(item => {
        const menuItem = menuItems.find(mi => mi.id === item.id);
        return menuItem ? menuItem.prepTime : 0;
    }));
    
    // Add 15 minutes for delivery (adjust as needed)
    const totalTime = longestPrepTime + 15;
    return `${totalTime} minutes`;
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    const deliveryTimeElement = document.getElementById('delivery-time');
    const pointsEarnedElement = document.getElementById('points-earned');
    
    cartList.innerHTML = '';
    
    let totalPrice = 0;
    
    if (cart.length === 0) {
        cartList.innerHTML = '<li style="text-align:center;color:#888;">Your cart is empty</li>';
    } else {
        cart.forEach(item => {
            const menuItem = menuItems.find(mi => mi.id === item.id);
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name} (${item.quantity})</span>
                <span>${item.price * item.quantity} MZN</span>
                <div class="cart-item-controls">
                    <button onclick="removeFromCart(${item.id}, event)">−</button>
                    <button onclick="addToCart(${item.id}, event)">+</button>
                    <button onclick="removeItemCompletely(${item.id}, event)" class="remove-item">×</button>
                </div>
                ${menuItem ? `<div class="item-prep-time">Prep time: ${menuItem.prepTime} min</div>` : ''}
            `;
            cartList.appendChild(listItem);
            
            totalPrice += item.price * item.quantity;
        });
    }
    
    totalPriceElement.textContent = `Total: ${totalPrice} MZN`;
    deliveryTimeElement.textContent = `Estimated Delivery Time: ${calculateDeliveryTime()}`;
    const points = calculatePoints(totalPrice);
    pointsEarnedElement.textContent = `Earn ${points} points`;
}

function calculatePoints(total) {
    return Math.floor(total / 100) * 10;
}

function clearCart() {
    cart = [];
    updateCart();
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function animateCartButton() {
    const cartButton = document.getElementById('cart-button');
    cartButton.classList.add('pulse');
    setTimeout(() => {
        cartButton.classList.remove('pulse');
    }, 500);
}

// Toggle cart visibility
function toggleCart() {
    const cartElement = document.getElementById('cart');
    isCartVisible = !cartElement.classList.contains('active');
    
    if (isCartVisible) {
        cartElement.classList.add('active');
    } else {
        cartElement.classList.remove('active');
    }
}

// Checkout function with receipt
function checkout() {
    if (cart.length === 0) {
        showAlert('Your cart is empty!', 'error');
        return;
    }
    
    // Generate random order number
    const orderNumber = '#' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    const currentDate = new Date();
    const orderDate = currentDate.toLocaleDateString();
    const orderTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Calculate total
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const pointsEarned = calculatePoints(totalPrice);
    const deliveryTime = calculateDeliveryTime();
    
    // Create receipt HTML
    const receiptHTML = `
        <div class="receipt-header">
            <h2>The Royal Feast</h2>
            <p>Authentic Mozambican Cuisine</p>
            <div class="receipt-number">Order ${orderNumber}</div>
            <p>${orderDate} at ${orderTime}</p>
            <p>Order Type: ${orderType === 'dine-in' ? 'Dine-In' : 'Delivery'}</p>
            ${orderType === 'delivery' ? `<p>Estimated Delivery Time: ${deliveryTime}</p>` : ''}
        </div>
        
        <div class="receipt-details">
            <h3>Order Summary</h3>
            ${cart.map(item => `
                <div class="receipt-item">
                    <span>${item.name} × ${item.quantity}</span>
                    <span>${item.price * item.quantity} MZN</span>
                </div>
            `).join('')}
        </div>
        
        <div class="receipt-total">
            <span>Total:</span>
            <span>${totalPrice} MZN</span>
        </div>
        
        <div class="receipt-footer">
            <p>You earned ${pointsEarned} loyalty points!</p>
            <p>Thank you for your order!</p>
            <p>🍽️ Open: 8:00 AM - 4:00 PM</p>
        </div>
        
        <div class="receipt-actions">
            <button onclick="closeReceipt()">Done</button>
        </div>
    `;
    
    // Create and show receipt
    const receiptModal = document.createElement('div');
    receiptModal.className = 'receipt-modal';
    receiptModal.innerHTML = `
        <div class="receipt-container">
            ${receiptHTML}
        </div>
    `;
    document.body.appendChild(receiptModal);
    
    // Show the receipt
    setTimeout(() => {
        receiptModal.classList.add('show');
    }, 10);
    
    // Clear the cart after checkout
    clearCart();
    
    // Close the cart
    isCartVisible = true;
    toggleCart();
}

function closeReceipt() {
    const receiptModal = document.querySelector('.receipt-modal');
    if (receiptModal) {
        receiptModal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(receiptModal);
        }, 300);
    }
}

// Order type selection
function setOrderType(type) {
    orderType = type;
    
    // Update UI
    document.querySelectorAll('.order-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Reservation functionality
function makeReservation() {
    const name = document.getElementById('reservation-name').value;
    const phone = document.getElementById('reservation-phone').value;
    const date = document.getElementById('reservation-date').value;
    const time = document.getElementById('reservation-time').value;
    const guests = document.getElementById('reservation-guests').value;
    
    // In a real app, you would send this data to a server
    const reservationData = {
        name,
        phone,
        date,
        time,
        guests
    };
    
    // Show confirmation
    showAlert(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guests.`, 'success');
    closeModal('reservation-modal');
    
    // Reset form
    document.getElementById('reservation-form').reset();
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Notification functions
function showAddedNotification(itemName) {
    const notification = document.createElement('div');
    notification.className = 'add-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i> Added ${itemName}
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

function showAlert(message, type) {
    const alertBox = document.createElement('div');
    alertBox.className = `alert-box ${type}`;
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
        alertBox.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        alertBox.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(alertBox);
        }, 300);
    }, 3000);
}

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartElement = document.getElementById('cart');
    const cartButton = document.getElementById('cart-button');
    
    if (isCartVisible && 
        !cartElement.contains(event.target) && 
        !cartButton.contains(event.target)) {
        toggleCart();
    }
});