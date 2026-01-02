import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import "./../styles/Marketpage.css";

const initialItems = [
  { id: 1, title: "Calculus Book", price: 350, category: "Books", contact: "9876543210", image: "/image/sccalc.jpg" },
  { id: 2, title: "Laptop", price: 45000, category: "Electronics", contact: "9876543211", image: "/image/laptop.jpg" },
  { id: 3, title: "Physics Notes", price: 100, category: "Notes", contact: "9876543212", image: "/image/notes.jpg" },
  { id: 4, title: "Desk Lamp", price: 500, category: "Others", contact: "9876543213" , image: "/image/lamp.jpg"},
];

const Marketplace = () => {
  const [items] = useState(initialItems);
  const [search, setSearch] = useState("");

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="marketplace-page"> {/* 👈 PAGE WRAPPER */}
      <div className="marketplace-container">
        <h1 className="marketplace-header">Campus Marketplace</h1>

        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        <div className="listing-container">
  {filteredItems.length > 0 ? (
    filteredItems.map(item => (
      <div key={item.id} className="listing-card">

        {/* Image */}
        <div className="listing-image-wrapper">
          <img
            src={item.image}
            alt={item.title}
            className="listing-image"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="listing-content">
          <div className="listing-title">{item.title}</div>

          <div className="listing-details">
            <span className="listing-price">₹{item.price}</span>
            <span className="listing-category">{item.category}</span>
            <a href={`tel:${item.contact}`} className="listing-contact">
              Contact
            </a>
          </div>
        </div>

      </div>
    ))
  ) : (
    <p>No items found</p>
  )}
</div>


        <button className="view-all-btn">View All Listings</button>
      </div>

      <Navbar />
    </div>
  );
};

export default Marketplace;
