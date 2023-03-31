import React, { useState } from "react";
import { IconBaseProps } from "react-icons";
import styles from "../../styles/Admin/User.module.scss";
import ContactWrapper from "./ContactWrapper";

const AdminContact = () => {
  return (
    <section className={styles.Module}>
      <h3>Contact</h3>
      <hr />
      <ContactWrapper />
    </section>
  );
};

export default AdminContact;
