import * as React from "react";
import styles from "./style.module.css";
import { IoMan } from "react-icons/io5";
import { FaCat, FaDog } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";
import Button from "rsuite/Button";
export default function LandingPage() {
  const navigate = useNavigate();
  const { matches, matchesAny, matchesAll } = useMediaQueries({
    screen: "screen",
    width: "(max-width: 992px)",
  });
  return (
    <div className={styles.app}>
      <div className={styles.officeLogo}>
        <div className={styles.text}>
          <span className={styles.the}>The</span>
          <span className={styles.office}>Office</span>
          <span className={styles.paul}>(Of Paul Elliott)</span>
        </div>
        <div className={styles.officeIcons}>
          <div className={styles.box}>
            <FaDog
              className={styles.iconPet}
              size={matches.width ? "30px" : "50px"}
            />
            <FaCat
              className={styles.iconPet}
              size={matches.width ? "30px" : "50px"}
            />
            <IoMan
              className={styles.iconPaul}
              size={matches.width ? "60px" : "100px"}
            />
            <FaCat
              className={styles.iconPet}
              size={matches.width ? "30px" : "50px"}
            />
          </div>
        </div>
      </div>
      <Button
        appearance="subtle"
        onClick={() => {
          navigate("/home");
        }}
        className={styles.welcomebutton}
      >
        Welcome
      </Button>
    </div>
  );
}
