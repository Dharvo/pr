import React from "react";
// import { Icon } from '@iconify/react'
import styles from "../styles/Contact/Contact.module.scss";
import { MdLocationPin } from "react-icons/md";
// import locationIcon from '@iconify/icons-mdi/map-marker'

// };
// const LocationPin = () => {
//   return <div>LocationPin</div>;

// {
//     My Marker

// lat={location.lat}
// lng={location.lng}
// text={`${location?.address} at ${zoomLevel} View`}
// //     </div> */
// const location: locationType = {
//   // address: "1600 Amphitheatre Parkway, Mountain View, california.",
//   address: "14 Akinlawani Street, Iyana Poka Ayobo Ipajaj Lagos, NG.",
//   lat: 37.42216,
//   lng: -122.08427,
// };
const LocationPin = () => {
  return (
    <div className={styles.pin}>
      {/* // <div lat={59.955413} lng={30.337844}> */}
      {/* // <div lat={lat} lng={lng}> */}
      <MdLocationPin />

      {/* <Icon icon={locationIcon} className="pin-icon" /> */}
      <p className={styles.pin_text}>
        14 Akinlawani Street, Iyana Poka Ayobo Ipaja Lagos, NG.
      </p>
    </div>
  );
};
export default LocationPin;
