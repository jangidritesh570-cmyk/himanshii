import { useState } from "react";
import MessagePopup from "./MessagePopup";

function ResponseButtons({
  accepted,
  setAccepted,
  unlocked,
}) {
  const [loading, setLoading] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const handleSendMessage = () => {
    setLoading(true);
    setAccepted(true);
    setShowBox(true);
    setLoading(false);
  };

  // Password unlock hone tak button show nahi hoga
  if (!unlocked) {
    return null;
  }

  return (
    <>
      <div className="btn-container">
        <button
          disabled={loading}
          onClick={handleSendMessage}
        >
          Send Message 😊
        </button>
      </div>

      {accepted && <h2 className="success-msg"></h2>}

      {showBox && (
        <MessagePopup
          onClose={() => setShowBox(false)}
        />
      )}
    </>
  );
}

export default ResponseButtons;