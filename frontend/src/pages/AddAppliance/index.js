import React, { useState, useEffect } from "react";
import Main from "../../components/Main";
import styles from "./index.module.scss";

import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

import arrowBack from "../../assets/svg/arrowBack.svg";
import addItem from "../../assets/img/addImgDefault.jpg";
import addMore from "../../assets/img/add-more.png";
import { Link, useNavigate } from "react-router-dom";

import {
  getLocationByRenterId,
  postLocationbyRenterId,
} from "../../modules/utils/location";
import { useSelector, useDispatch } from "react-redux";

import {
  listAppliancePopularAction,
  listApplianceKitchenAction,
  listApplianceElectronicAction,
  listApplianceYardAction,
} from "../../redux/actions/listAppliance";
import {
  paramsPopulerAppliance,
  paramKitchenAppliance,
  paramElectronicAppliance,
  paramYardAppliance,
} from "../../modules/helper/listAppliance";
import { postAppliance } from "../../modules/utils/Appliance";

const AddAppliance = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [applianceName, setApplianceName] = useState("");
  const [selectLocation, setSelectLocation] = useState("");
  const [applianceDesc, setApplianceDesc] = useState("");
  const [appliancePrice, setAppliancePrice] = useState("");
  const [applianceStock, setApplianceStock] = useState(1);
  const [applianceType, setApplianceType] = useState("");

  const [locationArr, setLocationArr] = useState([]);
  const [modalAddLocation, setModalAddLocation] = useState(false);
  const [addLocation, setAddLocation] = useState("");

  const [showImgAppliance1, setShowImgAppliance1] = useState(addItem);
  const [showImgAppliance2, setShowImgAppliance2] = useState(addItem);
  const [showImgAppliance3, setShowImgAppliance3] = useState(addMore);
  const [imgFile1, setImgFile1] = useState("");
  const [imgFile2, setImgFile2] = useState("");
  const [imgFile3, setImgFile3] = useState("");

  const { auth } = state;
  const { token } = auth;

  useEffect(() => {
    getLocationByRenterId(token)
      .then((res) => {
        setLocationArr(res.data.result);
      })
      .catch(({ ...err }) => {
        console.log(err);
      });
    if (selectLocation === "add on") {
      setModalAddLocation(true);
    } else {
      setModalAddLocation(false);
    }
  }, [token, selectLocation]);

  const addLocationHandler = () => {
    const body = {
      name: addLocation,
    };
    postLocationbyRenterId(body, token)
      .then((res) => {
        Swal.fire("Success", `${res.data.result.msg}`, "success");
        setAddLocation("");
        setSelectLocation("");
      })
      .catch(({ ...err }) => {
        toast.error(`${err.response.data.result}`, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const btnPlus = () => {
    setApplianceStock(applianceStock + 1);
  };

  const btnMin = () => {
    if (applianceStock > 1) {
      setApplianceStock(applianceStock - 1);
    }
  };

  const imageHandler1 = (e) => {
    const fileImg = e.target.files[0];
    setShowImgAppliance1(URL.createObjectURL(fileImg));
    setImgFile1(fileImg);
  };
  const imageHandler2 = (e) => {
    const fileImg = e.target.files[0];
    setShowImgAppliance2(URL.createObjectURL(fileImg));
    setImgFile2(fileImg);
  };
  const imageHandler3 = (e) => {
    const fileImg = e.target.files[0];
    setShowImgAppliance3(URL.createObjectURL(fileImg));
    setImgFile3(fileImg);
  };

  const saveHandler = () => {
    const body = new FormData();
    body.append("name", applianceName);
    body.append("description", applianceDesc);
    body.append("locations_id", selectLocation);
    body.append("types_id", applianceType);
    body.append("stock", applianceStock);
    body.append("price", appliancePrice);
    if (imgFile1 !== "") body.append("images", imgFile1);
    if (imgFile2 !== "") body.append("images", imgFile2);
    if (imgFile3 !== "") body.append("images", imgFile3);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-secondary",
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure add appliance?",
        // text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes, add item",
        cancelButtonText: "No, Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          postAppliance(body, token)
            .then((res) => {
              Swal.fire(
                "Success Add Appliance",
                `${res.data.result.msg}`,
                "success"
              );
              dispatch(listAppliancePopularAction(paramsPopulerAppliance));
              dispatch(listApplianceKitchenAction(paramKitchenAppliance));
              dispatch(listApplianceElectronicAction(paramElectronicAppliance));
              dispatch(listApplianceYardAction(paramYardAppliance));
              setTimeout(() => {
                navigate("/");
              }, 1500);
            })
            .catch(({ ...err }) => {
              toast.error(`${err.response.data.result.err}`, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your profile cancel change",
            "info"
          );
        }
      });
  };

  return (
    <Main>
      <main className="container mt-3 mb-5">
        <section className={`${styles["back-home"]} justify-content-between`}>
          <Link to={"/"}>
            <img
              src={arrowBack}
              alt="avatar"
              className={styles["back-arrow"]}
            />
          </Link>
          <h3 className={styles["add-new-item-text"]}>Add new item</h3>
        </section>

        <section className={`mt-4 ${styles["flex-main"]}`}>
          <div className={styles["left"]}>
            <label for="file-input-1" className={styles["label-img-one"]}>
              <img
                src={showImgAppliance1}
                alt="avatar"
                className={styles["img-one"]}
              />
              <input
                type={"file"}
                style={{ display: "none" }}
                id="file-input-1"
                onChange={(e) => imageHandler1(e)}
              />
            </label>
            <div className={styles["img-flex"]}>
              <label for="file-input-2" className={styles["label-img-two"]}>
                <img
                  src={showImgAppliance2}
                  alt="avatar"
                  className={styles["img-two"]}
                />
                <input
                  type={"file"}
                  style={{ display: "none" }}
                  id="file-input-2"
                  onChange={(e) => imageHandler2(e)}
                />
              </label>
              <label for="file-input-3" className={styles["label-img-two"]}>
                <img
                  src={showImgAppliance3}
                  alt="avatar"
                  className={styles["img-two"]}
                />
                <input
                  type={"file"}
                  style={{ display: "none" }}
                  id="file-input-3"
                  onChange={(e) => imageHandler3(e)}
                />
              </label>
            </div>
          </div>
          <div className={styles["right"]}>
            <input
              type={"text"}
              placeholder="Name Appliance"
              className={styles["input"]}
              onChange={(e) => setApplianceName(e.target.value)}
            />
            <select
              className={styles["input"]}
              defaultValue=""
              style={{ color: "#8091BE" }}
              onChange={(e) => setSelectLocation(e.target.value)}
            >
              <option value={""} disabled={true}>
                Location
              </option>
              {Array.isArray(locationArr) &&
                locationArr.length > 0 &&
                locationArr.map((data) => (
                  <React.Fragment key={data.id}>
                    <option value={data.id}>{data.name}</option>
                  </React.Fragment>
                ))}
              <option value={"add on"}>Add New Location +</option>
            </select>
            <input
              type={"text"}
              placeholder="Description"
              className={styles["input"]}
              onChange={(e) => setApplianceDesc(e.target.value)}
            />
            <label className={styles["label"]}>Price : </label>
            <input
              type={"number"}
              placeholder="Type the price"
              className={styles["input-box"]}
              onChange={(e) => setAppliancePrice(e.target.value)}
            />
            <label className={styles["label"]}>Status :</label>
            <select
              className={styles["input-box"]}
              style={{ color: "#8091BE" }}
            >
              <option disabled>Select Status</option>
              <option style={{ color: "green" }}>Available</option>
              <option style={{ color: "red" }}>Full Booked</option>
            </select>
            <div className={styles["stock-flex"]}>
              <label className={styles["label"]}>Stock :</label>
              <div className={styles["box-flex"]}>
                <div className={styles["box-plus"]} onClick={btnPlus}>
                  +
                </div>
                <p>{applianceStock}</p>
                <div className={styles["box-min"]} onClick={btnMin}>
                  -
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["btn-flex"]}>
          <select
            className={styles["btn-item-to"]}
            defaultValue=""
            onChange={(e) => setApplianceType(e.target.value)}
          >
            <option value={""} disabled>
              Choose category
            </option>
            <option value={1}>Kitchen</option>
            <option value={2}>Electronic</option>
            <option value={3}>Yard</option>
          </select>
          <button className={styles["btn-save-item"]} onClick={saveHandler}>
            Save item
          </button>
        </section>

        <Modal
          show={modalAddLocation}
          onHide={() => {
            setSelectLocation("");
            setAddLocation("");
          }}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Location
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Name Location :</h5>
            <input
              type={"text"}
              style={{ width: "100%" }}
              onChange={(e) => setAddLocation(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-secondary"
              onClick={() => {
                setSelectLocation("");
                setAddLocation("");
              }}
            >
              Cancel
            </Button>
            <Button className="btn-warning" onClick={addLocationHandler}>
              Add Location
            </Button>
          </Modal.Footer>
        </Modal>

        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </Main>
  );
};

export default AddAppliance;
