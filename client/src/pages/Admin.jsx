import { useEffect, useState } from "react";
import API from "../services/api";

function Admin() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const { data } =
        await API.get("/responses");

      setResponses(data.responses);
    } catch (error) {
      console.log(error);
    }
  };

  const acceptedCount =
    responses.filter(
      (item) =>
        item.action === "accepted"
    ).length;

  const rejectedCount =
    responses.filter(
      (item) =>
        item.action === "not_yet"
    ).length;

  return (
    <div className="admin-page">
      <h1>❤️ Bhoomi Dashboard ❤️</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h2>{acceptedCount}</h2>
          <p>Accepted ❤️</p>
        </div>

        <div className="stat-card">
          <h2>{rejectedCount}</h2>
          <p>Not Yet 😒</p>
        </div>

        <div className="stat-card">
          <h2>{responses.length}</h2>
          <p>Total Responses</p>
        </div>
      </div>

      <div className="response-list">
        {responses.map((item) => (
          <div
            key={item._id}
            className="response-card"
          >
            <h3>
              {item.action ===
              "accepted"
                ? "❤️ Accepted"
                : "😒 Not Yet"}
            </h3>

            <p>
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;