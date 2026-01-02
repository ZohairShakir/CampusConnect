import { useState } from "react";
import "./../styles/loginPage.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // optional loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    setLoading(true);

    try {
      // 🔐 Firebase Auth checks if email exists
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // 📦 Fetch user profile from Firestore
      const userRef = doc(db, "users", firebaseUser.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        alert("User data not found. Please contact admin.");
        setLoading(false);
        return;
      }

      // ✅ Login success
      const userData = { uid: firebaseUser.uid, ...userSnap.data() };
      setUser(userData);

      alert("Login successful! Redirecting..."); // Optional feedback

      // 🔄 Redirect to dashboard/homepage
      navigate("/home"); // <-- change "/dashboard" to wherever you want

    } catch (error) {
      console.error(error);

      // 🎯 Clean error messages
      if (error.code === "auth/user-not-found") {
        alert("No account found. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-brand">32Bit</div>
          <h1 className="login-title">Student Portal</h1>
          <p className="login-subtitle">Sign in using your college email ID</p>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="College Email ID"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-primary login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="login-footer">
            <span>Don’t have an account?</span>
            <button className="link-btn" onClick={() => navigate("/signup")}>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
