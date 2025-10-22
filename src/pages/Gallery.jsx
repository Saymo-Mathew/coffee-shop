import React from 'react';
import './Gallery.css';

function Gallery() {
  const testimonials = [
    { 
      text: "Best coffee I've ever had. It's become my morning ritual!", 
      author: "Ceric B.",
      rating: 5
    },
    { 
      text: "Rich flavors, quick delivery, and beautiful packaging.", 
      author: "Liam S.",
      rating: 5
    },
    { 
      text: "Tastes better than anything I've bought in stores. Worth every penny.", 
      author: "Fensua Y.",
      rating: 5
    },
    { 
      text: "The Golden Roast is absolutely amazing! Perfect for my afternoon reading sessions.", 
      author: "Maria G.",
      rating: 5
    },
    { 
      text: "Excellent customer service and the coffee quality is consistently great.", 
      author: "John D.",
      rating: 4
    },
    { 
      text: "Love the variety of blends. Each one has its own unique character.", 
      author: "Sarah M.",
      rating: 5
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1544787219-7f47ccb76574"
  ];

  return (
    <div>
      {/* Customer Reviews Section */}
      <section className="testimonials" id="reviews">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}</h4>
              <div className="rating-display" style={{ marginTop: '0.5rem', color: 'var(--gold-accent)' }}>
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5-testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="products" style={{ backgroundColor: 'var(--cream)' }}>
        <h2>Our Coffee Gallery</h2>
        <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--olive)' }}>
          Take a visual journey through our coffee experience
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          padding: '0 2rem'
        }}>
          {galleryImages.map((image, index) => (
            <div key={index} style={{
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              <img 
                src={image} 
                alt={`Coffee ${index + 1}`} 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Daily Special */}
      <section className="daily-special">
        <h2>Today's Brew</h2>
        <p>"The Golden Roast" – subtle citrus with honey undertones. Limited edition!</p>
      </section>
    </div>
  );
}

export default Gallery;
