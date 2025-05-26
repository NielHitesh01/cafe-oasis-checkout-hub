import { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, Coffee, Star, Clock, MapPin, Phone, Mail, CreditCard, Calendar, Lock } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  prepTime: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const Index = () => {
  const [menuItems] = useState<MenuItem[]>([
    {
      id: 1,
      name: "Espresso",
      price: 120,
      category: "Coffee",
      description: "Rich and bold single shot espresso",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300",
      rating: 4.8,
      prepTime: "2 min"
    },
    {
      id: 2,
      name: "Cappuccino",
      price: 150,
      category: "Coffee",
      description: "Perfectly balanced espresso with steamed milk foam",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300",
      rating: 4.9,
      prepTime: "4 min"
    },
    {
      id: 3,
      name: "Latte",
      price: 180,
      category: "Coffee",
      description: "Smooth espresso with steamed milk and light foam",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300",
      rating: 4.7,
      prepTime: "4 min"
    },
    {
      id: 4,
      name: "Americano",
      price: 100,
      category: "Coffee",
      description: "Bold espresso shots with hot water",
      image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=300",
      rating: 4.5,
      prepTime: "3 min"
    },
    {
      id: 5,
      name: "Mocha",
      price: 200,
      category: "Coffee",
      description: "Rich chocolate and espresso blend with steamed milk",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300",
      rating: 4.8,
      prepTime: "5 min"
    },
    {
      id: 6,
      name: "Cold Brew",
      price: 160,
      category: "Coffee",
      description: "Smooth cold-brewed coffee served over ice",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300",
      rating: 4.6,
      prepTime: "1 min"
    },
    {
      id: 7,
      name: "Croissant",
      price: 80,
      category: "Pastries",
      description: "Buttery, flaky French pastry",
      image: "https://images.unsplash.com/photo-1555507036-ab794f575c5f?w=300",
      rating: 4.6,
      prepTime: "1 min"
    },
    {
      id: 8,
      name: "Blueberry Muffin",
      price: 90,
      category: "Pastries",
      description: "Fresh baked muffin with juicy blueberries",
      image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=300",
      rating: 4.5,
      prepTime: "1 min"
    },
    {
      id: 9,
      name: "Chocolate Cake",
      price: 120,
      category: "Pastries",
      description: "Rich and moist chocolate cake slice",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300",
      rating: 4.9,
      prepTime: "2 min"
    },
    {
      id: 10,
      name: "Danish Pastry",
      price: 95,
      category: "Pastries",
      description: "Sweet and flaky Danish with fruit filling",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=300",
      rating: 4.4,
      prepTime: "1 min"
    },
    {
      id: 11,
      name: "Caesar Salad",
      price: 250,
      category: "Food",
      description: "Fresh romaine lettuce with parmesan and croutons",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300",
      rating: 4.4,
      prepTime: "8 min"
    },
    {
      id: 12,
      name: "Grilled Sandwich",
      price: 220,
      category: "Food",
      description: "Toasted sandwich with cheese and vegetables",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300",
      rating: 4.6,
      prepTime: "10 min"
    },
    {
      id: 13,
      name: "Paneer Wrap",
      price: 180,
      category: "Food",
      description: "Spiced paneer with vegetables in a soft tortilla",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300",
      rating: 4.7,
      prepTime: "12 min"
    },
    {
      id: 14,
      name: "Chicken Burger",
      price: 280,
      category: "Food",
      description: "Juicy grilled chicken burger with fresh toppings",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
      rating: 4.8,
      prepTime: "15 min"
    },
    {
      id: 15,
      name: "Pasta Arrabiata",
      price: 320,
      category: "Food",
      description: "Spicy tomato pasta with herbs and parmesan",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300",
      rating: 4.5,
      prepTime: "18 min"
    },
    {
      id: 16,
      name: "Fresh Orange Juice",
      price: 80,
      category: "Beverages",
      description: "Freshly squeezed orange juice",
      image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300",
      rating: 4.7,
      prepTime: "2 min"
    },
    {
      id: 17,
      name: "Mango Smoothie",
      price: 100,
      category: "Beverages",
      description: "Creamy mango smoothie with yogurt",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300",
      rating: 4.8,
      prepTime: "3 min"
    },
    {
      id: 18,
      name: "Iced Tea",
      price: 60,
      category: "Beverages",
      description: "Refreshing iced tea with lemon",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300",
      rating: 4.3,
      prepTime: "2 min"
    },
    {
      id: 19,
      name: "Hot Chocolate",
      price: 120,
      category: "Beverages",
      description: "Rich hot chocolate with whipped cream",
      image: "https://images.unsplash.com/photo-1542990253-0b0768d7ddc8?w=300",
      rating: 4.6,
      prepTime: "4 min"
    },
    {
      id: 20,
      name: "Masala Chai",
      price: 50,
      category: "Beverages",
      description: "Traditional Indian spiced tea",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300",
      rating: 4.9,
      prepTime: "3 min"
    }
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Coffee', 'Pastries', 'Food', 'Beverages'];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map(cartItem =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
      return prevCart.filter(cartItem => cartItem.id !== id);
    });
  };

  const getItemQuantityInCart = (itemId: number) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckoutOpen(true);
    setIsCartOpen(false);
  };

  const completeOrder = () => {
    alert('Order placed successfully! Thank you for your purchase.');
    setCart([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-800 text-white shadow-2xl">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Coffee className="w-10 h-10 text-amber-200" />
                <div>
                  <h1 className="text-3xl font-bold">Cafe Oasis</h1>
                  <p className="text-amber-200 text-sm">Premium Coffee Experience</p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingCart className="w-6 h-6" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-pulse">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-amber-800 via-orange-700 to-red-700 text-white">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to Cafe Oasis</h2>
            <p className="text-xl mb-8 text-amber-100 animate-fade-in">Where every cup tells a story</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Open 6AM - 10PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>123 Coffee Street</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>(555) 123-CAFE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 bg-white shadow-lg">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-amber-300 rounded-full focus:border-amber-600 focus:outline-none transition-colors"
              />
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-amber-700 text-white shadow-lg transform scale-105'
                        : 'bg-amber-200 text-amber-900 hover:bg-amber-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-amber-900">Our Menu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map(item => {
                const quantityInCart = getItemQuantityInCart(item.id);
                return (
                  <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full text-sm font-bold text-amber-900">
                        ₹{item.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h4>
                      <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{item.prepTime}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full bg-gradient-to-r from-amber-700 to-orange-700 text-white py-3 rounded-full font-bold hover:from-amber-800 hover:to-orange-800 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                      >
                        <span>Add to Cart</span>
                        {quantityInCart > 0 && (
                          <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
                            {quantityInCart}
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-full max-w-md h-full overflow-y-auto animate-slide-in-right">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">Your Order</h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-4 mb-6 p-4 border rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold">{item.name}</h4>
                          <p className="text-amber-700 font-bold">₹{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-200"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold min-w-[2rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center hover:bg-green-200"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-xl font-bold">Total:</span>
                        <span className="text-2xl font-bold text-amber-700">₹{getTotalPrice()}</span>
                      </div>
                      <button
                        onClick={handleCheckout}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Checkout Modal */}
        {isCheckoutOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">Checkout</h3>
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-bold mb-4">Order Summary</h4>
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center mb-2">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-bold">₹{(item.price * item.quantity)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-amber-700">₹{getTotalPrice()}</span>
                    </div>
                  </div>
                </div>
                
                <form className="space-y-4">
                  {/* Customer Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Address</label>
                    <textarea
                      className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                      rows={3}
                      placeholder="Enter your delivery address"
                      required
                    ></textarea>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-bold mb-2">Payment Method</label>
                    <select className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none">
                      <option value="card">Credit/Debit Card</option>
                      <option value="upi">UPI</option>
                      <option value="cash">Cash on Delivery</option>
                      <option value="wallet">Digital Wallet</option>
                    </select>
                  </div>

                  {/* Card Details Section */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Card Details
                    </h5>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold mb-2">Card Number</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-bold mb-2 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-bold mb-2 flex items-center gap-1">
                            <Lock className="w-4 h-4" />
                            CVV
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                            placeholder="123"
                            maxLength={4}
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-bold mb-2">ZIP Code</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                            placeholder="400001"
                            maxLength={6}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                          placeholder="Name as on card"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">Special Instructions</label>
                    <textarea
                      className="w-full px-4 py-3 border rounded-lg focus:border-amber-600 focus:outline-none"
                      rows={3}
                      placeholder="Any special requests for your order..."
                    ></textarea>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span>Subtotal:</span>
                      <span>₹{getTotalPrice()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Delivery Fee:</span>
                      <span>₹40</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span>GST (5%):</span>
                      <span>₹{Math.round((getTotalPrice() + 40) * 0.05)}</span>
                    </div>
                    <div className="border-t pt-2">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Final Total:</span>
                        <span className="text-amber-700">₹{getTotalPrice() + 40 + Math.round((getTotalPrice() + 40) * 0.05)}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={completeOrder}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Place Order - ₹{getTotalPrice() + 40 + Math.round((getTotalPrice() + 40) * 0.05)}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-8 h-8 text-amber-200" />
                  <h3 className="text-2xl font-bold">Cafe Oasis</h3>
                </div>
                <p className="text-amber-200 mb-4">
                  Your premium coffee destination, serving the finest blends and freshest pastries since 2020.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Contact Us</h4>
                <div className="space-y-2 text-amber-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>123 Coffee Street, Downtown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>(555) 123-CAFE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>hello@cafeoasis.com</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Hours</h4>
                <div className="space-y-2 text-amber-200">
                  <div>Monday - Friday: 6:00 AM - 10:00 PM</div>
                  <div>Saturday: 7:00 AM - 11:00 PM</div>
                  <div>Sunday: 7:00 AM - 9:00 PM</div>
                </div>
              </div>
            </div>
            <div className="border-t border-amber-600 mt-8 pt-8 text-center text-amber-200">
              <p>&copy; 2024 Cafe Oasis. All rights reserved. Made with ❤️ for coffee lovers.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
