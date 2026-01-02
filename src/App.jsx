import { useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/Home";
import Marketplace from "./pages/MarketPage";
import Library from "./pages/Academics";
import Announcements from "./pages/Events";
import Complaint from "./pages/Complaint";
import ComplaintBubble from "./components/ComplaintBubble";
import LogoutButton from "./components/LogOutButton";

/* 🔹 Layout (Protected) */
function AppLayout({ user , setUser}) {
  const location = useLocation();
  const hideBubbleOn = ["/login", "/signup"];
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userRef = doc(db, "users", firebaseUser.uid);
        const snap = await getDoc(userRef);

        if (snap.exists()) {
          setUser({
            uid: firebaseUser.uid,
            ...snap.data(),
          });
          navigate("/home");
        } else {
          console.error("User document missing");
        }
      } else {
      
        setUser(null);
        navigate("/login");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/academics" element={<Library />} />
        <Route path="/announcements" element={<Announcements user={user} />} />
        <Route path="/complaint" element={<Complaint />} />
      </Routes>

      {!hideBubbleOn.includes(location.pathname) && (
        <ComplaintBubble />
      )}

      {!hideBubbleOn.includes(location.pathname) && (
        <LogoutButton setUser={setUser} />
      )}
    </div>
  );
}

/* 🔹 Root */
export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignupPage setUser={setUser} />} />

        {/* Protected */}
        <Route
          path="/*"
          element={
            user ? (
              <AppLayout user={user}  setUser={setUser}/>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}
