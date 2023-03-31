import React from "react";
import styles from "../../styles/Admin/User.module.scss";
import CrossNav from "./CrossNav";
import img6 from "../../assests/IMG_1772.jpg";
import img5 from "../../assests/IMG_1773.jpg";
import img4 from "../../assests/IMG_0850.jpg";
import img3 from "../../assests/IMG_0849.jpg";
import img2 from "../../assests/IMG_0851.jpg";
import img1 from "../../assests/IMG_0855.jpg";
import { RiDeleteBinLine } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Loading from "components/Loading";
import Modal from "components/Modal";
import AddPort from "./AddPort";
import DelPort from "./DelPort";
import { ToastContainer } from "react-toastify";
type PortProps = {
  id: string;
  name: string;
  data: string[];
  // data: {}
};

const Port = ({ id, name, data }: PortProps) => {
  const [show, setShown] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(false);
  const [imgToDelete, setImgToDelete] = useState<string>("");

  // onClick={() => deleteSlide(slideId)}
  // console.log('slideObj', imgLink)
  return (
    <div key={id} className={styles.portfolio__wrapper}>
      <ToastContainer />

      {/* <CrossNav name={name} /> */}
      {data?.map((portImg, i) => {
        if (portImg === undefined || portImg === "") {
          return (
            <div key={id} className={styles.image__loader}>
              <Loading props={true} />
            </div>
          );
        } else {
          return (
            <div key={i} className={styles.port__image}>
              <Image
                className={styles.slides__image}
                src={portImg}
                alt={`${portImg}-img`}
                // placeholder="blur"
                width={700}
                height={700}
              />
              <button
                onClick={() => {
                  setImgToDelete(portImg);
                  setDel(!del);
                }}
                className={styles.slides__action__delete}
              >
                <RiDeleteBinLine />
              </button>
              {/* <DeleteSlide docId={slideId} show={del} setShown={setDel} name={name} /> */}
            </div>
          );
        }
      })}
      {/* <Image className={styles.slides__image} src={img5} alt='img' placeholder='blur' />
					<Image className={styles.slides__image} src={`${img${i}}`} alt='img2' placeholder='blur' />
				<Image className={styles.slides__image} src={img1} alt='img3' placeholder='blur' />
				<Image className={styles.slides__image} src={img6} alt='img3' placeholder='blur' /> */}
      <div className={styles.default} onClick={() => setShown(!show)}>
        <BsPlusLg />
      </div>
      <AddPort
        key={id}
        id={id}
        portName={name}
        show={show}
        setShown={setShown}
      />
      <DelPort
        docId={id}
        img={imgToDelete}
        name={name}
        show={del}
        setShown={setDel}
      />
      {/* </Modal> */}
    </div>
  );
};

export default Port;
