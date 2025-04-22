import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../assets/css/Main.module.css";

export const Main = () => {
  return (
    <div className={`${styles["main"]} container`}>
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <div className={`${styles["items"]} card  `}> 
            <div className={styles["icon_area"]}>
              <i className="bi bi-collection"></i>
            </div>
            <div className={styles["text_area"]}>
              <h5>Featured title</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="">
                Call to action <i class="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
        <div className={`${styles["items"]} card`}>
            <div className={styles["icon_area"]}>
            <i class="bi bi-buildings"></i>
            </div>
            <div className={styles["text_area"]}>
              <h5>Featured title</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="">
                Call to action <i class="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-4  d-flex justify-content-center align-items-center">
        <div className={`${styles["items"]} card`}>
            <div className={styles["icon_area"]}>
              <i className="bi bi-toggles2"></i>
            </div>
            <div className={styles["text_area"]}>
              <h5>Featured title</h5>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
              <a href="">
                Call to action <i class="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
