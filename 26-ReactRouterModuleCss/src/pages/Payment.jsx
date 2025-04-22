import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../assets/css/Payment.module.css";
export const Payment = () => {
  return (
    <div className="container-fluid">
      <div className={styles["payments_container"]}>
        <div className="text-center">
          <h3>Pay as you grow</h3>
          <p>With our no hassle pricing plans</p>
        </div>

        <div className="row">
          <div className="col-4 ">
            <div className={`${styles["payment_card"]} card`}>
              <p>Free</p>
              <div className={styles["price"]}>
                <h1>$0/ </h1>
                <p> mo.</p>
              </div>
              <p>
                <i className="bi bi-check text-primary"></i>
                1 users
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                5GB storage
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Unlimited public projects
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Community access
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Unlimited private projects
              </p>
              <p>
                <i className="bi bi-x"></i>
                Dedicated support
              </p>
              <p>
                <i className="bi bi-x"></i>
                Free linked domain
              </p>
              <p>
                <i className="bi bi-x"></i>
                Monthly status reports
              </p>
              <button className="btn btn-primary mt-2">Choose Plan</button>
            </div>
          </div>
          <div className="col-4">
          <div className={`${styles["payment_card"]} card`}>
              <p>Premium</p>
              <div className={styles["price"]}>
                <h1>$49/ </h1>
                <p> mo.</p>
              </div>
              <p>
                <i className="bi bi-check text-primary"></i>
                1 users
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                5GB storage
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Unlimited public projects
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Community access
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Unlimited private projects
              </p>
              <p>
                <i className="bi bi-x"></i>
                Dedicated support
              </p>
              <p>
                <i className="bi bi-x"></i>
                Free linked domain
              </p>
              <p>
                <i className="bi bi-x"></i>
                Monthly status reports
              </p>
              <button className="btn btn-primary mt-2">Choose Plan</button>
            </div>
          </div>
          <div className="col-4 ">
          <div className={`${styles["payment_card"]} card`}>
              <p>Enterprise</p>
              <div className={styles["price"]}>
                <h1>$129/ </h1>
                <p> mo.</p>
              </div>
              <p>
                <i className="bi bi-check text-primary"></i>
                1 users
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                5GB storage
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Unlimited public projects
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Community access
              </p>
              <p>
                <i className="bi bi-check text-primary"></i>
                Unlimited private projects
              </p>
              <p>
                <i className="bi bi-x"></i>
                Dedicated support
              </p>
              <p>
                <i className="bi bi-x"></i>
                Free linked domain
              </p>
              <p>
                <i className="bi bi-x"></i>
                Monthly status reports
              </p>
              <button className="btn btn-primary mt-2">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
