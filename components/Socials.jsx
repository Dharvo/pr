import { firestore, ContactCollection } from "../firebase/firebaseConfig";
import React, { useState, useEffect } from "react";
// import styles from "../../styles/Admin/User.module.scss";
import { getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
// import ContactOption from "./ContactOption";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import { toast } from "react-toastify";
// import { constants } from "buffer";
// import Loading from "components/Loading";

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
const Socials = () => {
  const { data, error, isValidating } = useSWR("Contact", fetcher);
  //   const [fb, setFb] = useState("");
  //   const [ig, setIg] = useState("");
  //   const [tw, setTw] = useState("");
  //   const [gm, setGm] = useState("");

  const contactArray = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={25} />,
      //       //   placeholder: "https://facebook.com/ponle-richard",
      //       value: fb,
      //       set: setFb,
    },
    {
      name: "Instagram",
      //       value: ig,
      //       set: setIg,
      icon: <BsInstagram size={25} />,
      //       //   placeholder: "https://www.instagram.com/ponlerich.ard/",
    },
    {
      name: "Twitter",
      //       value: tw,
      //       set: setTw,
      icon: <BsTwitter size={25} />,
      //       // shown={true}
      //       //   placeholder: "https://twitter.com/ponle-richard",
    },
    {
      name: "Gmail",
      icon: <SiGmail size={25} />,
      //       value: gm,
      //       set: setGm,
      //       //   placeholder: "mailto://ponle-richard@gmail.com/",
    },
  ];

  useEffect(() => {
    // data && console.log(data[0]);
    // setTimeout(() => {
    //   data?.length === 0 ? toast.error(`Oops You're Offline...`) : null;
    // }, 2500);
  }, [isValidating]);
  if (error) {
    toast.error(`Socials Error: ${error?.message}`);
    return <></>;
  }
  if (!data) {
    return <></>;
  }
  return (
    <>
      {data.map((contact) => {
        //id, name, show, placeholder
        // console.log(`${data[0].instagram}`);
        var arrValue = contactArray.filter(
          (cont) => cont.name.toLowerCase() === contact.name.toLowerCase()
        );
        // var contValue = data.(
        //   (cont) => cont.name.toLowerCase() === contact.name.toLowerCase()
        // );
        // console.log(arrValue);
        if (contact.show)
          return (
            <div key={contact.name}>
              <Link href={contact.placeholder} target="_blank">
                {arrValue[0]?.icon}
              </Link>
            </div>
            //   :null
            //   <ContactOption
            //     key={contact.id}
            //     name={contact.name}
            //     //WHERE DATA.NAME === CONTACT
            //     value={arrValue[0]?.value}
            //     setValue={arrValue[0]?.set}
            //     icon={arrValue[0]?.icon}
            //     // shown={data[0]?.contact.name.toLowerCase()}
            //     shown={contact.show}
            //     placeholder={contact.placeholder}
            //   />
            //   <ContactOption
            //     key={contact.name}
            //     name={contact.name}
            //     value={contact.value}
            //     setValue={contact.set}
            //     icon={() => contact.icon}
            //     // shown={data[0]?.contact.name.toLowerCase()}
            //     shown={false}
            //     placeholder={contact.placeholder}
            //   />
          );
      })}
    </>
  );
};

export default Socials;

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
