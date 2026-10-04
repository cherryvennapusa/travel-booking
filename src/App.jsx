import { useState } from "react";
import "./App.css";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!from || !to || !date) {
      alert("Please fill all the details.");
      return;
    }

    alert(`Searching trips from ${from} to ${to} on ${date}`);
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">✈️ TravelBooking</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#offers">Offers</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="login-btn">Login</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Explore the World</h1>
          <p>Book your next journey easily and travel with confidence.</p>

          <form className="booking-box" onSubmit={handleSearch}>
            <div className="input-group">
              <label>From</label>
              <input
                type="text"
                placeholder="Departure city"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>To</label>
              <input
                type="text"
                placeholder="Destination city"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Travel Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <button type="submit" className="search-btn">
              Search Trips
            </button>
          </form>
        </div>
      </section>

      <section className="destinations" id="destinations">
        <h2>Popular Destinations</h2>
        <p className="section-text">
          Discover beautiful places for your next adventure.
        </p>

        <div className="cards">
          <div className="card">
            <div className="card-image">🏖️</div>
            <h3>Goa</h3>
            <p>Relax on beautiful beaches and enjoy an unforgettable trip.</p>
            <button>Explore</button>
          </div>

          <div className="card">
            <div className="card-image">🏔️</div>
            <h3>Manali</h3>
            <p>Experience mountains, nature and amazing adventures.</p>
            <button>Explore</button>
          </div>

          <div className="card">
            <div className="card-image">🏛️</div>
            <h3>Hyderabad</h3>
            <p>Explore historical places and taste delicious local food.</p>
            <button>Explore</button>
          </div>
        </div>
      </section>

      <section className="offers" id="offers">
        <h2>Why Choose Us?</h2>

        <div className="features">
          <div>
            <span>💰</span>
            <h3>Best Prices</h3>
            <p>Affordable travel options for everyone.</p>
          </div>

          <div>
            <span>🔒</span>
            <h3>Secure Booking</h3>
            <p>Your booking information is safe with us.</p>
          </div>

          <div>
            <span>📞</span>
            <h3>24/7 Support</h3>
            <p>We are always ready to help you.</p>
          </div>
        </div>
      </section>

      <footer id="contact">
        <h3>TravelBooking</h3>
        <p>Make your journey memorable.</p>
        <p>© 2026 TravelBooking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;