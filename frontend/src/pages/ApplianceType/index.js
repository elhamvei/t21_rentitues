import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Main from "../../components/Main";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import searchIcon from "../../assets/svg/search.svg";
import CardAppliance from "../../components/CardAppliance";
import applianceImgDefault from "../../assets/img/appliance-default.png";

import {
  listApplianceKitchenAction,
  listApplianceElectronicAction,
  listApplianceYardAction,
  listAppliancePopularAction,
} from "../../redux/actions/listAppliance";

import {
  paramKitchenAppliance,
  paramElectronicAppliance,
  paramYardAppliance,
  paramsPopulerAppliance,
} from "../../modules/helper/listAppliance";

const ApplianceType = () => {
  const state = useSelector((state) => state);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { listKitchenHome, listElectronicHome, listYardHome, listPopularAppliance } =
    state.listAppliance;

  useEffect(() => {
    dispatch(listAppliancePopularAction(paramsPopulerAppliance)).catch((err) => {
      if (err) {
        navigate("/error_server");
      }
    });
    dispatch(listApplianceKitchenAction(paramKitchenAppliance)).catch((err) => {
      if (err) {
        navigate("/error_server");
      }
    });
    dispatch(listApplianceElectronicAction(paramElectronicAppliance)).catch((err) => {
      if (err) {
        navigate("/error_server");
      }
    });
    dispatch(listApplianceYardAction(paramYardAppliance)).catch((err) => {
      if (err) {
        navigate("/error_server");
      }
    });
  }, [dispatch, navigate]);

  const searchHandler = () => {
    navigate(`/view-more?search=${search}&type=&location=`);
  };
  const viewAllPopularHandler = () => {
    navigate(`/view-more?search=&type=&location=&by=rating&order=desc`);
  };
  const viewAllKitchenHandler = () => {
    navigate("/view-more?search=&type=1&location=&by=id&order=desc");
  };
  const viewAllElectronicHandler = () => {
    navigate("/view-more?search=&type=2&location=&by=id&order=desc");
  };
  const ViewAllYardHandler = () => {
    navigate("/view-more?search=&type=3&location=&by=id&order=desc");
  };

  return (
    <Main>
      <main className={`container ${styles["top-appliance-type"]}`}>
        <form onSubmit={searchHandler}>
          <input
            type={"text"}
            placeholder="Search appliance (ex. type appliance, appliance name, location name)"
            className={styles["search-appliance"]}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="avatar"
            className={styles["search"]}
            onClick={searchHandler}
          />
        </form>

        <section className="container">
          <div className="row justify-content-between">
            <div className="col-sm-1">
              <h2 className={styles["popular"]}>Popular Town</h2>
            </div>
            <div className="col-sm-1">
              <p className={styles["view-all"]} onClick={viewAllPopularHandler}>
                View All {">"}
              </p>
            </div>
          </div>

          <div className={styles["popular-town-list"]}>
            {listPopularAppliance !== [] ? (
              <React.Fragment>
                {Array.isArray(listPopularAppliance) &&
                  listPopularAppliance.length > 0 &&
                  listPopularAppliance.map((data) => (
                    <React.Fragment key={data.id}>
                      <CardAppliance
                        id={data.id}
                        image={
                          data.image !== null ? data.image : applianceImgDefault
                        }
                        name={data.name}
                      />
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h3
                  style={{
                    position: "relative",
                    marginTop: 43,
                  }}
                >
                  Coming Soon
                </h3>
              </React.Fragment>
            )}
          </div>
        </section>

        <section className="container">
          <div className="row justify-content-between">
            <div className="col-sm-1">
              <h2 className={styles["popular"]}>Kitchens</h2>
            </div>
            <div className="col-sm-1">
              <p className={styles["view-all"]} onClick={viewAllKitchenHandler}>
                View All {">"}
              </p>
            </div>
          </div>

          <div className={styles["popular-town-list"]}>
            {listKitchenHome !== [] ? (
              <React.Fragment>
                {Array.isArray(listKitchenHome) &&
                  listKitchenHome.length > 0 &&
                  listKitchenHome.map((data) => (
                    <React.Fragment key={data.id}>
                      <CardAppliance
                        id={data.id}
                        image={
                          data.image !== null ? data.image : applianceImgDefault
                        }
                        name={data.name}
                      />
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h3
                  style={{
                    position: "relative",
                    marginTop: 43,
                  }}
                >
                  Coming Soon
                </h3>
              </React.Fragment>
            )}
          </div>
        </section>

        <section className="container">
          <div className="row justify-content-between">
            <div className="col-sm-1">
              <h2 className={styles["popular"]}>Electronic</h2>
            </div>
            <div className="col-sm-1">
              <p
                className={styles["view-all"]}
                onClick={viewAllElectronicHandler}
              >
                View All {">"}
              </p>
            </div>
          </div>

          <div className={styles["popular-town-list"]}>
            {listElectronicHome !== [] ? (
              <React.Fragment>
                {Array.isArray(listElectronicHome) &&
                  listElectronicHome.length > 0 &&
                  listElectronicHome.map((data) => (
                    <React.Fragment key={data.id}>
                      <CardAppliance
                        id={data.id}
                        image={
                          data.image !== null ? data.image : applianceImgDefault
                        }
                        name={data.name}
                      />
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h3
                  style={{
                    position: "relative",
                    marginTop: 43,
                  }}
                >
                  Coming Soon
                </h3>
              </React.Fragment>
            )}
          </div>
        </section>

        <section className="container" style={{ marginBottom: 17 }}>
          <div className="row justify-content-between">
            <div className="col-sm-1">
              <h2 className={styles["popular"]}>Yard</h2>
            </div>
            <div className="col-sm-1">
              <p className={styles["view-all"]} onClick={ViewAllYardHandler}>
                View All {">"}
              </p>
            </div>
          </div>

          <div className={styles["popular-town-list"]}>
            {listYardHome !== [] ? (
              <React.Fragment>
                {Array.isArray(listYardHome) &&
                  listYardHome.length > 0 &&
                  listYardHome.map((data) => (
                    <React.Fragment key={data.id}>
                      <CardAppliance
                        id={data.id}
                        image={
                          data.image !== null ? data.image : applianceImgDefault
                        }
                        name={data.name}
                      />
                    </React.Fragment>
                  ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <h3
                  style={{
                    position: "relative",
                    marginTop: 43,
                  }}
                >
                  Coming Soon
                </h3>
              </React.Fragment>
            )}
          </div>
        </section>
      </main>
    </Main>
  );
};

export default ApplianceType;
