import React from "react";
import errImg from "../../../assets/images/404.png";
import { useNavigate } from 'react-router-dom'
import style from "./style.module.scss"


export default function Error404() {
    
const navigate = useNavigate();

  return (
    <div className={style.error}>
      <img src={errImg} alt="" />
      <div className={style.text}>
        <h3 className="text-center">Page Not Found</h3>
        <p>
          We’re sorry, the page you requested could not be found.<br/> Please go back
          to the homepage.
        </p>
        <button className={style.goHomeBtn} onClick={() => navigate("/")}>Go Home</button>
      </div>
    </div>
  );
}
