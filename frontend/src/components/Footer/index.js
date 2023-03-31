import React from "react";
import styles from "./index.module.css";

import twitter from "../../assets/svg/twitter-logo.svg";
import facebook from "../../assets/svg/facebook-logo.svg";
import instagram from "../../assets/svg/instagram-logo.svg";
import linkedIn from "../../assets/svg/linkedIn-logo.svg";
import youtube from "../../assets/svg/youtube-logo.svg";

const Footer = () => {
  return (
    <footer
      className={`container-fluid ${styles["bg-footer"]} ${styles["space-top-footer"]}`}
    >
      <section className="container">
        <div className="row">
          <div className="col-sm">

            <p className={styles["plan"]}>
              
            </p>
            <p className={styles["copyright"]}>
              ©2023 Appliance Rental Center. All rights reserved
            </p>

            <p>
            Group T21
            </p>

            <p>
              Computer Programming and Analysis Program T177 
            </p>
          </div>
        
        </div>
      </section>

      <section className={styles["bg-icon-footer"]}>
        <div className={`row ${styles["items-justify"]}`}>
          <div className="col-1">
            <a href="https://twitter.com">
              <img src={twitter} alt="twitter" className={styles["logo"]} />
            </a>
          </div>
          <div className="col-1">
            <a href="https://facebook.com">
              <img src={facebook} alt="facebook" className={styles["logo"]} />
            </a>
          </div>
          <div className="col-1">
            <a href="https://instagram.com">
              <img src={instagram} alt="instagram" className={styles["logo"]} />
            </a>
          </div>
          <div className="col-1">
            <a href="https://linkedin.com">
              <img src={linkedIn} alt="linkedin" className={styles["logo"]} />
            </a>
          </div>
          <div className="col-1">
            <a href="https://youtube.com">
              <img src={youtube} alt="youtube" className={styles["logo"]} />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
