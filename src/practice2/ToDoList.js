import { useState, useEffect } from "react";

function App() {
  let [toDo, setToDo] = useState("");
  let [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    else {
      setToDos((currentArray) => [toDo, ...currentArray]);
      setToDo("");
    }
  };
  return (
    <div>
      <h1>length: {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="입력"
        ></input>
        <button>Submit</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
