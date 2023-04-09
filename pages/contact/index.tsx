import React from "react";
import styles from "../../styles/Contact/Contact.module.scss";
import { SiMinutemailer } from "react-icons/si";
import { FaVoicemail } from "react-icons/fa";
import Map from "../../components/Map";
import ContactMethod from "../../components/contact/ContactMethod";
import Form from "components/contact/Form";
type locationType = {
  address: string;
  lat: number;
  lng: number;
};

const Contact: React.FC = () => {
  //   const defaultProps = {
  // 	center: {
  // 	  lat: 10.99835602,
  // 	  lng: 77.01502627,
  // 	},
  // 	zoom: 11,
  //   };
  // console.log(data);
  {
    /* {data} */
  }
  return (
    <div id={styles.Contact}>
      {/* <Map data={undefined} /> */}
      <Map location={location} zoomLevel={1.5} />
      {/* {data} */}

      <Form />
      <ContactMethod />
    </div>
  );
};

export default Contact;
