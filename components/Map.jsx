import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import Loading from "./Loading";
import useSWR from "swr";
import styles from "../styles/Contact/Contact.module.scss";
import { toast } from "react-toastify";
import Image from "next/image";

const fetcher = async () => {
  // console.log("Portfolios", PortfoliosCollection);
  // async (pokemon: string) => {
  // const res = await axios.get<SinglePokemonResponse>(
  // 'https://pokeapi.co/api/v2/pokemon/' + pokemon
  // );
  // return {

  const result = await fetch(
    `https://www.mapquestapi.com/staticmap/v5/map?key=fahWCuUzRgnnazfcKvZOhMVY1oXLboLO&center=Lagos,Ng&size=1100,500@2x&defaultMarker=marker&type=light`
    // `https://www.mapquestapi.com/staticmap/v5/map?key=fahWCuUzRgnnazfcKvZOhMVY1oXLboLO&center=Lagos,Ng&size=700,400@1x&defaultMarker=marker&type=light`
    //  map?key=KEY&center=San+Francisco,CA   &zoom=14&type=light
    // md-3B5998-22407F
    // ,CA|marker-lg-D51A1A-A20000||Sacramento,CA&size=@2x&defaultMarker=marker-md-3B5998-22407F
  );
  // const data = await result.json();
  // console.log(result);
  return <img src={result.url} alt="Map Loading..." />;
  // console.log();
  //  result;
};

const Map = ({ location, zoomLevel }) => {
  // const Map = ({ data }) => (
  // const Map = ({ data }) => {
  const { data, error, isValidating } = useSWR("map-api", fetcher);
  // console.log("data", data);

  // useEffect(() => {}, [isValidating]);

  if (error) {
    // if (error || !data) {
    // toast.error(`An Error Pulling map-api: ${error?.message}`);
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
  // <div className="map">
  {
    /* <h2 className="map-h2">Come Visit Us At Our Campus</h2> */
  }

  {
    /* // Important! Always set the container height explicitly */
  }
  return (
    <div className={styles.Map}>
      {/* <div style={{ height: "100vh", width: "100%" }}> */}
      <>{data}</>
      {/* <Image
          src={data?.url}
          alt={`Image ${data?.type}`}
          width={500}
          height={500}
        />

        <img
          // style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 25%);"
          // src=
          src={data?.url}
          // "https://www.mapquestapi.com/staticmap/v5/map?key=fahWCuUzRgnnazfcKvZOhMVY1oXLboLO&center=New+York&size=1100,500@2x"
          width={1366}
          height={620}
        /> */}
      {/* {data} */}
      {/* <div className="google-map"> */}
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        //   bootstrapURLKeys={{ key: "" }}
        //   defaultCenter={defaultProps.center}
        //   defaultZoom={defaultProps.zoom}
      >
      //   text={"location.address"}
    </GoogleMapReact> */}
      <LocationPin />
    </div>
    // </div>
  );

  // const Map = () => {
  //   return (
  //     <div>Map</div>
  //   )
  // }

  // export default function Map ({ text }) {return <div>{text}</div>};

  // export default function Map() {

  //       <GoogleMapReact
  //         bootstrapURLKeys={{ key: "" }}
  //         defaultCenter={defaultProps.center}
  //         defaultZoom={defaultProps.zoom}
  //       >

  //         {/* text="My Marker" */}
  //       </GoogleMapReact>
  //     </div>
  //   );
  // }

  // This gets called on every request
  // export async function getServerSideProps() {
  //   // Fetch data from external API
  //   const res = await fetch(
  //     `https://www.mapquestapi.com/staticmap/v5/map?key=fahWCuUzRgnnazfcKvZOhMVY1oXLboLO&center=New+York&size=1100,500@2x`
  //   );
  //   const data = await res.json();
  //   console.log(data);
  //   // Pass data to the page via props
  //   return { props: { data } };
};

export default Map;

// function Page({ data }) {
//   // Render data...
// }

// export default Page
