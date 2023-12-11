import React from "react";
import style from "./style.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Banner() {
  return (
    <div className={style.banner}>
      <h3>
        Amazing Discounts
        <br /> on Garden Products!
      </h3>
      <button>
        <Link
          activeClass="active"
          to="discount_section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Check out
        </Link>
      </button>
    </div>
  );
}
