import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

import applianceImgDefault from "../../assets/img/appliance-default.png";

const CardAppliance = ({ name, id, image }) => {
  const navigate = useNavigate();
  return (
    <main>
      {/* <section style={{ backgroundImage: `url(${applianceImgDefault})` }} className={styles['img-appliance-default']}
                onClick={() => { navigate(`/appliance/detail/${id}`) }}>
                <div className={styles['text-block']}>
                    <p className={`${styles['location-name']} ${styles['opacity']}`}>
                        {name}
                    </p>
                </div>
            </section> */}

      <div
        className={styles["img-appliance"]}
        onClick={() => {
          navigate(`/appliance/detail/${id}`);
        }}
      >
        <img
          src={`${process.env.REACT_APP_HOST}/${image}`}
          className={styles["img-appliance-default"]}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = `${applianceImgDefault}`;
          }}
          alt="avatar"
        />
        <div className={styles["text-block"]}>
          <p className={`${styles["location-name"]} ${styles["opacity"]}`}>
            {name}
          </p>
        </div>
      </div>

      {/* <section style={
                { backgroundImage: `url(${process.env.REACT_APP_HOST}/${image})` }
            } className={styles['img-appliance']}
                onClick={() => { navigate(`/appliance/detail/${id}`) }}>
                <div className={styles['text-block']}>
                    <p className={`${styles['location-name']} ${styles['opacity']}`}>
                        {name}
                    </p>
                </div>
            </section> */}
    </main>
  );
};

export default CardAppliance;
