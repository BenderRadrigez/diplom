import { Button, ConfigProvider } from "antd";
import React from "react";
import style from "./style.module.scss";
import { useLocation } from "react-router-dom";

export default function NavInPages() {
  const location = useLocation();
  const buttonsList = location.pathname.split("/");
  buttonsList[0] = "Main Page";
  return (
    <div className={style.navContainer}>
      {buttonsList.map((el, ind) => (
        <ConfigProvider
        key={ind}
          theme={{
            token: {
              colorPrimary: "#339933",
            },
          }}
        >
          <Button
            className={
              ind < buttonsList.length - 1
                ? style.btn
                : style.active + " " + style.btn
            }
          >
            {el}
          </Button>
          {ind < buttonsList.length - 1 ? (
            <div className={style.line}></div>
          ) : null}
        </ConfigProvider>
      ))}
    </div>
  );
}
