import { NavLink, Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.scss";

const Aside = () => {
  return (
    <div className={styles.main}>
      <div className={styles["main-navigation"]}>
        <div className={styles["navigation-cell"]}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className={styles["navigation-cell"]}>
          <NavLink to="/trends">Trends</NavLink>
        </div>
        <div className={styles["navigation-cell"]}>
          <NavLink to="/favorite">Favorite</NavLink>
        </div>
        <div className={styles["navigation-cell"]}>
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
      <div className="main-body">
        <Outlet />
      </div>
    </div>
  );
};

export default Aside;
