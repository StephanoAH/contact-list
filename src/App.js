import React from "react";
import TheHeader from "./components/TheHeader/TheHeader";
import AddContact from "./components/Contact/AddContact/AddContact";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Container}>
      <TheHeader />
      <AddContact />
    </div>
  );
}

export default App;
