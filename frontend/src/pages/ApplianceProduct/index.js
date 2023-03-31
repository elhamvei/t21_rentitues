import React, { useState, useEffect } from "react";
import Main from "../../components/Main";
import styles from "../HistoryOrderRenter/index.module.scss";
import stylesPlus from "./index.module.scss";

import applianceNotFound from "../../assets/img/appliancenotfound.png";
import searchIcon from "../../assets/svg/search.svg";

import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { applianceSearchFilterByRenterId } from "../../modules/utils/Appliance";
import { getLocationByRenterId } from "../../modules/utils/location";
import formatCad from "../../modules/helper/formatCad";

const ApplianceProduct = () => {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const location = useLocation();

  const { auth } = state;
  const { token } = auth;

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [by, setBy] = useState("id");
  const [order, setOrder] = useState("desc");

  const [applianceDataArr, setApplianceDataArr] = useState([]);
  const [locationArr, setLocationArr] = useState([]);
  const [page, setPage] = useState(1);
  const [metaRenter, setMetaRenter] = useState([]);

  const urlApplianceProduct = `/${location.search}&limit=5&page=${page}`;
  const newUrlApplianceProduct = `/appliance_product?search=${search}&type=${filterType}&location=${filterLocation}&by=${by}&order=${order}`;

  useEffect(() => {
    applianceSearchFilterByRenterId(urlApplianceProduct, token)
      .then((res) => {
        setApplianceDataArr(res.data.result.data);
        setMetaRenter(res.data.result.meta);
      })
      .catch(({ ...err }) => {
        console.log(err);
      });

    getLocationByRenterId(token)
      .then((res) => {
        setLocationArr(res.data.result);
      })
      .catch(({ ...err }) => {
        console.log(err);
      });
  }, [urlApplianceProduct, token]);

  const searchFilterHandler = () => {
    setPage(1);
    navigate(newUrlApplianceProduct);
    window.scrollTo(0, 0);
  };

  return (
    <Main>
      <main className={`container ${styles["top-history"]}`}>
        <h3 style={{ textAlign: "center" }}>Data of List Appliance Product</h3>

        <section>
          <input
            type={"text"}
            placeholder="Search Histroy"
            className={styles["history-search"]}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src={searchIcon}
            alt="avatar"
            className={styles["search"]}
            onClick={searchFilterHandler}
          />

          <div className={stylesPlus["flex-select"]}>
            <select
              className={`${styles["box-select"]} ${stylesPlus["box-select"]}`}
              defaultValue=""
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value={""} disabled>
                Filter Type
              </option>
              <option value={""}>All</option>
              <option value={1}>Kitchen</option>
              <option value={2}>Electronic</option>
              <option value={3}>Yard</option>
            </select>
            <select
              className={`${styles["box-select"]} ${stylesPlus["box-select"]}`}
              defaultValue=""
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <option value={""} disabled>
                Filter Location
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
              className={`${styles["box-select"]} ${stylesPlus["box-select"]}`}
              defaultValue=""
              onChange={(e) => setBy(e.target.value)}
            >
              <option value={""} disabled>
                Order
              </option>
              <option value={"id"}>Default</option>
              <option value={"appliances"}>Appliances</option>
              <option value={"locations"}>locations</option>
              <option value={"rating"}>Ratings</option>
            </select>
            <select
              className={`${styles["box-select"]} ${stylesPlus["box-select"]}`}
              defaultValue=""
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value={""} disabled>
                Sort
              </option>
              <option value={"asc"}>Ascending</option>
              <option value={"desc"}>Descending</option>
            </select>
            {/* <div className={stylesPlus['btn-flex']}> */}
            {/* </div> */}
          </div>
          <button
            className={stylesPlus["btn-search"]}
            onClick={searchFilterHandler}
          >
            Search
          </button>
        </section>

        {applianceDataArr.length > 0 ? (
          <React.Fragment>
            <section style={{ overflowX: "auto" }}>
              <table className="table table-warning table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id. </th>
                    <th scope="col">Appliances</th>
                    <th scope="col">Types</th>
                    <th scope="col">Locations</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Rating</th>
                    <th scope="col" style={{ textAlign: "center" }}>
                      Setup
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(applianceDataArr) &&
                    applianceDataArr.length > 0 &&
                    applianceDataArr.map((data) => (
                      <React.Fragment key={data.id}>
                        {console.log(data)}
                        <tr>
                          <th scope="row">{data.id}</th>
                          <td>{data.appliance}</td>
                          <td>{data.types}</td>
                          <td>{data.location}</td>
                          <td>{data.stock}</td>
                          <td>{`CAD ${formatCad(data.price)}`}</td>
                          <td>{data.rating === null ? "0" : data.rating}</td>
                          <td>
                            <button
                              style={{ width: "100%" }}
                              className={styles["btn-return"]}
                              onClick={() => {
                                navigate(`/appliance/detail/${data.id}`);
                              }}
                            >
                              Setup Appliance
                            </button>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                </tbody>
              </table>
            </section>

            <section className={styles["meta-flex"]}>
              <div className={styles["flex-beetwen"]}>
                <button
                  className={styles["btn-prev"]}
                  onClick={() => {
                    if (metaRenter.prev !== null) {
                      setPage(page - 1);
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  Prev
                </button>
                <h3 className={styles["page-text"]}>{metaRenter.page}</h3>
                <button
                  className={styles["btn-next"]}
                  onClick={() => {
                    if (metaRenter.next !== null) {
                      setPage(page + 1);
                      window.scrollTo(0, 0);
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </section>
            <section className={styles["meta-flex"]} style={{ marginTop: 23 }}>
              <p>{`Page ${metaRenter.page} to remaining ${
                metaRenter.totalPage - metaRenter.page
              } from total page ${metaRenter.totalPage}`}</p>
            </section>
          </React.Fragment>
        ) : (
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
        )}
      </main>
    </Main>
  );
};

export default ApplianceProduct;
