import { firestore, ContactCollection } from "../../firebase/firebaseConfig";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Contact/Contact.module.scss";
import { getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import ContactOption from "./ContactOption";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaCopy } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { constants } from "buffer";
import Loading from "components/Loading";

const fetcher = async () => {
  const result = [];
  await getDocs(ContactCollection)
    .then((snapshot) => {
      snapshot.docs.forEach((snapshot) => {
        result.push({ id: snapshot.id, ...snapshot.data() });
      });
    })
    .catch(function (err) {
      console.log("Found error:", err);
    });
  return result;
};
const ContactMethod = () => {
  const { data, error, isValidating } = useSWR("Contact", fetcher);
  // const [fb, setFb] = useState("");
  // const [ig, setIg] = useState("");
  // const [tw, setTw] = useState("");
  // const [gm, setGm] = useState("");

  const contactArray = [
    {
      name: "Facebook",
      icon: () => <FaFacebookF />,
      details: "ponle-richard",
      // value: fb,
      // set: setFb,
    },
    {
      name: "Instagram",
      icon: () => <BsInstagram />,
      details: "@ponlerich.ard",
      // value: ig,
      // set: setIg,
    },
    {
      name: "Twitter",
      icon: () => <BsTwitter />,
      details: "@ponle-richard",
      // shown={true}
      // value: tw,
      // set: setTw,
    },
    {
      name: "Gmail",
      icon: () => <SiGmail />,
      details: "ponle-richard@gmail.com",
      // value: gm,
      // set: setGm,
    },
  ];

  useEffect(() => {
    // data && console.log(data[0]);
    // setTimeout(() => {
    //   data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
    // }, 2500);
  }, [isValidating]);
  if (error) {
    toast.error(`Error pulling Contacts: ${error?.message}`);
    return (
      <>
        <div className={styles.loading__div}>
          <Loading props={true} />
        </div>
      </>
    );
  }
  if (!data) {
    return (
      <>
        <div className={styles.loading__div}>
          <Loading props={true} />
        </div>
      </>
    );
  }
  return (
    <div className={styles.Contact_methods}>
      {/* <div className="contact__method">
          <FaVoicemail />
        </div>
        <div className="contact__method"></div>
        <div className="contact__method"></div>
      </div>
    </div> 
      <div
        title="Copy Twitter handle"
        //CLICK TO CopY CONTACT DETAILS
      >
        {/* <p> Twitter </p> 
        <div>
          <BsTwitter />

          </div>
          <span>@ponlerichard_</span>
      </div>
    */}
      {data?.map((contact) => {
        var arrValue = contactArray.filter(
          (cont) => cont.name.toLowerCase() === contact.name.toLowerCase()
        );
        console.log(arrValue);
        if (contact.show) {
          return (
            <div key={contact?.id}>
              {arrValue[0]?.icon()}
              <FaCopy />
              {/* <p> {arrValue[0]?.name} </p> */}
              <p> {contact?.name} </p>
              <span>{arrValue[0]?.details}</span>
            </div>
          );
        }
        return null;
        //id, name, show, placeholder
        // console.log(`${data[0].instagram}`);
        // console.log(arrValue[0]?.icon);
        // <ContactOption
        //   key={contact.id}
        //   name={contact.name}
        //   //WHERE DATA.NAME === CONTACT
        //   value={arrValue[0]?.value}
        //   setValue={arrValue[0]?.set}
        //   icon={arrValue[0]?.icon}
        //   // shown={data[0]?.contact.name.toLowerCase()}
        //   shown={contact.show}
        //   placeholder={contact.placeholder}
        // />
      })}
    </div>
  );
};

export default ContactMethod;

{
  /* 

				<ContactOption
					name='Instagram'
					value={ig}
					setValue={setIg}
					icon={() => <BsInstagram />}
					shown={false}
					placeholder={'http://instagram.com/ponle-richard'}
				/>
				<ContactOption
					name='Twitter'
					value={tw}
					setValue={setTw}
					icon={() => <BsTwitter />}
					shown={true}
					placeholder={'http://twitter.com/ponle-richard'}
				/>
				<ContactOption
					name='Gmail '
					value={gm}
					setValue={setGm}
					icon={() => <SiGmail />}
					shown={false}
					placeholder={'mailto://ponle-richard@gmail.com/'}
				/>
			</div>
            */
}
