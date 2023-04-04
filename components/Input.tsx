import React, { ReactNode } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  setValue: Function;
  focus: boolean;
  setFocus: Function;
  icon: ReactNode;
  pass: boolean;
  textare: boolean;
};

const Input = ({
  label,
  placeholder,
  value,
  setValue,
  focus,
  setFocus,
  icon,
  pass = false,
  textare = false,
}: InputProps) => {
  return (
    <div className="form__group">
      <label
        htmlFor={label}
        className={`form__label ${focus ? "focused" : ""}`}
      >
        {label}
      </label>
      {textare ? (
        <textarea
          className="textarea"
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
      <span>{icon}</span>
    </div>
  );
};

export default Input;
