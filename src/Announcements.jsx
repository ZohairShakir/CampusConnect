import { db } from "./firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Announcements({ user }) {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    const snap = await getDocs(collection(db, "announcements"));
    setList(snap.docs.map(d => d.data()));
  };

  const add = async () => {
    await addDoc(collection(db, "announcements"), { title });
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h3>Announcements</h3>

      {user.email === "you@college.edu" && (
        <>
          <input placeholder="Announcement" onChange={e => setTitle(e.target.value)} />
          <button onClick={add}>Post</button>
        </>
      )}

      {list.map((a, idx) => <div key={idx}>{a.title}</div>)}
    </div>
  );
}
