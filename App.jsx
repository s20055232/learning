import Card from "./components/Card";
import Header from "./components/Header";
import { useState } from "react";
import destinations from "./data";

export default function App() {
  const [index, setIndex] = useState(0);
  const current = destinations[index];
  return (
    <>
      <Header />
      <div className="carousel">
        <button onClick={() => setIndex(index - 1)} disabled={index === 0}>
          Prev
        </button>
        <Card {...current} />

        <button
          onClick={() => setIndex(index + 1)}
          disabled={index === destinations.length - 1}
        >
          Next
        </button>
      </div>
    </>
  );
}
