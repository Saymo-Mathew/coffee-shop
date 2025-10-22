import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About StarBooks Coffee</h1>
          <p>Where coffee meets literature in perfect harmony</p>
        </div>
      </section>

      {/* About Content */}
      <section className="products" style={{ backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Story</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '3rem',
            marginBottom: '3rem'
          }}>
            <div>
              <h3 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                At StarBooks Coffee, we believe that the perfect cup of coffee is more than just a beverage – 
                it's an experience that brings people together. We're passionate about crafting premium coffee 
                blends that complement your reading moments and create lasting memories.
              </p>
            </div>
            
            <div>
              <h3 style={{ color: 'var(--gold-accent)', marginBottom: '1rem' }}>Our Values</h3>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                We source our beans ethically from sustainable farms, ensuring every cup supports 
                both quality and responsible farming practices. Our commitment to excellence extends 
                from bean selection to the final brew in your cup.
              </p>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'var(--light-coffee)', 
            padding: '2rem', 
            borderRadius: '15px',
            marginBottom: '3rem'
          }}>
            <h3 style={{ color: 'var(--dark-brown)', textAlign: 'center', marginBottom: '1.5rem' }}>
              Why Choose StarBooks?
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '2rem',
              textAlign: 'center'
            }}>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☕</div>
                <h4 style={{ color: 'var(--gold-accent)' }}>Premium Quality</h4>
                <p>Carefully selected beans from the world's finest coffee regions</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
                <h4 style={{ color: 'var(--gold-accent)' }}>Perfect for Reading</h4>
                <p>Blends designed to enhance your reading experience</p>
              </div>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
                <h4 style={{ color: 'var(--gold-accent)' }}>Ethically Sourced</h4>
                <p>Supporting sustainable farming and fair trade practices</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h3 style={{ color: 'var(--dark-brown)', marginBottom: '1rem' }}>Join Our Community</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Since 2020, we've been serving coffee lovers who appreciate the finer things in life. 
              Whether you're a bookworm, a coffee connoisseur, or simply someone who enjoys a great cup, 
              you'll find your perfect blend at StarBooks Coffee.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Special */}
      <section className="daily-special">
        <h2>Today's Special</h2>
        <p>"The Golden Roast" – A limited edition blend with subtle citrus and honey undertones, 
        perfect for your afternoon reading session.</p>
      </section>
    </div>
  );
}

export default About;
