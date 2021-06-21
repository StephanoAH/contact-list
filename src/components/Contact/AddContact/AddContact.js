import React from "react";

import styles from "./AddContact.module.css";

function AddContact() {
  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>Add contact</h2>
      {/* NOTE: Name */}
      <form className={styles.Form}>
        <label className={styles.Label} htmlFor="name">
          Name
        </label>
        <input
          className={styles.Input}
          id="name"
          type="text"
          placeholder="John Doe"
        />
        {/* NOTE: Email */}
        <label className={styles.Label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.Input}
          id="email"
          type="email"
          placeholder="jd@email.com"
        />
        {/* NOTE: Number */}
        <label className={styles.Label} htmlFor="number">
          Number
        </label>
        <input
          className={styles.Input}
          id="number"
          type="number"
          placeholder="78546923456"
        />
        <button className={styles.AddBtn}>Add!</button>
      </form>
    </div>
  );
}

export default AddContact;
