import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./../styles/complaintPage.css";
import Navbar from "./../components/Navbar"

export default function ComplaintPage({ user }) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!subject || !message) return alert("Please fill in both fields.");

    setLoading(true);
    try {
      await addDoc(collection(db, "complaints"), {
        uid: user.uid,
        name: user.name || "Anonymous",
        email: user.email || "",
        subject,
        message,
        createdAt: serverTimestamp(),
        status: "Pending",
      });
      alert("Complaint submitted!");
      setSubject("");
      setMessage("");
    } catch (err) {
      alert("Error submitting complaint: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="complaint-page-wrapper">
      <div className="complaint-page">
        <div className="complaint-wrapper">
          <div className="complaint-card">
            <h1 className="complaint-title">Submit a Complaint</h1>
            <form className="complaint-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Subject"
                className="input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                placeholder="Your message..."
                className="textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
}
