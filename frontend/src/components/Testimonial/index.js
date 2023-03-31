import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

import { listTestimonialHome } from "../../modules/utils/testimonial";


const Testimonial = () => {
  const [dataTesti, setDataTesti] = useState({});
  const [ratingTesti, setRatingTesti] = useState([]);
  const [imgTesti, setImgTesti] = useState("");
  const [nameTesti, setNameTesti] = useState("");
  const [testimonyTesti, setTestiMonyTesti] = useState("");
  const [meta, setMeta] = useState({});

  const { next, page, prev } = meta;
  let ratingArr = [];
  for (let i = 0; i < ratingTesti; i++) {
    ratingArr.push(i);
  }

  useEffect(() => {
    const params = {
      limit: 1,
      page: 1,
    };
    listTestimonialHome(params)
      .then((res) => {
        setDataTesti(res.data.result.result[0]);
        setMeta(res.data.result.meta);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (dataTesti !== undefined) {
      const { rating, image, name, testimony } = dataTesti;
      setRatingTesti(rating);
      setImgTesti(image);
      setNameTesti(name);
      setTestiMonyTesti(testimony);
    }
  }, [dataTesti, ratingTesti]);

  const nextTestiHandler = () => {
    if (next !== null) {
      const newPArams = {
        limit: 1,
        page: page + 1,
      };
      listTestimonialHome(newPArams)
        .then((res) => {
          setDataTesti(res.data.result.result[0]);
          setMeta(res.data.result.meta);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const prevTestiHandler = () => {
    if (prev !== null) {
      const newPArams = {
        limit: 1,
        page: page - 1,
      };
      listTestimonialHome(newPArams)
        .then((res) => {
          setDataTesti(res.data.result.result[0]);
          setMeta(res.data.result.meta);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <React.Fragment>
      <div className={styles["ring-gradient-list"]}>
      </div>
      <article className={`container ${styles["review-testimony"]}`}>

        {dataTesti !== undefined || dataTesti === [] ? (
          <React.Fragment>
            <main className="row">
              <section className="col-sm">
                <div className={styles["ratings"]}>
                  {ratingArr.map((data) => (
                    <React.Fragment key={data}>
                      <i className={`fa fa-star ${styles["rating-color"]}`}></i>
                    </React.Fragment>
                  ))}
                </div>
              </section>

              <section className="col-sm">
                <div className={styles["ring-gradient-profile"]}>
                  
                  
                </div>
              </section>
            </main>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3
              style={{
                position: "relative",
                textAlign: "center",
                marginTop: 83,
              }}
            >
              Coming Soon
            </h3>
          </React.Fragment>
        )}
      </article>
    </React.Fragment>
  );
};

export default Testimonial;
