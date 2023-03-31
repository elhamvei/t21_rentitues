import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

import Main from "../../components/Main";
import searchIcon from "../../assets/svg/search.svg";
import CardAppliance from "../../components/CardAppliance";
import applianceImgDefault from "../../assets/img/appliance-default.png";
import applianceNotFound from "../../assets/img/appliancenotfound.png";

import { useLocation, useNavigate } from "react-router-dom";
import {
  listVechileAction,
  listAppliancePopularAction,
} from "../../redux/actions/listAppliance";
import { getAllLocation } from "../../modules/utils/location";

import { useDispatch } from "react-redux";
import { paramsPopulerAppliance } from "../../modules/helper/listAppliance";

const ViewMore = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locationParams = useLocation();

  const [locationArr, setLocationArr] = useState([]);
  const [applianceArr, setVehileArr] = useState([]);
  const [appliancePage, setAppliancePage] = useState(1);
  const [meta, setMeta] = useState({});

  const [search, setSearch] = useState("");
  const [types, setTypes] = useState("");
  const [location, setLocation] = useState("");
  const [order, setOrder] = useState("id");
  const [sort, setSort] = useState("desc");

  const urlSearchFilter =
    locationParams.search + `&limit=12&page=${appliancePage}`;
  const newUrlSearchFilter = `/view-more?search=${search}&type=${types}&location=${location}&by=${order}&order=${sort}`;
  const remamagingData = meta.totalData - 12 * appliancePage;

  useEffect(() => {
    dispatch(listVechileAction(urlSearchFilter))
      .then((res) => {
        setVehileArr(res.value.data.result.data);
        setMeta(res.value.data.result.meta);
      })
      .catch((err) => {
        if (err) {
          dispatch(listAppliancePopularAction(paramsPopulerAppliance)).catch(
            ({ ...err }) => {
              if (err) {
                navigate("/error_server");
              }
            }
          );
        }
      });
  }, [urlSearchFilter, dispatch, navigate]);

  useEffect(() => {
    getAllLocation()
      .then((res) => {
        setLocationArr(res.data.result);
      })
      .catch(({ ...err }) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const { page } = meta;
    setAppliancePage(page);
  }, [meta]);

  const searchFilterHandler = () => {
    setAppliancePage(1);
    navigate(`${newUrlSearchFilter}`);
    window.scrollTo(0, 0);
  };

  const nextHandler = () => {
    if (meta.next !== null) {
      setAppliancePage(appliancePage + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevHandler = () => {
    if (meta.prev !== null) {
      setAppliancePage(appliancePage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <Main>
      <main className={`container ${styles["top-view-more"]}`}>
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
          onClick={searchFilterHandler}
        />

        <section className={`container-fluid ${styles["flex-search-filter"]}`}>
          <select
            className={styles["box-select"]}
            defaultValue=""
            onChange={(e) => setTypes(e.target.value)}
          >
            <option value={""} disabled>
              Choose Type Appliance
            </option>
            <option value={""}>All</option>
            <option value={1}>Kitchen</option>
            <option value={2}>Electronic</option>
            <option value={3}>Yard</option>
          </select>
          <select
            className={styles["box-select"]}
            defaultValue=""
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value={""} disabled>
              Choose Location
            </option>
            <option value={""}>All</option>
            {Array.isArray(locationArr) &&
              locationArr.length > 0 &&
              locationArr.map((data) => (
                <React.Fragment key={data.id}>
                  <option value={data.id}>{data.name}</option>
                </React.Fragment>
              ))}
          </select>
          <select
            className={styles["box-select"]}
            defaultValue=""
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value={""} disabled>
              Order
            </option>
            <option value={"id"}>Default</option>
            <option value={"name"}>Appliances</option>
            <option value={"locations"}>locations</option>
            <option value={"rating"}>Ratings</option>
          </select>
          <select
            className={styles["box-select"]}
            defaultValue=""
            onChange={(e) => setSort(e.target.value)}
          >
            <option value={""} disabled>
              Sort
            </option>
            <option value={"asc"}>Ascending</option>
            <option value={"desc"}>Descending</option>
          </select>
        </section>

        <button
          className={`mt-4 ${styles["btn-search-filter"]}`}
          onClick={searchFilterHandler}
        >
          Search
        </button>

        {applianceArr.length !== 0 ? (
          <React.Fragment>
            <p className={styles["data-appliance"]}>{`Total appliance ${
              meta.totalData
            } remaining appliance ${remamagingData < 0 ? 0 : remamagingData}`}</p>
            <section className={`${styles["all-appliance"]}`}>
              {Array.isArray(applianceArr) &&
                applianceArr.length > 0 &&
                applianceArr.map((data) => (
                  <React.Fragment key={data.id}>
                    <div style={{ marginRight: 10 }}>
                      <CardAppliance
                        id={data.id}
                        image={
                          data.image !== null ? data.image : applianceImgDefault
                        }
                        name={data.name}
                      />
                    </div>
                  </React.Fragment>
                ))}
            </section>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <section
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                alt="avatar"
                src={applianceNotFound}
                className={styles["appliance-notFound"]}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h5>Appliance Not Found. . .</h5>
              </div>
            </section>
          </React.Fragment>
        )}

        <section className={styles["meta-flex"]}>
          <div className={styles["flex-beetwen"]}>
            <button className={styles["btn-prev"]} onClick={prevHandler}>
              Prev
            </button>
            <h3 className={styles["page-text"]}>{meta.page}</h3>
            <button className={styles["btn-next"]} onClick={nextHandler}>
              Next
            </button>
          </div>
        </section>

        <section className={styles["meta-flex"]} style={{ marginTop: 23 }}>
          <p>{`Page ${appliancePage} to remaining ${
            meta.totalPage - appliancePage
          } from total page ${meta.totalPage}`}</p>
        </section>
      </main>
    </Main>
  );
};

export default ViewMore;
