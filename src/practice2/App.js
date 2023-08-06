import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function Hello() {
  useEffect(() => {
    console.log("created");
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  let [counter, setCounter] = useState(0);
  let [keyword, setKeyword] = useState("");
  let [show, setShow] = useState(true);
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShow = () => setShow((prev) => !prev);
  useEffect(() => {
    console.log("once");
  }, []);
  useEffect(() => {
    console.log("검색어");
  }, [keyword]);

  return (
    <div>
      {show ? <Hello /> : null}
      <button onClick={onShow}>{show ? "숨기기" : "보이기"}</button>
      <br />
      <input value={keyword} onChange={onChange}></input>
      <h1 className={styles.title}>Kitty 홍루 {counter}</h1>
      <Button text={"홍루루"} onClick={onClick} />
    </div>
  );
}

export default App;
