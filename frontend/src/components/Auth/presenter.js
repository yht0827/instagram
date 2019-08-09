import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
  <main className={styles.auth}>
    <div className={styles.column}>
      <div className={styles.background}>
        <div className={styles.imageForm}>
          <img
            className={
              styles.insideImage +
              `${props.imageIndex === 1 ? " " + styles.active : ""}` +
              `${props.preImageIndex === 1 ? " " + styles.preactive : ""}`
            }
            src={require("images/screenshot1.jpg")}
            alt=""
          />
          <img
            className={
              styles.insideImage +
              `${props.imageIndex === 2 ? " " + styles.active : ""}` +
              `${props.preImageIndex === 2 ? " " + styles.preactive : ""}`
            }
            src={require("images/screenshot2.jpg")}
            alt=""
          />
          <img
            className={
              styles.insideImage +
              `${props.imageIndex === 3 ? " " + styles.active : ""}` +
              `${props.preImageIndex === 3 ? " " + styles.preactive : ""}`
            }
            src={require("images/screenshot3.jpg")}
            alt=""
          />
          <img
            className={
              styles.insideImage +
              `${props.imageIndex === 4 ? " " + styles.active : ""}` +
              `${props.preImageIndex === 4 ? " " + styles.preactive : ""}`
            }
            src={require("images/screenshot4.jpg")}
            alt=""
          />
          <img
            className={
              styles.insideImage +
              `${props.imageIndex === 5 ? " " + styles.active : ""}` +
              `${props.preImageIndex === 5 ? " " + styles.preactive : ""}`
            }
            src={require("images/screenshot5.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
    <div className={styles.column}>
      <div className={`${styles.whiteBox} ${styles.formBox}`}>
        <img src={require("images/logo.png")} alt="Logo" />
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className={styles.whiteBox}>
        {props.action === "signup" && (
          <p className={styles.text}>
            {context.t("Have an account?")}{" "}
            <span className={styles.changeLink} onClick={props.changeAction}>
              {context.t("Log in")}
            </span>
          </p>
        )}
        {props.action === "login" && (
          <p className={styles.text}>
            {context.t("Don't have an account?")}{" "}
            <span className={styles.changeLink} onClick={props.changeAction}>
              {context.t("Sign up")}
            </span>
          </p>
        )}
      </div>
      <div className={styles.appBox}>
        <span>{context.t("Get the app")}.</span>
        <div className={styles.appstores}>
          <img
            src={require("images/ios.png")}
            alt="Download it on the Apple Appstore"
          />
          <img
            src={require("images/android.png")}
            alt="Download it on the Apple Appstore"
          />
        </div>
      </div>
    </div>
  </main>
);

Auth.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Auth;
