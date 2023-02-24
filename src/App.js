import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [click, setClick] = useState(false);
  const [input, setinput] = useState("");
  const [age, setage] = useState("");
  const addPerson = () => {
    const nnew = {
      id: people.length + 1,
      name: input,
      age: age,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    };

    setPeople([...people, nnew]);
    // console.log(input);
    setage("");
    setinput("");
    setClick(false);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
        <button onClick={() => setClick(true)}>Add person</button>
        {click && (
          <>
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
            <button onClick={() => addPerson()}>add</button>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
