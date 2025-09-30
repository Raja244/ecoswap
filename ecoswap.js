

const products = [
    {
        id: 1,
        title: "Refurbished iPhone 13 Pro",
        category: "electronics",
        condition: "Like New",
        currentPrice: 649,
        originalPrice: 999,
        sustainabilityScore: 9.2,
        co2Saved: "15kg",
        icon: "📱"
    },
    {
        id: 2,
        title: "Upcycled Oak Dining Table",
        category: "furniture",
        condition: "Restored",
        currentPrice: 299,
        originalPrice: 750,
        sustainabilityScore: 8.8,
        co2Saved: "45kg",
        icon: "🪑"
    },
    {
        id: 3,
        title: "Vintage Leather Jacket",
        category: "fashion",
        condition: "Excellent",
        currentPrice: 89,
        originalPrice: 250,
        sustainabilityScore: 9.1,
        co2Saved: "8kg",
        icon: "🧥"
    },
    {
        id: 4,
        title: "Organic Skincare Set",
        category: "beauty",
        condition: "New",
        currentPrice: 45,
        originalPrice: 65,
        sustainabilityScore: 9.5,
        co2Saved: "2kg",
        icon: "🌿"
    },
    {
        id: 5,
        title: "Refurbished MacBook Air M1",
        category: "electronics",
        condition: "Very Good",
        currentPrice: 799,
        originalPrice: 1199,
        sustainabilityScore: 8.9,
        co2Saved: "25kg",
        icon: "💻"
    },
    {
        id: 6,
        title: "Bamboo Garden Tool Set",
        category: "garden",
        condition: "New",
        currentPrice: 35,
        originalPrice: 55,
        sustainabilityScore: 9.3,
        co2Saved: "3kg",
        icon: "🌱"
    }
];

let cart = [];
let currentFilter = 'all';

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
    updateCartCount();
    animateStats();
});

// Load and display products
function loadProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card fade-in" data-category="${product.category}">
            <div class="product-image">
                ${product.icon}
                <div class="sustainability-badge">Score: ${product.sustainabilityScore}</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-condition">${product.condition} Condition</div>
                <div class="price-row">
                    <span class="current-price">$${product.currentPrice}</span>
                    <span class="original-price">$${product.originalPrice}</span>
                </div>
                <div class="eco-impact">
                    <span>🌱 ${product.co2Saved} CO₂ saved</span>
                    <span>♻️ ${Math.round((1 - product.currentPrice / product.originalPrice) * 100)}% waste reduced</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Filter products by category
function filterByCategory(category) {
    currentFilter = category;
    loadProducts(category);

    // Update category cards visual feedback
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.transform = 'scale(1)';
        card.style.borderColor = 'transparent';
    });

    // Apply active style
    if (event && event.currentTarget) {
        event.currentTarget.style.transform = 'scale(1.05)';
        event.currentTarget.style.borderColor = 'var(--primary-green)';
    }

    showMessage(`Showing ${category} products`);
}

// Search products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('productsGrid');

    if (!searchTerm) {
        loadProducts(currentFilter);
        return;
    }

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.condition.toLowerCase().includes(searchTerm)
    );

    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card fade-in" data-category="${product.category}">
            <div class="product-image">
                ${product.icon}
                <div class="sustainability-badge">Score: ${product.sustainabilityScore}</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-condition">${product.condition} Condition</div>
                <div class="price-row">
                    <span class="current-price">$${product.currentPrice}</span>
                    <span class="original-price">$${product.originalPrice}</span>
                </div>
                <div class="eco-impact">
                    <span>🌱 ${product.co2Saved} CO₂ saved</span>
                    <span>♻️ ${Math.round((1 - product.currentPrice / product.originalPrice) * 100)}% waste reduced</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!cart.includes(product)) {
        cart.push(product);
        updateCartCount();
        showMessage(`${product.title} added to cart`);
    } else {
        showMessage(`${product.title} is already in the cart`, "warning");
    }
}

// Update cart count
function updateCartCount() {
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = cart.length;
    }
}

// Animate eco stats or counters on page load
function animateStats() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 20;
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// Show message to user
function showMessage(message, type = "success") {
    const msgBox = document.getElementById('messageBox');
    if (!msgBox) return;

    msgBox.textContent = message;
    msgBox.className = `message-box ${type}`;
    msgBox.style.display = 'block';

    setTimeout(() => {
        msgBox.style.display = 'none';
    }, 3000);
}
