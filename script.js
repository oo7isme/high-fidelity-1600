// Global state management
const appState = {
    currentPage: 'home',
    activeFilters: new Set(),
    products: [],
    filteredProducts: [],
    basket: []
};

// Load products from JSON file
async function loadProducts() {
    try {
        const response = await fetch('updated_products_images.json');
        const data = await response.json();
        
        // Transform JSON data to match our application structure
        appState.products = data.products.map(product => ({
            id: `product-${product.id}`,
            title: product.title,
            weight: `${Math.floor(Math.random() * 5) + 0.5} tonn`, // Generate random weight
            location: product.region,
            material: product.material,
            category: product.category,
            price: `${product.price}kr/${product.unit}`,
            thickness: `${Math.floor(Math.random() * 20) + 5}mm`, // Generate random thickness
            length: `${Math.floor(Math.random() * 1000) + 500} mm`, // Generate random length
            width: `${Math.floor(Math.random() * 300) + 100} mm`, // Generate random width
            availability: `${Math.floor(Math.random() * 200) + 50} ${product.unit} tilgjengelig`,
            description: `Gjenbrukt ${product.category.toLowerCase()} fra ombruksanlegg i ${product.region}. ${product.condition}. Materialet er perfekt for bærekraftige byggeprosjekter.`,
            origin: `Fra ${product.supplier} - ${product.condition}`,
            image: product.image,
            condition: product.condition,
            supplier: product.supplier
        }));
        
        appState.filteredProducts = [...appState.products];
        console.log('Products loaded:', appState.products.length);
    } catch (error) {
        console.error('Error loading products:', error);
        // Fallback to empty array if JSON loading fails
        appState.products = [];
        appState.filteredProducts = [];
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', async function() {
    await loadProducts();
    initializeApp();
    setupEventListeners();
    updateFilteredProducts();
});

// Initialize application state
function initializeApp() {
    showPage('home');
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.addEventListener('input', handleSearch);
    });

    // Filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });

    // Explore list items (homepage)
    const exploreItems = document.querySelectorAll('.explore-list li');
    exploreItems.forEach(item => {
        item.addEventListener('click', handleExploreClick);
    });

    // Order button
    const orderBtn = document.querySelector('.order-btn');
    if (orderBtn) {
        orderBtn.addEventListener('click', handleOrder);
    }

    // Navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (this.onclick) return; // Skip if already has onclick handler
            const text = this.textContent.trim();
            if (text === 'Meldinger') {
                showPage('home');
            }
        });
    });
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.classList.add('fade-in');
        appState.currentPage = pageId;
        
        // Update URL without page reload
        history.pushState({page: pageId}, '', `#${pageId}`);
        
        // Handle page-specific updates
        if (pageId === 'basket') {
            renderBasketPage();
        }
    }

    // Update navigation state
    updateNavigationState(pageId);
}

// Update navigation visual state
function updateNavigationState(pageId) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Highlight active navigation
    if (pageId === 'home') {
        const homeBtn = document.querySelector('.nav-btn i.fa-home').parentElement;
        homeBtn.classList.add('active');
    }
}

// Handle search input
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    if (appState.currentPage === 'products') {
        filterProducts();
    } else if (appState.currentPage === 'home') {
        // If searching from homepage, go to products page
        if (searchTerm.length > 2) {
            showPage('products');
            // Set the search term in products page
            const productsSearchInput = document.querySelector('#products-page .search-input');
            if (productsSearchInput) {
                productsSearchInput.value = searchTerm;
            }
        }
    }
}

// Handle filter changes
function handleFilterChange(event) {
    const filterValue = event.target.value || event.target.nextSibling.textContent.trim();
    
    if (event.target.checked) {
        appState.activeFilters.add(filterValue);
    } else {
        appState.activeFilters.delete(filterValue);
    }
    
    updateActiveFilterTags();
    filterProducts();
}

// Update active filter tags display
function updateActiveFilterTags() {
    const activeFiltersContainer = document.querySelector('.active-filters');
    if (!activeFiltersContainer) return;

    activeFiltersContainer.innerHTML = '';
    
    appState.activeFilters.forEach(filter => {
        const tag = document.createElement('span');
        tag.className = 'filter-tag';
        tag.innerHTML = `${filter} <i class="fas fa-times" onclick="removeFilter(this)"></i>`;
        activeFiltersContainer.appendChild(tag);
    });
}

// Remove filter
function removeFilter(element) {
    const filterText = element.parentElement.textContent.trim().replace('×', '').trim();
    appState.activeFilters.delete(filterText);
    
    // Uncheck corresponding checkbox
    const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const label = checkbox.nextSibling;
        if (label && label.textContent.trim() === filterText) {
            checkbox.checked = false;
        }
    });
    
    updateActiveFilterTags();
    filterProducts();
}

// Filter products based on active filters and search
function filterProducts() {
    const searchInput = document.querySelector('#products-page .search-input');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    appState.filteredProducts = appState.products.filter(product => {
        // Search filter
        const matchesSearch = !searchTerm || 
            product.title.toLowerCase().includes(searchTerm) ||
            product.location.toLowerCase().includes(searchTerm) ||
            product.material.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);
        
        // Active filters
        const matchesFilters = appState.activeFilters.size === 0 || 
            Array.from(appState.activeFilters).some(filter => 
                product.material.toLowerCase().includes(filter.toLowerCase()) ||
                product.category.toLowerCase().includes(filter.toLowerCase()) ||
                product.location.toLowerCase().includes(filter.toLowerCase())
            );
        
        return matchesSearch && matchesFilters;
    });
    
    renderProductGrid();
}

// Render product grid
function renderProductGrid() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';
    
    appState.filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });

    // Add animation to new cards
    const newCards = productsGrid.querySelectorAll('.product-card');
    newCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('slide-in');
        }, index * 100);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showProduct(product.id);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" 
                 alt="${product.title}" 
                 class="product-img"
                 loading="lazy">
            <div class="availability-badge">${product.availability}</div>
        </div>
        <div class="product-info">
            <h4>${product.title}</h4>
            <p class="location-info">Fra ${product.location}</p>
            <p class="weight-info">Vekt ${product.weight}</p>
            <p class="reuse-info">Gjenbrukt materiale</p>
        </div>
    `;
    
    return card;
}

// Show product detail page
function showProduct(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;

    // Update product detail page content
    updateProductDetailPage(product);
    showPage('product');
}

// Update product detail page with product data
function updateProductDetailPage(product) {
    const titleElement = document.querySelector('.product-title');
    if (titleElement) {
        titleElement.textContent = product.title;
    }

    // Update product image
    const productImage = document.querySelector('.product-detail-img');
    if (productImage && product.image) {
        productImage.src = product.image;
        productImage.alt = `${product.title} - detaljert bilde`;
    }

    const specsContainer = document.querySelector('.specifications');
    if (specsContainer) {
        specsContainer.innerHTML = `
            <div class="spec-item">
                <span class="spec-label">Tykkelse:</span>
                <span class="spec-value">${product.thickness}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Vekt:</span>
                <span class="spec-value">${product.weight}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Lengde:</span>
                <span class="spec-value">${product.length}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Bredde:</span>
                <span class="spec-value">${product.width}</span>
            </div>
            <div class="spec-item">
                <span class="spec-label">Pris:</span>
                <span class="spec-value">${product.price}</span>
            </div>
        `;
    }

    const descriptionElement = document.querySelector('.product-description p');
    if (descriptionElement) {
        descriptionElement.textContent = product.description;
    }

    // Add material origin/history if available
    if (product.origin) {
        const originContainer = document.querySelector('.product-description');
        if (originContainer && !document.querySelector('.material-origin')) {
            const originDiv = document.createElement('div');
            originDiv.className = 'material-origin';
            originDiv.innerHTML = `
                <div class="origin-header">
                    <i class="fas fa-history"></i>
                    <span>Materialets historie</span>
                </div>
                <p>${product.origin}</p>
            `;
            originContainer.appendChild(originDiv);
        }
    }
}

// Handle explore item clicks (homepage)
function handleExploreClick(event) {
    const itemText = event.target.textContent.trim();
    
    // Add to active filters and go to products page
    appState.activeFilters.add(itemText);
    showPage('products');
    
    // Check corresponding filter checkbox
    const checkboxes = document.querySelectorAll('.filters-sidebar input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const label = checkbox.nextSibling;
        if (label && label.textContent.trim() === itemText) {
            checkbox.checked = true;
        }
    });
    
    updateActiveFilterTags();
    filterProducts();
}

// Handle order button click
function handleOrder() {
    // Simulate order process
    const orderBtn = document.querySelector('.order-btn');
    const originalText = orderBtn.innerHTML;
    
    orderBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Behandler...';
    orderBtn.disabled = true;
    
    setTimeout(() => {
        orderBtn.innerHTML = '<i class="fas fa-check"></i> Bestilt!';
        orderBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(() => {
            orderBtn.innerHTML = originalText;
            orderBtn.disabled = false;
            orderBtn.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
        }, 2000);
    }, 1500);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        showPage(event.state.page);
    }
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add loading states to interactive elements
function addLoadingState(element) {
    element.classList.add('loading');
    element.style.pointerEvents = 'none';
}

function removeLoadingState(element) {
    element.classList.remove('loading');
    element.style.pointerEvents = 'auto';
}

// Utility function to debounce search
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

// Apply debouncing to search
const debouncedSearch = debounce(handleSearch, 300);

// Update search event listeners to use debounced version
document.addEventListener('DOMContentLoaded', function() {
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
        input.removeEventListener('input', handleSearch);
        input.addEventListener('input', debouncedSearch);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(event) {
    // ESC key to go back to home
    if (event.key === 'Escape' && appState.currentPage !== 'home') {
        showPage('home');
    }
    
    // Enter key on search inputs
    if (event.key === 'Enter' && event.target.classList.contains('search-input')) {
        if (appState.currentPage === 'home') {
            showPage('products');
        }
    }
});

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0 && appState.currentPage === 'products') {
            // Swipe right - go to home
            showPage('home');
        } else if (swipeDistance < 0 && appState.currentPage === 'home') {
            // Swipe left - go to products
            showPage('products');
        }
    }
}

// Initialize filtered products on page load
function updateFilteredProducts() {
    appState.filteredProducts = [...appState.products];
    if (appState.currentPage === 'products') {
        renderProductGrid();
    }
}

// Basket functionality
function addToBasket() {
    // Get current product from product detail page
    const productTitle = document.querySelector('.product-title');
    const productImage = document.querySelector('.product-detail-img');
    const productPrice = document.querySelector('.spec-value');
    
    if (!productTitle || !productImage || !productPrice) {
        console.error('Product details not found');
        return;
    }
    
    // Create basket item
    const basketItem = {
        id: Date.now(), // Simple unique ID
        title: productTitle.textContent,
        image: productImage.src,
        price: productPrice.textContent,
        weight: '3 tonn', // Default weight
        quantity: 1
    };
    
    // Check if item already exists in basket
    const existingItem = appState.basket.find(item => item.title === basketItem.title);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        appState.basket.push(basketItem);
    }
    
    updateBasketUI();
    showBasketNotification();
}

function removeFromBasket(itemId) {
    appState.basket = appState.basket.filter(item => item.id !== itemId);
    updateBasketUI();
}

function updateItemQuantity(itemId, newQuantity) {
    const item = appState.basket.find(item => item.id === itemId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromBasket(itemId);
        } else {
            item.quantity = newQuantity;
            updateBasketUI();
        }
    }
}

function updateBasketUI() {
    updateBasketCount();
    updateMobileBasketCount();
    
    if (appState.currentPage === 'basket') {
        renderBasketPage();
    }
}

function updateBasketCount() {
    const basketCount = document.getElementById('basket-count');
    if (basketCount) {
        const totalItems = appState.basket.reduce((sum, item) => sum + item.quantity, 0);
        basketCount.textContent = totalItems;
        
        if (totalItems > 0) {
            basketCount.classList.add('show');
        } else {
            basketCount.classList.remove('show');
        }
    }
}

function renderBasketPage() {
    const basketItemsList = document.getElementById('basket-items-list');
    const emptyBasket = document.getElementById('empty-basket');
    const itemCount = document.getElementById('item-count');
    const totalWeight = document.getElementById('total-weight');
    const totalPrice = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (!basketItemsList || !emptyBasket) return;
    
    if (appState.basket.length === 0) {
        basketItemsList.innerHTML = '';
        emptyBasket.style.display = 'block';
        itemCount.textContent = '0';
        totalWeight.textContent = '0 tonn';
        totalPrice.textContent = '0 kr';
        checkoutBtn.disabled = true;
        return;
    }
    
    emptyBasket.style.display = 'none';
    
    // Render basket items
    basketItemsList.innerHTML = appState.basket.map(item => `
        <div class="basket-item">
            <img src="${item.image}" alt="${item.title}" class="basket-item-image">
            <div class="basket-item-info">
                <h4 class="basket-item-title">${item.title}</h4>
                <p class="basket-item-details">Vekt: ${item.weight}</p>
                <p class="basket-item-price">${item.price}</p>
            </div>
            <div class="basket-item-actions">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" 
                           onchange="updateItemQuantity(${item.id}, parseInt(this.value))">
                    <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromBasket(${item.id})">
                    <i class="fas fa-trash"></i> Fjern
                </button>
            </div>
        </div>
    `).join('');
    
    // Update summary
    const totalItems = appState.basket.reduce((sum, item) => sum + item.quantity, 0);
    const totalWeightValue = appState.basket.reduce((sum, item) => {
        const weight = parseFloat(item.weight);
        return sum + (weight * item.quantity);
    }, 0);
    
    // Calculate total price (simplified - would need proper price parsing in real app)
    const totalPriceValue = totalItems * 500; // Rough estimate
    
    itemCount.textContent = totalItems;
    totalWeight.textContent = `${totalWeightValue.toFixed(1)} tonn`;
    totalPrice.textContent = `${totalPriceValue.toLocaleString()} kr`;
    
    checkoutBtn.disabled = false;
}

function showBasketNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'basket-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>Produkt lagt til i handlekurven!</span>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Ny Annonse form functionality
function handleAnnonseForm() {
    const form = document.getElementById('annonse-form');
    const imageInput = document.getElementById('images');
    const imagePreview = document.getElementById('image-preview');
    
    if (imageInput) {
        imageInput.addEventListener('change', handleImageUpload);
    }
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleImageUpload(event) {
    const files = Array.from(event.target.files);
    const imagePreview = document.getElementById('image-preview');
    
    if (files.length > 5) {
        alert('Du kan maksimalt laste opp 5 bilder');
        return;
    }
    
    files.forEach((file, index) => {
        if (file.size > 5 * 1024 * 1024) { // 5MB
            alert(`Bildet "${file.name}" er for stort. Maksimal størrelse er 5MB.`);
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const previewDiv = document.createElement('div');
            previewDiv.className = 'preview-image';
            previewDiv.innerHTML = `
                <img src="${e.target.result}" alt="Preview ${index + 1}">
                <button type="button" class="remove-image" onclick="removePreviewImage(this)">
                    <i class="fas fa-times"></i>
                </button>
            `;
            imagePreview.appendChild(previewDiv);
        };
        reader.readAsDataURL(file);
    });
}

function removePreviewImage(button) {
    const previewDiv = button.parentElement;
    previewDiv.remove();
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const formObject = {};
    
    for (let [key, value] of formData.entries()) {
        formObject[key] = value;
    }
    
    // Simulate form submission
    const submitBtn = event.target.querySelector('.btn-primary');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publiserer...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Publisert!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(() => {
            showPage('products');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.style.background = 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)';
            event.target.reset();
            document.getElementById('image-preview').innerHTML = '';
        }, 2000);
    }, 1500);
}

// Newsletter signup
function handleNewsletterSignup() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = event.target.querySelector('input[type="email"]').value;
            
            // Simulate newsletter signup
            const button = event.target.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Abonnerer...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Abonnert!';
                button.style.background = '#10b981';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.background = 'white';
                    event.target.reset();
                }, 2000);
            }, 1000);
        });
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateMobileBasketCount();
    }
}

// Update mobile menu basket count
function updateMobileBasketCount() {
    const mobileBasketCount = document.getElementById('mobile-basket-count');
    if (mobileBasketCount && appState.basket) {
        const totalItems = appState.basket.reduce((sum, item) => sum + item.quantity, 0);
        mobileBasketCount.textContent = totalItems;
        mobileBasketCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

// Initialize new page functionality
document.addEventListener('DOMContentLoaded', function() {
    handleAnnonseForm();
    handleNewsletterSignup();
});
