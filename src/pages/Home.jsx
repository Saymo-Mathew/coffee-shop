import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const carouselItems = [
    { name: "Espresso Roast", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/960px-A_small_cup_of_coffee.JPG" },
    { name: "House Blend", image: "https://blogstudio.s3.theshoppad.net/coffeeheroau/ec178d83e5f597b162cda1e60cb64194.jpg" },
    { name: "Cold Brew Pack", image: "https://www.thelittleepicurean.com/wp-content/uploads/2013/08/iced-toddy-cold-brew-coffee.jpg" },
    { name: "Golden Roast", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { name: "Mocha Delight", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
    { name: "Caramel Macchiato", image: "https://www.allrecipes.com/thmb/LgtetzzQWH3GMxFISSii84XEAB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/258686-IcedCaramelMacchiato-ddmps-4x3-104704-2effb74f7d504b8aa5fbd52204d0e2e5.jpg" },
    { name: "Vanilla Latte", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { name: "French Press", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574" },
    { name: "Americano", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" },
    { name: "Cappuccino", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d" },
    { name: "Flat White", image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.mocha_.latte-6715-768x1152.jpg" },
    { name: "Irish Coffee", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd" }
  ];

  const products = [
    {
      id: "espresso",
      name: "Espresso Roast",
      price: 120,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/960px-A_small_cup_of_coffee.JPG",
      description: "Full-bodied with a bold, smoky flavor. Perfect for your morning espresso shot."
    },
    {
      id: "house",
      name: "House Blend",
      price: 130,
      image: "https://etimg.etb2bimg.com/photo/113047605.cms",
      description: "Smooth, balanced, and aromatic. A customer favorite for a reason."
    },
    {
      id: "coldbrew",
      name: "Cold Brew Pack",
      price: 120,
      image: "https://corkframes.com/cdn/shop/articles/Corkframes_Coffee_Guide_520x500_422ebe38-4cfa-42b5-a266-b9bfecabaf30.jpg?v=1734598727",
      description: "Low acidity with notes of chocolate. Perfect for iced coffee lovers."
    }
  ];

  const testimonials = [
    { text: "Best coffee I've ever had. It's become my morning ritual!", author: "Ceric B." },
    { text: "Rich flavors, quick delivery, and beautiful packaging.", author: "Liam S." },
    { text: "Tastes better than anything I've bought in stores. Worth every penny.", author: "Fensua Y." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartTotal(cartTotal + product.price);
  };

  const removeFromCart = (productId) => {
    const item = cart.find(item => item.id === productId);
    if (item) {
      setCart(cart.filter(item => item.id !== productId));
      setCartTotal(cartTotal - (item.price * item.quantity));
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    const item = cart.find(item => item.id === productId);
    if (item) {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
      setCartTotal(cartTotal - (item.price * item.quantity) + (item.price * newQuantity));
    }
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Make Your Day Wonderful with Coffee and Books</h1>
          <p>Rich, bold, and ethically sourced coffee, making a perfect match while reading.</p>
          <Link to="/menu" className="cta-button">Shop Now</Link>
        </div>
      </header>

      {/* Products Section */}
      <section className="products" id="products">
        <h2>Our Signature Blends</h2>
        
        {/* Carousel */}
        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 180}px)` }}>
            {carouselItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
          <button 
            className="carousel-button prev"
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
          >
            &#10094;
          </button>
          <button 
            className="carousel-button next"
            onClick={() => setCurrentSlide(Math.min(carouselItems.length - 1, currentSlide + 1))}
          >
            &#10095;
          </button>
        </div>

        {/* Product Cards */}
        <div className="product-cards">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>P{product.price}.00</span>
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="reviews">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>{testimonial.text}</p>
              <h4>- {testimonial.author}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Special */}
      <section className="daily-special">
        <h2>Today's Brew</h2>
        <p>"The Golden Roast" – subtle citrus with honey undertones. Limited edition!</p>
      </section>

      {/* Shopping Cart Panel */}
      <div className={`cart-panel ${isCartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>&times;</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart-message">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>P{item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    &times;
                  </button>
                </div>
                <div className="cart-item-total">P{(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <strong>Total: P{cartTotal.toFixed(2)}</strong>
          </div>
          <button 
            className="checkout-btn"
            onClick={() => setIsOrderModalOpen(true)}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Order Modal */}
      <div className={`order-modal ${isOrderModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Complete Your Order</h2>
            <button className="close-modal" onClick={() => setIsOrderModalOpen(false)}>&times;</button>
          </div>
          <form>
            <h3>Order Summary</h3>
            <div>
              {cart.map((item) => (
                <div key={item.id}>
                  <strong>{item.name}</strong><br/>
                  Quantity: {item.quantity}<br/>
                  Price: P{item.price.toFixed(2)}<br/>
                  Subtotal: P{(item.price * item.quantity).toFixed(2)}<br/><br/>
                </div>
              ))}
              <strong>Total: P{cartTotal.toFixed(2)}</strong>
            </div>
            <button type="submit" className="place-order-btn">Place Order</button>
          </form>
        </div>
      </div>

      {/* Quote Widget */}
      <div className="quote-widget square">
        <div className="quote-icon">☕</div>
        <div className="quote-text">"Coffee and books – the perfect blend."</div>
      </div>
    </div>
  );
}

export default Home;
