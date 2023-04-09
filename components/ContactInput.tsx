import React, { ReactNode } from "react";
import styles from "../styles/Contact/Contact.module.scss";
// "../../styles/Contact/Contact.module.scss";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  setValue: Function;
  focus: boolean;
  setFocus: Function;
  pass: boolean;
  textarea: boolean;
};

const ContactInput = ({
  label,
  placeholder,
  value,
  setValue,
  focus,
  setFocus,
  pass = false,
  textarea = false,
}: InputProps) => {
  return (
    <div className={`${styles.form__group}  ${focus ? styles.focused : ""}`}>
      <label htmlFor={label} className={styles.form__label}>
        {label} :
      </label>
      {textarea ? (
        <textarea
          className={styles.textarea}
          name={label}
          id={label}
          cols={30}
          rows={10}
          value={value}
          placeholder={placeholder}
          onClick={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          type={`${pass ? "password" : "text"}`}
          name={label}
          value={value}
          placeholder={placeholder}
          onClick={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};

export default ContactInput;
