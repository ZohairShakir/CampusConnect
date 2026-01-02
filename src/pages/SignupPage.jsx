import { useState } from "react";
import "./../styles/signuppage.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function SignupPage({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("No account found. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password");
      } else {
        alert(error.message);
      }
    }
  };

    try {
     
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        uid: user.uid,
        createdAt: new Date(),
      });

      setUser({
        uid: user.uid,
        name,
        email,
      });

      alert("Account created successfully 🎉");
      navigate("/home");

  } catch (err) {
    alert(err.message);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-wrapper">
        <div className="signup-card">
          {/* Brand */}
          <div className="signup-brand">32Bit</div>

          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">
            Register using your college email ID
          </p>

          <form className="signup-form" onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Full Name"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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

            <button type="submit" className="btn btn-primary signup-btn">
              Create Account
            </button>
          </form>

          <div className="signup-footer">
            <span>Already have an account?</span>
            <button
              className="link-btn"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
