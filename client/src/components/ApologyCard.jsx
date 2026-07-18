import { useState } from "react";
import { motion } from "framer-motion";

function ApologyCard({ unlocked, setUnlocked }) {
  const [showUnlock, setShowUnlock] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const SECRET_PASSWORD = "himanshi123";

  const handleUnlock = () => {
    if (password === SECRET_PASSWORD) {
      setUnlocked(true);
      setShowUnlock(false);
      setPassword("");
      setError("");
    } else {
      setError("❌ Wrong Password");
    }
  };

  return (
    <>
      <motion.div
        className="apology-card"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        {unlocked && (
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            
          </motion.h2>
        )}

        <div
          style={{
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => {
            if (!unlocked) setShowUnlock(true);
          }}
        >
          <img
            src="/videos/bhoomi.jpeg"
            alt="Bhoomi"
            style={{
              width: "100%",
              height: "450px",
              objectFit: "contain",
              borderRadius: "15px",
              marginBottom: "20px",
              filter: unlocked ? "none" : "blur(12px)",
              transition: "0.4s",
            }}
          />

          {!unlocked && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "22px",
                background: "rgba(0,0,0,.25)",
                borderRadius: "15px",
              }}
            >
              🔒 Click to Unlock
            </div>
          )}
        </div>

        {unlocked && (
          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              fontSize: "15px",
              color: "white",
            }}
          >
            <b><i></i></b>
          </p>
        )}
      </motion.div>

      {showUnlock && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "20px",
              width: "330px",
              textAlign: "center",
            }}
          >
            <h3>🔐 Secret Unlock</h3>

            <input
  type="password"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  autoComplete="off"
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "14px 16px",
    marginTop: "18px",
    borderRadius: "12px",
    border: "2px solid rgba(255,64,129,.25)",
    outline: "none",
    fontSize: "16px", // <-- Zoom issue fix
    background: "#fff",
    color: "#222",
    transition: "0.3s ease",
  }}
/>

            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>
                {error}
              </p>
            )}

            <button
              onClick={handleUnlock}
              style={{
  marginTop: "12px",
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "14px",
  background: "#666",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
}}
            >
              Unlock
            </button>

            <button
              onClick={() => {
                setShowUnlock(false);
                setPassword("");
                setError("");
              }}
              style={{
  marginTop: "12px",
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "14px",
  background: "#666",
  color: "#fff",
  cursor: "pointer",
  fontSize: "16px",
}}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default ApologyCard;