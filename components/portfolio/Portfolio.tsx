import ErrorBoundary from "components/ErrorBoundary";
import React, { useState } from "react";
import styles from "../../styles/Admin/User.module.scss";
import PortfolioWrapper from "./PortfolioWrapper";
import { BsPlusLg } from "react-icons/bs";
import AddFolder from "./AddFolder";
const Portfolio: React.FC = () => {
  const [show, setShown] = useState<boolean>(false);

  return (
    <section className={styles.Module}>
      <div className={styles.flexMe}>
        <h3>Portfolio</h3>
        <button
          className={styles.addFolder}
          title="Add New Portfolio"
          onClick={() => {
            setShown(!show);
          }}
        >
          <BsPlusLg />
        </button>
      </div>
      <hr />
      <ErrorBoundary>
        <PortfolioWrapper />
        <AddFolder show={show} setShown={setShown} />
      </ErrorBoundary>
    </section>
  );
};

export default Portfolio;
