import React from "react";
import { TiAdjustBrightness } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../styles/Home/index.module.scss";

type Props = {
  set: Function;
};

function LeftPanel({ set }: Props) {
  return (
    <div className={styles.LeftPanel}>
      <div onClick={() => set((s: boolean) => (s = !s))}>
        <TiAdjustBrightness size={25} />
      </div>
      <div>
        <FaFacebookF size={25} />
      </div>
      <div>
        <FaTwitter size={25} />
      </div>
      <div>
        <FaInstagram size={25} />
      </div>
    </div>
  );
}

export default LeftPanel;
