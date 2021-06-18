import React from "react";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  return (
    (
      <section>
        <div className="App">
          <Cards />
        </div>
      </section>
    ),
    (
      <section>
        <div className="App">
          <Cards />
        </div>
      </section>
    ),
    (
      <section>
        <div className="App">
          <Cards />
        </div>
      </section>
    )
  );
}

export default App;
