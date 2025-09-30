

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
        id: 7,
        title: "Reconditioned Samsung Galaxy S21",
        category: "electronics",
        condition: "Good",
        currentPrice: 499,
        originalPrice: 899,
        sustainabilityScore: 8.7,
        co2Saved: "12kg",
        icon: "📱"
    },
    {
        id: 8,
        title: "Pre-owned Sony Noise Cancelling Headphones",
        category: "electronics",
        condition: "Excellent",
        currentPrice: 179,
        originalPrice: 349,
        sustainabilityScore: 9.0,
        co2Saved: "6kg",
        icon: "🎧"
    },
    {
        id: 9,
        title: "Refurbished iPad Pro 11”",
        category: "electronics",
        condition: "Like New",
        currentPrice: 599,
        originalPrice: 949,
        sustainabilityScore: 9.1,
        co2Saved: "18kg",
        icon: "📟"
    },
    {
        id: 10,
        title: "Pre-owned Canon EOS M50 Camera",
        category: "electronics",
        condition: "Very Good",
        currentPrice: 459,
        originalPrice: 899,
        sustainabilityScore: 8.8,
        co2Saved: "20kg",
        icon: "📷"
    },
    {
        id: 11,
        title: "Refurbished Dell XPS 13 Laptop",
        category: "electronics",
        condition: "Like New",
        currentPrice: 899,
        originalPrice: 1399,
        sustainabilityScore: 9.2,
        co2Saved: "28kg",
        icon: "💻"
    },

    // Furniture
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
        id: 12,
        title: "Reclaimed Wood Coffee Table",
        category: "furniture",
        condition: "Restored",
        currentPrice: 189,
        originalPrice: 420,
        sustainabilityScore: 9.1,
        co2Saved: "30kg",
        icon: "🪵"
    },
    {
        id: 13,
        title: "Vintage Armchair",
        category: "furniture",
        condition: "Excellent",
        currentPrice: 249,
        originalPrice: 600,
        sustainabilityScore: 9.3,
        co2Saved: "40kg",
        icon: "🛋️"
    },
    {
        id: 14,
        title: "Refurbished Wooden Bookshelf",
        category: "furniture",
        condition: "Good",
        currentPrice: 129,
        originalPrice: 350,
        sustainabilityScore: 8.7,
        co2Saved: "22kg",
        icon: "📚"
    },
    {
        id: 15,
        title: "Eco-friendly Bamboo Bed Frame",
        category: "furniture",
        condition: "New",
        currentPrice: 399,
        originalPrice: 720,
        sustainabilityScore: 9.4,
        co2Saved: "48kg",
        icon: "🛏️"
    },
    {
        id: 16,
        title: "Recycled Plastic Outdoor Chairs (Set of 2)",
        category: "furniture",
        condition: "New",
        currentPrice: 89,
        originalPrice: 160,
        sustainabilityScore: 9.0,
        co2Saved: "10kg",
        icon: "🪑"
    },

    // Fashion
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
        id: 17,
        title: "Upcycled Denim Jeans",
        category: "fashion",
        condition: "Restored",
        currentPrice: 49,
        originalPrice: 120,
        sustainabilityScore: 9.2,
        co2Saved: "5kg",
        icon: "👖"
    },
    {
        id: 18,
        title: "Handcrafted Organic Cotton T-shirt",
        category: "fashion",
        condition: "New",
        currentPrice: 25,
        originalPrice: 45,
        sustainabilityScore: 9.5,
        co2Saved: "2kg",
        icon: "👕"
    },
    {
        id: 19,
        title: "Vintage Wool Sweater",
        category: "fashion",
        condition: "Very Good",
        currentPrice: 39,
        originalPrice: 100,
        sustainabilityScore: 8.9,
        co2Saved: "3kg",
        icon: "🧶"
    },
    {
        id: 20,
        title: "Pre-owned Designer Handbag",
        category: "fashion",
        condition: "Excellent",
        currentPrice: 199,
        originalPrice: 480,
        sustainabilityScore: 9.0,
        co2Saved: "6kg",
        icon: "👜"
    },
    {
        id: 21,
        title: "Eco-friendly Recycled Sneakers",
        category: "fashion",
        condition: "New",
        currentPrice: 75,
        originalPrice: 150,
        sustainabilityScore: 9.4,
        co2Saved: "7kg",
        icon: "👟"
    },

    // Beauty
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
        id: 22,
        title: "Refillable Natural Perfume",
        category: "beauty",
        condition: "New",
        currentPrice: 59,
        originalPrice: 99,
        sustainabilityScore: 9.3,
        co2Saved: "1kg",
        icon: "🌸"
    },
    {
        id: 23,
        title: "Vegan Lipstick Set",
        category: "beauty",
        condition: "New",
        currentPrice: 35,
        originalPrice: 55,
        sustainabilityScore: 9.4,
        co2Saved: "0.5kg",
        icon: "💄"
    },
    {
        id: 24,
        title: "Handmade Herbal Shampoo Bar",
        category: "beauty",
        condition: "New",
        currentPrice: 15,
        originalPrice: 25,
        sustainabilityScore: 9.6,
        co2Saved: "0.3kg",
        icon: "🧼"
    },
    {
        id: 25,
        title: "Organic Essential Oil Kit",
        category: "beauty",
        condition: "New",
        currentPrice: 49,
        originalPrice: 80,
        sustainabilityScore: 9.2,
        co2Saved: "1kg",
        icon: "🪔"
    },
    {
        id: 26,
        title: "Sustainable Bamboo Makeup Brushes",
        category: "beauty",
        condition: "New",
        currentPrice: 39,
        originalPrice: 70,
        sustainabilityScore: 9.5,
        co2Saved: "1kg",
        icon: "🖌️"
    },

    // Garden
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
    },
    {
        id: 27,
        title: "Recycled Watering Can",
        category: "garden",
        condition: "New",
        currentPrice: 19,
        originalPrice: 35,
        sustainabilityScore: 9.1,
        co2Saved: "1kg",
        icon: "💧"
    },
    {
        id: 28,
        title: "Solar Powered Garden Lights (Set of 4)",
        category: "garden",
        condition: "New",
        currentPrice: 49,
        originalPrice: 89,
        sustainabilityScore: 9.4,
        co2Saved: "2kg",
        icon: "🔆"
    },
    {
        id: 29,
        title: "Compost Bin from Recycled Plastic",
        category: "garden",
        condition: "New",
        currentPrice: 79,
        originalPrice: 140,
        sustainabilityScore: 9.6,
        co2Saved: "6kg",
        icon: "♻️"
    },
    {
        id: 30,
        title: "Terracotta Plant Pot Set",
        category: "garden",
        condition: "New",
        currentPrice: 25,
        originalPrice: 50,
        sustainabilityScore: 9.0,
        co2Saved: "1kg",
        icon: "🪴"
    },
    {
        id: 31,
        title: "Organic Vegetable Seed Pack",
        category: "garden",
        condition: "New",
        currentPrice: 15,
        originalPrice: 25,
        sustainabilityScore: 9.7,
        co2Saved: "0.5kg",
        icon: "🌽"
    },
    {
        id: 32,
        title: "Upcycled Wooden Birdhouse",
        category: "garden",
        condition: "Restored",
        currentPrice: 29,
        originalPrice: 55,
        sustainabilityScore: 9.2,
        co2Saved: "1kg",
        icon: "🐦"
    },
    {
        id: 33,
        title: "Solar-Powered Water Fountain",
        category: "garden",
        condition: "New",
        currentPrice: 129,
        originalPrice: 210,
        sustainabilityScore: 9.5,
        co2Saved: "3kg",
        icon: "⛲"
    },
    {
        id: 34,
        title: "Eco-friendly Garden Kneeling Pad",
        category: "garden",
        condition: "New",
        currentPrice: 19,
        originalPrice: 35,
        sustainabilityScore: 9.3,
        co2Saved: "0.7kg",
        icon: "🪻"
    },
    {
        id: 35,
        title: "Bamboo Plant Trellis",
        category: "garden",
        condition: "New",
        currentPrice: 22,
        originalPrice: 40,
        sustainabilityScore: 9.2,
        co2Saved: "1kg",
        icon: "🪴"
    }
];

// const products = [
//     {
//         id: 1,
//         title: "Refurbished iPhone 13 Pro",
//         category: "electronics",
//         condition: "Like New",
//         currentPrice: 649,
//         originalPrice: 999,
//         sustainabilityScore: 9.2,
//         co2Saved: "15kg",
//         icon: "📱"
//     },
//     {
//         id: 2,
//         title: "Upcycled Oak Dining Table",
//         category: "furniture",
//         condition: "Restored",
//         currentPrice: 299,
//         originalPrice: 750,
//         sustainabilityScore: 8.8,
//         co2Saved: "45kg",
//         icon: "🪑"
//     },
//     {
//         id: 3,
//         title: "Vintage Leather Jacket",
//         category: "fashion",
//         condition: "Excellent",
//         currentPrice: 89,
//         originalPrice: 250,
//         sustainabilityScore: 9.1,
//         co2Saved: "8kg",
//         icon: "🧥"
//     },
//     {
//         id: 4,
//         title: "Organic Skincare Set",
//         category: "beauty",
//         condition: "New",
//         currentPrice: 45,
//         originalPrice: 65,
//         sustainabilityScore: 9.5,
//         co2Saved: "2kg",
//         icon: "🌿"
//     },
//     {
//         id: 5,
//         title: "Refurbished MacBook Air M1",
//         category: "electronics",
//         condition: "Very Good",
//         currentPrice: 799,
//         originalPrice: 1199,
//         sustainabilityScore: 8.9,
//         co2Saved: "25kg",
//         icon: "💻"
//     },
//     {
//         id: 6,
//         title: "Bamboo Garden Tool Set",
//         category: "garden",
//         condition: "New",
//         currentPrice: 35,
//         originalPrice: 55,
//         sustainabilityScore: 9.3,
//         co2Saved: "3kg",
//         icon: "🌱"
//     }
// ];

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
