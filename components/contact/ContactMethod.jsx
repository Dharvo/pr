import { firestore, ContactCollection } from "../../firebase/firebaseConfig";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Contact/Contact.module.scss";
import { getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import ContactOption from "./ContactOption";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
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
  const [fb, setFb] = useState("");
  const [ig, setIg] = useState("");
  const [tw, setTw] = useState("");
  const [gm, setGm] = useState("");

  const contactArray = [
    {
      name: "Facebook",
      icon: () => <FaFacebookF />,
      //   placeholder: "https://facebook.com/ponle-richard",
      value: fb,
      set: setFb,
    },
    {
      name: "Instagram",
      value: ig,
      set: setIg,
      icon: () => <BsInstagram />,
      //   placeholder: "https://www.instagram.com/ponlerich.ard/",
    },
    {
      name: "Twitter",
      value: tw,
      set: setTw,
      icon: () => <BsTwitter />,
      // shown={true}
      //   placeholder: "https://twitter.com/ponle-richard",
    },
    {
      name: "Gmail",
      icon: () => <SiGmail />,
      value: gm,
      set: setGm,
      //   placeholder: "mailto://ponle-richard@gmail.com/",
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
    </div> */}
      {/* {data.map((contact) => {
        //id, name, show, placeholder
        // console.log(`${data[0].instagram}`);
        var arrValue = contactArray.filter(
          (cont) => cont.name.toLowerCase() === contact.name.toLowerCase()
        );
        // console.log(arrValue[0]?.icon);
        return (
          <ContactOption
            key={contact.id}
            name={contact.name}
            //WHERE DATA.NAME === CONTACT
            value={arrValue[0]?.value}
            setValue={arrValue[0]?.set}
            icon={arrValue[0]?.icon}
            // shown={data[0]?.contact.name.toLowerCase()}
            shown={contact.show}
            placeholder={contact.placeholder}
          />
         
        );
      })} */}
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
