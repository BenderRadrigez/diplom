import React from 'react'
import style from "./style.module.scss"
import image from "../../../../assets/images/image_for_the_discont_banner.svg";

export default function GetDiscount() {
  return (
    <div className={style.discount_section}>
        <h3>5% off on the first order</h3>
        <div className={style.conteiner}>
            <img src={image} alt="img" />
            <div className={style.register_form}>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Phone number' />
                <input type="text" placeholder='Email' />
                <button>Get a discount</button>
            </div>
        </div>
    </div>
  )
}
