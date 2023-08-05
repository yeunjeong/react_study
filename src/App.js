import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Kitty 홍루</h1>
      <Button text={"홍루루"} />
    </div>
  );
}

export default App;
