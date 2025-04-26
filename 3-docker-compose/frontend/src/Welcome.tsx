import { useEffect, useState } from "react";

function Welcome() {
  const [dbTime, setDbTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setDbTime(data.dbTime);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>FullStack Docker Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {dbTime && <p>DB Time: {dbTime}</p>}
    </div>
  );
}

export default Welcome;
