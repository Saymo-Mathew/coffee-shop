import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    product: '',
    rating: '',
    comments: ''
  });

  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });

  const [surveyForm, setSurveyForm] = useState({
    name: '',
    email: '',
    visitFrequency: '',
    favoriteProduct: '',
    serviceRating: '',
    recommend: '',
    suggestions: ''
  });

  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedServiceRating, setSelectedServiceRating] = useState(0);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackForm.rating) {
      alert('Please select a rating');
      return;
    }
    alert('Feedback submitted successfully!');
    setFeedbackForm({ name: '', product: '', rating: '', comments: '' });
    setSelectedRating(0);
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    alert('Reservation booked successfully!');
    setReservationForm({ name: '', email: '', phone: '', date: '', time: '', guests: '', notes: '' });
  };

  const handleSurveySubmit = (e) => {
    e.preventDefault();
    if (!surveyForm.serviceRating) {
      alert('Please select a service rating');
      return;
    }
    alert('Survey submitted successfully!');
    setSurveyForm({ name: '', email: '', visitFrequency: '', favoriteProduct: '', serviceRating: '', recommend: '', suggestions: '' });
    setSelectedServiceRating(0);
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
    setFeedbackForm({ ...feedbackForm, rating: rating.toString() });
  };

  const handleServiceRatingClick = (rating) => {
    setSelectedServiceRating(rating);
    setSurveyForm({ ...surveyForm, serviceRating: rating.toString() });
  };

  return (
    <div>
      {/* Product Feedback Section */}
      <section className="feedback-section form-section" id="product-feedback">
        <div className="container">
          <h2>Product Feedback</h2>
          <div className="form-container">
            <form onSubmit={handleFeedbackSubmit} className="coffee-form">
              <div className="form-group">
                <label htmlFor="productName">Your Name *</label>
                <input
                  type="text"
                  id="productName"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={feedbackForm.name}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="productSelect">Product *</label>
                <select
                  id="productSelect"
                  name="product"
                  required
                  value={feedbackForm.product}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, product: e.target.value })}
                >
                  <option value="">Select a product</option>
                  <option value="espresso-roast">Espresso Roast</option>
                  <option value="house-blend">House Blend</option>
                  <option value="cold-brew-pack">Cold Brew Pack</option>
                  <option value="golden-roast">Golden Roast</option>
                  <option value="mocha-delight">Mocha Delight</option>
                  <option value="caramel-macchiato">Caramel Macchiato</option>
                  <option value="vanilla-latte">Vanilla Latte</option>
                  <option value="french-press">French Press</option>
                  <option value="americano">Americano</option>
                  <option value="cappuccino">Cappuccino</option>
                  <option value="flat-white">Flat White</option>
                  <option value="irish-coffee">Irish Coffee</option>
                </select>
              </div>
              <div className="form-group">
                <label>Rating *</label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${selectedRating >= star ? 'active' : ''}`}
                      onClick={() => handleRatingClick(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="productComments">Comments *</label>
                <textarea
                  id="productComments"
                  name="comments"
                  rows="3"
                  placeholder="Tell us about your experience..."
                  required
                  value={feedbackForm.comments}
                  onChange={(e) => setFeedbackForm({ ...feedbackForm, comments: e.target.value })}
                />
              </div>
              <button type="submit" className="form-submit-btn">Submit Feedback</button>
            </form>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="reservation-section form-section" id="reservation">
        <div className="container">
          <h2>Book a Table</h2>
          <div className="form-container">
            <form onSubmit={handleReservationSubmit} className="coffee-form">
              <div className="form-group">
                <label htmlFor="reservationName">Full Name *</label>
                <input
                  type="text"
                  id="reservationName"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={reservationForm.name}
                  onChange={(e) => setReservationForm({ ...reservationForm, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reservationEmail">Email *</label>
                <input
                  type="email"
                  id="reservationEmail"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={reservationForm.email}
                  onChange={(e) => setReservationForm({ ...reservationForm, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reservationPhone">Phone Number *</label>
                <input
                  type="tel"
                  id="reservationPhone"
                  name="phone"
                  required
                  placeholder="+63 XXX XXX XXXX"
                  value={reservationForm.phone}
                  onChange={(e) => setReservationForm({ ...reservationForm, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reservationDate">Date *</label>
                <input
                  type="date"
                  id="reservationDate"
                  name="date"
                  required
                  value={reservationForm.date}
                  onChange={(e) => setReservationForm({ ...reservationForm, date: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reservationTime">Time *</label>
                <input
                  type="time"
                  id="reservationTime"
                  name="time"
                  required
                  value={reservationForm.time}
                  onChange={(e) => setReservationForm({ ...reservationForm, time: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reservationGuests">Number of Guests *</label>
                <select
                  id="reservationGuests"
                  name="guests"
                  required
                  value={reservationForm.guests}
                  onChange={(e) => setReservationForm({ ...reservationForm, guests: e.target.value })}
                >
                  <option value="">Select guests</option>
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6">6 people</option>
                  <option value="7+">7+ people</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="reservationNotes">Special Requests</label>
                <textarea
                  id="reservationNotes"
                  name="notes"
                  rows="2"
                  placeholder="Any dietary restrictions or special requests..."
                  value={reservationForm.notes}
                  onChange={(e) => setReservationForm({ ...reservationForm, notes: e.target.value })}
                />
              </div>
              <button type="submit" className="form-submit-btn">Book Reservation</button>
            </form>
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section className="survey-section form-section" id="survey">
        <div className="container">
          <h2>Customer Survey</h2>
          <div className="form-container">
            <form onSubmit={handleSurveySubmit} className="coffee-form">
              <div className="form-group">
                <label htmlFor="surveyName">Name *</label>
                <input
                  type="text"
                  id="surveyName"
                  name="name"
                  required
                  placeholder="Enter your name"
                  value={surveyForm.name}
                  onChange={(e) => setSurveyForm({ ...surveyForm, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="surveyEmail">Email *</label>
                <input
                  type="email"
                  id="surveyEmail"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={surveyForm.email}
                  onChange={(e) => setSurveyForm({ ...surveyForm, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="surveyVisit">How often do you visit? *</label>
                <select
                  id="surveyVisit"
                  name="visitFrequency"
                  required
                  value={surveyForm.visitFrequency}
                  onChange={(e) => setSurveyForm({ ...surveyForm, visitFrequency: e.target.value })}
                >
                  <option value="">Select frequency</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="first-time">First time</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="surveyFavorite">Favorite Product</label>
                <select
                  id="surveyFavorite"
                  name="favoriteProduct"
                  value={surveyForm.favoriteProduct}
                  onChange={(e) => setSurveyForm({ ...surveyForm, favoriteProduct: e.target.value })}
                >
                  <option value="">Select your favorite</option>
                  <option value="espresso-roast">Espresso Roast</option>
                  <option value="house-blend">House Blend</option>
                  <option value="cold-brew-pack">Cold Brew Pack</option>
                  <option value="golden-roast">Golden Roast</option>
                  <option value="mocha-delight">Mocha Delight</option>
                  <option value="caramel-macchiato">Caramel Macchiato</option>
                  <option value="vanilla-latte">Vanilla Latte</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Service Rating *</label>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`star ${selectedServiceRating >= star ? 'active' : ''}`}
                      onClick={() => handleServiceRatingClick(star)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="surveyRecommend">Would you recommend us? *</label>
                <select
                  id="surveyRecommend"
                  name="recommend"
                  required
                  value={surveyForm.recommend}
                  onChange={(e) => setSurveyForm({ ...surveyForm, recommend: e.target.value })}
                >
                  <option value="">Select option</option>
                  <option value="yes">Definitely yes</option>
                  <option value="probably">Probably yes</option>
                  <option value="not-sure">Not sure</option>
                  <option value="probably-not">Probably not</option>
                  <option value="no">Definitely not</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="surveySuggestions">Suggestions</label>
                <textarea
                  id="surveySuggestions"
                  name="suggestions"
                  rows="3"
                  placeholder="Any suggestions for improvement..."
                  value={surveyForm.suggestions}
                  onChange={(e) => setSurveyForm({ ...surveyForm, suggestions: e.target.value })}
                />
              </div>
              <button type="submit" className="form-submit-btn">Submit Survey</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <p>&copy; 2025 StarBooks Coffee. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
