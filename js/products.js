


const productsData = [
   
    {
        id: 1,
        name: 'Classic Denim Jacket',
        price: 89.99,
        originalPrice: 129.99,
        discount: 30,
        category: 'fashion',
        rating: 4.5,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Stylish denim jacket perfect for all seasons',
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: 'Elegant Summer Dress',
        price: 59.99,
        originalPrice: 79.99,
        discount: 25,
        category: 'fashion',
        rating: 4.8,
        reviews: 456,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Flowing summer dress with floral patterns',
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: 'Designer Leather Handbag',
        price: 199.99,
        originalPrice: 299.99,
        discount: 33,
        category: 'fashion',
        rating: 4.7,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Premium leather handbag with elegant design',
        inStock: true,
        featured: false
    },
    {
        id: 4,
        name: 'Vintage Flannel Shirt',
        price: 45.99,
        originalPrice: 65.99,
        discount: 30,
        category: 'fashion',
        rating: 4.3,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Comfortable flannel shirt with vintage style',
        inStock: true,
        featured: false
    },
    {
        id: 5,
        name: 'Slim Fit Chinos',
        price: 49.99,
        originalPrice: 69.99,
        discount: 28,
        category: 'fashion',
        rating: 4.6,
        reviews: 278,
        image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Classic chinos with modern slim fit',
        inStock: true,
        featured: false
    },
    {
        id: 6,
        name: 'Wool Winter Coat',
        price: 159.99,
        originalPrice: 229.99,
        discount: 30,
        category: 'fashion',
        rating: 4.9,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Warm wool coat for winter season',
        inStock: true,
        featured: true
    },
    {
        id: 7,
        name: 'Casual T-Shirt Bundle',
        price: 34.99,
        originalPrice: 49.99,
        discount: 30,
        category: 'fashion',
        rating: 4.4,
        reviews: 423,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Pack of 3 premium cotton t-shirts',
        inStock: true,
        featured: false
    },
    {
        id: 8,
        name: 'Designer Sunglasses',
        price: 79.99,
        originalPrice: 119.99,
        discount: 33,
        category: 'fashion',
        rating: 4.7,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&q=80'
        ],
        description: 'UV protection sunglasses with style',
        inStock: true,
        featured: false
    },
    
    // Electronics Category (8 products)
    {
        id: 9,
        name: 'Wireless Bluetooth Headphones',
        price: 129.99,
        originalPrice: 199.99,
        discount: 35,
        category: 'electronics',
        rating: 4.6,
        reviews: 1234,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Premium noise-cancelling wireless headphones',
        inStock: true,
        featured: true
    },
    {
        id: 10,
        name: 'Smart Fitness Watch',
        price: 199.99,
        originalPrice: 299.99,
        discount: 33,
        category: 'electronics',
        rating: 4.8,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Advanced fitness tracking with heart rate monitor',
        inStock: true,
        featured: true
    },
    {
        id: 11,
        name: 'Portable Bluetooth Speaker',
        price: 79.99,
        originalPrice: 119.99,
        discount: 33,
        category: 'electronics',
        rating: 4.5,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Waterproof speaker with 360-degree sound',
        inStock: true,
        featured: false
    },
    {
        id: 12,
        name: 'Wireless Phone Charger',
        price: 29.99,
        originalPrice: 49.99,
        discount: 40,
        category: 'electronics',
        rating: 4.3,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Fast wireless charging pad for smartphones',
        inStock: true,
        featured: false
    },
    {
        id: 13,
        name: '4K Action Camera',
        price: 249.99,
        originalPrice: 399.99,
        discount: 37,
        category: 'electronics',
        rating: 4.7,
        reviews: 345,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Waterproof action camera for adventures',
        inStock: true,
        featured: true
    },
    {
        id: 14,
        name: 'Smart LED Desk Lamp',
        price: 59.99,
        originalPrice: 89.99,
        discount: 33,
        category: 'electronics',
        rating: 4.4,
        reviews: 178,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Adjustable LED lamp with app control',
        inStock: true,
        featured: false
    },
    {
        id: 15,
        name: 'USB-C Hub Multiport Adapter',
        price: 49.99,
        originalPrice: 79.99,
        discount: 37,
        category: 'electronics',
        rating: 4.6,
        reviews: 456,
        image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Multi-port adapter for laptops and tablets',
        inStock: true,
        featured: false
    },
    {
        id: 16,
        name: 'Portable Power Bank 20000mAh',
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        category: 'electronics',
        rating: 4.5,
        reviews: 678,
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=400&h=400&fit=crop&q=80'
        ],
        description: 'High capacity power bank with fast charging',
        inStock: true,
        featured: false
    },
    
    // Accessories Category (7 products)
    {
        id: 17,
        name: 'Leather Wallet with RFID Blocking',
        price: 49.99,
        originalPrice: 79.99,
        discount: 37,
        category: 'accessories',
        rating: 4.6,
        reviews: 345,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Premium leather wallet with RFID protection',
        inStock: true,
        featured: true
    },
    {
        id: 18,
        name: 'Leather Belt Genuine',
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        category: 'accessories',
        rating: 4.4,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1624222247344-550fb60583fd?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Classic genuine leather belt',
        inStock: true,
        featured: false
    },
    {
        id: 19,
        name: 'Premium Watch Collection',
        price: 299.99,
        originalPrice: 449.99,
        discount: 33,
        category: 'accessories',
        rating: 4.8,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Luxury watch with automatic movement',
        inStock: true,
        featured: true
    },
    {
        id: 20,
        name: 'Designer Backpack',
        price: 89.99,
        originalPrice: 129.99,
        discount: 30,
        category: 'accessories',
        rating: 4.5,
        reviews: 412,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Stylish backpack for everyday use',
        inStock: true,
        featured: false
    },
    {
        id: 21,
        name: 'Silk Necktie Set',
        price: 34.99,
        originalPrice: 49.99,
        discount: 30,
        category: 'accessories',
        rating: 4.3,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Premium silk ties in elegant colors',
        inStock: true,
        featured: false
    },
    {
        id: 22,
        name: 'Baseball Cap Premium',
        price: 24.99,
        originalPrice: 39.99,
        discount: 37,
        category: 'accessories',
        rating: 4.2,
        reviews: 256,
        image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Adjustable cap with premium materials',
        inStock: true,
        featured: false
    },
    {
        id: 23,
        name: 'Leather Gloves Touchscreen',
        price: 29.99,
        originalPrice: 49.99,
        discount: 40,
        category: 'accessories',
        rating: 4.4,
        reviews: 167,
        image: 'https://images.unsplash.com/photo-1600435335781-01575ca57e16?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1600435335781-01575ca57e16?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1600435335781-01575ca57e16?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Warm leather gloves with touchscreen compatibility',
        inStock: true,
        featured: false
    },
    
    // Shoes Category (7 products)
    {
        id: 24,
        name: 'Running Sneakers Pro',
        price: 119.99,
        originalPrice: 179.99,
        discount: 33,
        category: 'shoes',
        rating: 4.7,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Professional running shoes with cushioning',
        inStock: true,
        featured: true
    },
    {
        id: 25,
        name: 'Casual Canvas Sneakers',
        price: 49.99,
        originalPrice: 79.99,
        discount: 37,
        category: 'shoes',
        rating: 4.5,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Comfortable canvas sneakers for everyday wear',
        inStock: true,
        featured: false
    },
    {
        id: 26,
        name: 'Classic Leather Boots',
        price: 149.99,
        originalPrice: 229.99,
        discount: 34,
        category: 'shoes',
        rating: 4.8,
        reviews: 345,
        image: 'https://images.unsplash.com/photo-1608256246200-53bd5f76640a?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1608256246200-53bd5f76640a?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1608256246200-53bd5f76640a?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Durable leather boots for all weather',
        inStock: true,
        featured: true
    },
    {
        id: 27,
        name: 'High-Top Basketball Shoes',
        price: 139.99,
        originalPrice: 199.99,
        discount: 30,
        category: 'shoes',
        rating: 4.6,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Performance basketball shoes with ankle support',
        inStock: true,
        featured: false
    },
    {
        id: 28,
        name: 'Slip-On Loafers',
        price: 79.99,
        originalPrice: 119.99,
        discount: 33,
        category: 'shoes',
        rating: 4.4,
        reviews: 178,
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Elegant loafers for business casual',
        inStock: true,
        featured: false
    },
    {
        id: 29,
        name: 'Athletic Training Shoes',
        price: 99.99,
        originalPrice: 149.99,
        discount: 33,
        category: 'shoes',
        rating: 4.7,
        reviews: 423,
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Versatile training shoes for gym workouts',
        inStock: true,
        featured: false
    },
    {
        id: 30,
        name: 'Comfortable Sandals',
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        category: 'shoes',
        rating: 4.3,
        reviews: 289,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Breathable sandals perfect for summer',
        inStock: true,
        featured: false
    },

    // Extra Fashion Products
    {
        id: 31,
        name: 'Oversized Hoodie',
        price: 69.99,
        originalPrice: 99.99,
        discount: 30,
        category: 'fashion',
        rating: 4.7,
        reviews: 321,
        image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Cozy oversized hoodie for everyday comfort',
        inStock: true,
        featured: true
    },
    {
        id: 32,
        name: 'Minimalist White Shirt',
        price: 39.99,
        originalPrice: 54.99,
        discount: 27,
        category: 'fashion',
        rating: 4.5,
        reviews: 204,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Clean white shirt for formal and casual outfits',
        inStock: true,
        featured: false
    },

    // Extra Electronics Products
    {
        id: 33,
        name: 'Wireless Earbuds Pro',
        price: 499,
        originalPrice: 450,
        discount: 32,
        category: 'electronics',
        rating: 4.5,
        reviews: 1345,
        image: 'https://images.unsplash.com/photo-1585386959984-a4155223f3f8?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1585386959984-a4155223f3f8?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1585386959984-a4155223f3f8?w=400&h=400&fit=crop&q=80'
        ],
        description: 'True wireless earbuds with active noise cancelling',
        inStock: true,
        featured: true
    },
    {
        id: 34,
        name: 'Gaming Mechanical Keyboard',
        price: 119.99,
        originalPrice: 169.99,
        discount: 29,
        category: 'electronics',
        rating: 5,
        reviews: 786,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&q=80'
        ],
        description: 'RGB mechanical keyboard with custom switches',
        inStock: true,
        featured: false
    },

    // Extra Accessories Products
    {
        id: 35,
        name: 'Travel Duffel Bag',
        price: 99.99,
        originalPrice: 149.99,
        discount: 33,
        category: 'accessories',
        rating: 4.6,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Spacious duffel bag ideal for weekend trips',
        inStock: true,
        featured: false
    },
    {
        id: 36,
        name: 'Beanie Hat Winter',
        price: 19.99,
        originalPrice: 29.99,
        discount: 33,
        category: 'accessories',
        rating: 4.4,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Soft knit beanie to keep you warm in winter',
        inStock: true,
        featured: false
    },

    // Extra Shoes Products
    {
        id: 37,
        name: 'Chunky Sneakers',
        price: 129.99,
        originalPrice: 189.99,
        discount: 32,
        category: 'shoes',
        rating: 4.5,
        reviews: 356,
        image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Trendy chunky sneakers with thick sole',
        inStock: true,
        featured: true
    },
    {
        id: 38,
        name: 'Minimal Slides',
        price: 29.99,
        originalPrice: 49.99,
        discount: 40,
        category: 'shoes',
        rating: 4.2,
        reviews: 174,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&q=80'
        ],
        description: 'Simple and comfortable slides for daily wear',
        inStock: true,
        featured: false
    }
];

// Store filtered products
let filteredProducts = [...productsData];

/**
 * Get all products
 * @returns {Array} Array of all products
 */
function getAllProducts() {
    return productsData;
}

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Array} Array of products in category
 */
function getProductsByCategory(category) {
    if (category === 'all') {
        return productsData;
    }
    return productsData.filter(product => product.category === category);
}

/**
 * Get product by ID
 * @param {number} id - Product ID
 * @returns {Object|null} Product object or null
 */
function getProductById(id) {
    return productsData.find(product => product.id === parseInt(id));
}

/**
 * Create product card HTML
 * @param {Object} product - Product object
 * @returns {HTMLElement} Product card element
 */
function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card reveal';
    card.dataset.productId = product.id;
    
    const discountBadge = product.discount > 0 
        ? `<div class="badge badge-discount">-${product.discount}%</div>` 
        : '';
    
    const isWishlisted = window.wishlist && window.wishlist.isWishlisted(product.id);
    const wishlistClass = isWishlisted ? 'active' : '';
    
    card.innerHTML = `
        <div class="product-card-image-container">
            <img 
                src="${product.image}" 
                alt="${product.name}" 
                class="product-card-image"
                loading="lazy"
                data-src="${product.image}"
            >
            ${discountBadge}
            <button class="product-card-wishlist ${wishlistClass}" data-product-id="${product.id}" aria-label="Add to wishlist">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
        </div>
        <div class="product-card-body">
            <h3 class="product-card-name">${product.name}</h3>
            <div class="product-card-rating">
                <div class="rating-stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-value">${product.rating}</span>
                <span>(${product.reviews})</span>
            </div>
            <div class="product-card-price">
                <span class="price-current">${window.utils?.formatPrice(product.price) || '$' + product.price.toFixed(2)}</span>
                ${product.originalPrice > product.price 
                    ? `<span class="price-original">${window.utils?.formatPrice(product.originalPrice) || '$' + product.originalPrice.toFixed(2)}</span>` 
                    : ''}
            </div>
            <div class="product-card-actions">
                <button class="btn btn-add-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Generate star rating HTML
 * @param {number} rating - Rating value (0-5)
 * @returns {string} Star rating HTML
 */
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span>★</span>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<span style="opacity: 0.5">★</span>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span style="opacity: 0.2">★</span>';
    }
    
    return starsHTML;
}

/**
 * Render products to grid
 * @param {Array} products - Array of products to render
 * @param {HTMLElement} container - Container element
 */
function renderProducts(products, container) {
    if (!container) {
        container = document.getElementById('productsGrid');
    }
    
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '';
    
    if (products.length === 0) {
        const emptyState = document.getElementById('emptyState');
        if (emptyState) {
            emptyState.classList.add('active');
        }
        return;
    }
    
    
    const emptyState = document.getElementById('emptyState');
    if (emptyState) {
        emptyState.classList.remove('active');
    }
    
   
    const fragment = document.createDocumentFragment();
    
    products.forEach(product => {
        const card = createProductCard(product);
        fragment.appendChild(card);
    });
    
    container.appendChild(fragment);
    
    
    const images = container.querySelectorAll('img[data-src]');
    if (window.utils && window.utils.initLazyLoading) {
        window.utils.initLazyLoading(images);
    }
    
    
    if (window.utils && window.utils.initRevealOnScroll) {
        setTimeout(() => {
            window.utils.initRevealOnScroll();
        }, 100);
    }
}

/**
 * Show skeleton loaders
 * @param {HTMLElement} container - Container element
 * @param {number} count - Number of skeletons to show
 */
function showSkeletonLoaders(container, count = 8) {
    if (!container) {
        container = document.getElementById('productsGrid');
    }
    
    if (!container) return;
    
    container.innerHTML = '';
    
    const skeletons = window.utils ? window.utils.createSkeletonLoaders(count) : [];
    skeletons.forEach(skeleton => {
        container.appendChild(skeleton);
    });
}


window.products = {
    getAllProducts,
    getProductsByCategory,
    getProductById,
    createProductCard,
    renderProducts,
    showSkeletonLoaders,
    productsData,
    filteredProducts
};

