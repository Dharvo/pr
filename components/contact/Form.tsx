import React, { useState } from "react";
import styles from "../../styles/Contact/Contact.module.scss";
import ContactInput from "components/ContactInput";
import { BiRename } from "react-icons/bi";

const Form = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Purpose, setPurpose] = useState("");
  const [focusName, setFocusName] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPurpose, setFocusPurpose] = useState(false);

  const MsgPonle = () => {
    console.log(name, Email, Purpose);
  };

  return (
    <div className={styles.Contact__form}>
      <form onSubmit={MsgPonle}>
        {/* <button> */}
        <ContactInput
          label="Name"
          placeholder="Please what's your Name ?"
          value={name}
          setValue={setName}
          focus={focusName}
          setFocus={setFocusName}
          pass={false}
          textarea={false}
        />
        <ContactInput
          label="Email"
          placeholder="Fill in Sender's Email"
          value={Email}
          setValue={setEmail}
          focus={focusEmail}
          setFocus={setFocusEmail}
          pass={false}
          textarea={false}
        />
        <ContactInput
          label="Purpose"
          placeholder="Kindly tell us why you want to reach out to Richard..."
          value={Purpose}
          setValue={setPurpose}
          focus={focusPurpose}
          setFocus={setFocusPurpose}
          pass={false}
          textarea={true}
        />
        <button className={styles.btn} type="submit">
          Message
        </button>
        {/* Email
            {/* <SiMinutemailer /> 
          </button> */}
      </form>
    </div>
  );
};

export default Form;

{
  /* <div className={styles.add__slide__form}>
          <button className="close" onClick={closeModal}>
            <CgClose />
          </button>
          <form onSubmit={createSlide}>
            <input type="file" name={name} id={`${name}-ID`} />
            <input
              type="submit"
              value="Submit"
              style={{
                cursor: uploading ? "not-allowed" : "pointer",
              }}
              disabled={uploading}
            />
          </form>

          {/* {imgUrl && <div>{imgUrl}</div>} */
}
{
  /* <> */
}
{
  /* <span *
          <div
            style={{
              width: `${progresspercent}%`,
              height: "3px",
              border: "0.5px solid #777",
              backgroundColor: "#333",
              borderRadius: "3px",
            }}
          />
          {imgUrl && (
            <div style={{ paddingTop: "10px" }}>Upload successful !</div>
          )}
          {/* </div> 
        </div> */
}
