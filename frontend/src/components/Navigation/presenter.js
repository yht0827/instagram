import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";
import { FiUser, FiHeart } from "react-icons/fi";
import IosCompassOutline from "react-ionicons/lib/IosCompassOutline";

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/">
          <img
            src={require("images/logo.png")}
            className={styles.logo}
            alt={context.t("Logo")}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <input
          type="text"
          placeholder={context.t("Search")}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <Link to="/explore">
            <IosCompassOutline fontSize="28px" color="black" />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <FiHeart fontSize="28px" strokeWidth="1" />
        </div>
        <div className={styles.navIcon}>
          <Link to="/profile">
            <FiUser fontSize="28px" color="black" strokeWidth="1.5" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;
