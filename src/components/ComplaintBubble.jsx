import { useNavigate } from "react-router-dom";
import "../styles/complaintBubble.css";

export default function ComplaintBubble() {
  const navigate = useNavigate();

  return (
    <button
      className="complaint-bubble"
      onClick={() => navigate("/complaint")}
      aria-label="Raise a complaint"
    >
      ☁️
      <span className="bubble-text" onClick={() => navigate("/complaint")}>Complaint</span>
    </button>
  );
}
