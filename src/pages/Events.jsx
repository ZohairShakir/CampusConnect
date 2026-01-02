import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Users } from "lucide-react";
import { Button } from "../components/button";
import { Card, CardContent } from "../components/card";
import { Badge } from "../components/badge";
import "../styles/Events.css";
import Navbar from "../components/Navbar";

const EVENTS = [
  {
    id: 1,
    title: "Tech Summit 2024",
    date: "Dec 28, 2024",
    time: "10:00 AM",
    location: "Main Auditorium",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000",
    attendees: 124
  },
  {
    id: 2,
    title: "Annual Cultural Fest",
    date: "Jan 15, 2025",
    time: "5:00 PM",
    location: "Campus Grounds",
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
    attendees: 540
  },
  {
    id: 3,
    title: "Startup Weekend",
    date: "Jan 20, 2025",
    time: "9:00 AM",
    location: "Incubation Center",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1000",
    attendees: 85
  }
];

export default function Events() {
  return (
    <div className="events-wrapper">
      <div className="events-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="events-hero"
        >
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600"
            alt="Featured Event"
            className="hero-image"
          />
          <div className="hero-overlay">
            <Badge className="badge-yellow">Featured Event</Badge>
            <h2 className="hero-title">Annual <span className="headtitle">Cultural Fest</span> 2025</h2>
            <div className="hero-meta">
              <div><Calendar /> Jan 15, 2025</div>
              <div><Clock /> 5:00 PM onwards</div>
              <div><MapPin /> Campus Grounds</div>
            </div>
            <Button size="lg" className="btn-yellow">
              Register Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        <h3 className="events-title">Upcoming Events</h3>
        <div className="events-grid">
          {EVENTS.map(event => (
            <motion.div key={event.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="event-card">
                <div className="event-card-image">
                  <img src={event.image} alt={event.title} />
                  <Badge className="event-badge">{event.category}</Badge>
                </div>
                <CardContent>
                  <h4 className="event-title">{event.title}</h4>
                  <div className="event-meta">
                    <div><Calendar /> {event.date}</div>
                    <div><Clock /> {event.time}</div>
                    <div><MapPin /> {event.location}</div>
                  </div>
                  <div className="event-footer">
                    <div><Users /> {event.attendees} going</div>
                    <Button size="sm" variant="ghost" className="btn-yellow-ghost">Details <ArrowRight className="ml-1 w-4 h-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
            <Navbar />
    </div>
  );
}
