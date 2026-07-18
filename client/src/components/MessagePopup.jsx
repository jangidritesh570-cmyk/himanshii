import { useState } from "react";
import API from "../services/api";

function MessagePopup({ onClose }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const saveMessage = async () => {
    try {
      if (!message.trim()) {
        alert("Please message likho ❤️");
        return;
      }

      setLoading(true);

      await API.post("/respond", {
        action: "accepted",
        message: message.trim(),
      });

      alert("send message to ritesh");

      setMessage("");

      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.log(error);

      alert("Message failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="message-popup">
      <h2>💌 Himanshi ka Message</h2>

      <textarea
        placeholder="Himanshi kuch likh yrr mere liye😂"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={saveMessage}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message ❤️"}
      </button>

      <button onClick={onClose}>
        Close ❌
      </button>
    </div>
  );
}

export default MessagePopup;