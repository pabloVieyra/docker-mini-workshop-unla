import { useEffect, useState } from "react";

function App() {
  const [dbTime, setDbTime] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => setDbTime(data.dbTime));
  }, []);

  return (
    <div>
      <h1>FullStack Docker Example</h1>
      {dbTime && <p>DB Time: {dbTime}</p>}
    </div>
  );
}

export default App;
