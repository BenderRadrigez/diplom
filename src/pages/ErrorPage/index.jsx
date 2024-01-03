import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import errImg from "../../assets/images/404.png";

export default function Error() {
  const navigate = useNavigate();

  return (
    <main className={style.error}>
      <img src={errImg} alt="" />
      <div className={style.text}>
        <h3 className="text-center">Page Not Found</h3>
        <p>
          We’re sorry, the page you requested could not be found.
          <br /> Please go back to the homepage.
        </p>
        <button className={style.goHomeBtn} onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </main>
  );
}
