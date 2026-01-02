import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import ComplaintBubble from "../components/ComplaintBubble";

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-brand">32Bit</div>
          <h1 className="hero-title">
            One Platform for <span>Every Student Need</span>
          </h1>
          <p className="hero-subtitle">
            Buy & sell resources, access academics, stay updated with events,
            and raise complaints — all in one clean dashboard.
          </p>

          <div className="hero-actions">
            <button className="btn primary">Explore Marketplace</button>
            <button className="btn ghost">View Academics</button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2 className="section-title">What you can do</h2>
        <p className="section-subtitle">
          Built by students, for students.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3>📦 Marketplace</h3>
            <p>
              Buy & sell books, notes, gadgets, and services within your campus.
            </p>
          </div>

          <div className="feature-card">
            <h3>📚 Academics</h3>
            <p>
              Access shared notes, resources, and academic materials easily.
            </p>
          </div>

          <div className="feature-card">
            <h3>📢 Events & Announcements</h3>
            <p>
              Stay updated with college events, notices, and important updates.
            </p>
          </div>

          <div className="feature-card">
            <h3>☁️ Complaints</h3>
            <p>
              Raise issues or complaints anonymously and track their status.
            </p>
          </div>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} 32Bit</p>
      </footer>
      <ComplaintBubble />
      {/* BOTTOM NAV */}
      <Navbar />
    </div>
  );
};

export default Home;
