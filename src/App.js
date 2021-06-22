import React from "react";
import TheHeader from "./components/TheHeader/TheHeader";
import AddContact from "./components/Contact/AddContact/AddContact";
import ContactList from "./components/Contact/ContactList/ContactList.js";

import styles from "./App.module.css";

function App() {
  const contacts = [
    {
      id: "1",
      name: "John Doe",
      email: "jd@gmail.com",
      number: "+1(786)954205",
    },
    {
      id: "2",
      name: "Syl Phrena",
      email: "syl@gmail.com",
      number: "+1(555)824354",
    },
  ];
  return (
    <div className={styles.Container}>
      <TheHeader />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
