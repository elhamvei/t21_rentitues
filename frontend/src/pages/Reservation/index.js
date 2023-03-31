import React, { useState, useEffect } from "react";
import Main from "../../components/Main";
import styles from "./index.module.scss";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { applianceDetail } from "../../modules/utils/Appliance";

import applianceImgDefault from "../../assets/img/appliance-default.png";
import arrowBack from "../../assets/svg/arrowBack.svg";

import formatCad from "../../modules/helper/formatCad";
import Swal from "sweetalert2";

const Reservaion = () => {
  const state = useSelector((state) => state);
  const params = useParams();
  const navigate = useNavigate();

  const { id, quantity } = params;
  const { userData } = state.auth;

  const [dataAppliance, setDataAppliance] = useState({});
  const [showImg, setShowImg] = useState("");
  const [applianceQuantity, setApplianceQuantity] = useState(parseInt(quantity));
  const [selectDate, setSelectDate] = useState(1);

  let dateArr = [];
  for (let i = 1; i <= 7; i++) {
    dateArr.push(i);
  }

  useEffect(() => {
    applianceDetail(id)
      .then((res) => {
        setDataAppliance(res.data.result);
        setShowImg(res.data.result.images[0].images);
      })
      .catch((err) => {
        if (err) {
          navigate(-1);
        }
      });
  }, [id, navigate]);

  const { appliance, location, price, stock, owner_id } = dataAppliance;

  useEffect(() => {
    if (owner_id === userData.id) {
      navigate(-1);
    }
  }, [navigate, owner_id, userData.id]);

  const totalPrice = price * applianceQuantity * selectDate;

  const reservationHandler = () => {
    if (applianceQuantity > stock) {
      Swal.fire({
        icon: "error",
        title: "There is an error ?",
        text: "out of stock",
      });
    } else {
      navigate(
        `/payment/appliance=${id}&quantity=${applianceQuantity}&day=${selectDate}&price%20perday=${price}Day&totalPrice=${totalPrice}`
      );
    }
  };

  return (
    <Main>
      <main className="container mt-3 mb-3">
        <section className={styles["back-home"]}>
          <img
            src={arrowBack}
            alt="avatar"
            className={styles["backArrow"]}
            onClick={() => {
              navigate(-1);
            }}
          />
          <h3 className={styles["reservation-text"]}>Reservation</h3>
        </section>

        <section className={`mt-5 ${styles["flex-reservation"]}`}>
          <div className={styles["right-flex-reservation"]}>
            <img
              src={`${process.env.REACT_APP_HOST}/${showImg}`}
              alt="avatar"
              className={styles["img-reservation"]}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `${applianceImgDefault}`;
              }}
            />
          </div>
          <div className={styles["left-flex-reservation"]}>
            <h3 className={styles["appliance-text-appliance-name"]}>{appliance}</h3>
            <h4 className={`mt-4 ${styles["location-text"]}`}>{location}</h4>
            <h5 className={`mt-4 ${styles["no-prepayment-text"]}`}>
              No Prepayment
            </h5>
            <div className={`mt-4 ${styles["flex-quantity"]}`}>
              <button
                className={styles["box-min"]}
                onClick={() => {
                  if (applianceQuantity > 1) {
                    setApplianceQuantity(applianceQuantity - 1);
                  }
                }}
              >
                -
              </button>
              <div className={styles["quantity"]}>
                <p className={styles["quantity-text"]}>{applianceQuantity}</p>
              </div>
              <button
                className={styles["box-plus"]}
                onClick={() => {
                  setApplianceQuantity(applianceQuantity + 1);
                }}
              >
                +
              </button>
            </div>
            <p className={`mt-4 ${styles["reservation-date-text"]}`}>
              Reservation Date :
            </p>
            <div className={`mt-3 ${styles["select-date-box"]}`}>
              <p className={styles["select-date-text"]}>Select Date</p>
            </div>
            <select
              className={`mt-3 ${styles["select-date-box"]}`}
              defaultValue={1}
              onChange={(e) => setSelectDate(e.target.value)}
            >
              {Array.isArray(dateArr) &&
                dateArr.length > 0 &&
                dateArr.map((data) => (
                  <React.Fragment>
                    <option
                      value={data}
                      className={styles["select-date-text"]}
                    >{`${data} Day`}</option>
                  </React.Fragment>
                ))}
            </select>
          </div>
        </section>

        <section
          className={`mt-3 ${styles["btn-reservation"]}`}
          onClick={reservationHandler}
        >
          {`Pay now : CAD ${formatCad(totalPrice)}`}
        </section>
      </main>
    </Main>
  );
};

export default Reservaion;
