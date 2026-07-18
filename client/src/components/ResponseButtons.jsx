import { useState } from "react";
import API from "../services/api";
import MessagePopup from "./MessagePopup";

function ResponseButtons({
  accepted,
  setAccepted,
  unlocked,
}) {
  const [loading, setLoading] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const sendResponse = async (action) => {
    try {
      setLoading(true);

      if (action === "accepted") {
        setAccepted(true);
        setShowBox(true);
        return;
      }

      await API.post("/respond", { action });

      alert("😒 Abhi bhi gussa hai");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Password unlock hone tak buttons show nahi honge
  if (!unlocked) {
    return null;
  }

  return (
    <>
      <div className="btn-container">
        <button
          disabled={loading}
          onClick={() => sendResponse("accepted")}
        >
          Send message😊
        </button>

        {/* <button
          className="reject-btn"
          disabled={loading}
          onClick={() => sendResponse("not_yet")}
        >
          😒 Abhi Nahi
        </button> */}
      </div>

      {accepted && (
        <h2 className="success-msg"></h2>
      )}

      {showBox && (
        <MessagePopup
          onClose={() => setShowBox(false)}
        />
      )}
    </>
  );
}

export default ResponseButtons;