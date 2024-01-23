import React, { useState } from "react";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllProducts } from "../../store/slices/basketSlice";
import { ConfigProvider, Modal } from "antd";

const info = () => {
  Modal.info({
    title: "Congratulations!",
    content: (
      <div>
        <p>
          Your order has been successfully placed on the website. <br />
          <br />
          A manager will contact you shortly to confirm your order.
        </p>
      </div>
    ),
    onOk() {},
  });
};

export default function OrderDetails({ onSubmit }) {
  const dispatch = useDispatch();
  const listOfOrder = useSelector((state) => state.basket.basketList);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    products: [],
  });
  const [error, setError] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка на заполненность полей
    if (!formData.name || !formData.phoneNumber || !formData.email) {
      setError("All fields are required");
      return;
    }

    formData.products = listOfOrder;
    // Обработка отправки данных
    try {
      const response = await fetch("http://localhost:3333/order/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error submitting form");
      }

      setIsSubmited(true);

      // Сброс ошибки и данных формы
      setError("");
      setFormData({ name: "", phoneNumber: "", email: "" });
      dispatch(deleteAllProducts());

      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className={style.orderSection}>
      <h3>Order details</h3>
      <div className={style.sumOfOrder}>
        <span className={style.countOfOrderProducts}>
          {listOfOrder.length} items <br /> Total
        </span>
        <span className={style.sum}>
          $
          {listOfOrder.reduce((allprice, item) => {
            return (allprice += +(
              (item.discont_price ? item.discont_price : item.price) *
              item.count
            ).toFixed(2));
          }, 0)}
        </span>
      </div>
      <form onSubmit={handleSubmit} className={style.sendOrderForm}>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone number"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button
          className={isSubmited ? style.submited : ""}
          onClick={info}
          disabled={isSubmited}
          type="submit"
        >
          {isSubmited ? "The Order is Placed" : "Order"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </section>
  );
}
