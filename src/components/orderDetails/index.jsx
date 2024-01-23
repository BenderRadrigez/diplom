import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllProducts } from "../../store/slices/basketSlice";

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

      // Вызов колбэка onSubmit, если передан
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className={style.orderSection}>
      <h3>OrderDetails</h3>
      <div>
        <span>{listOfOrder.length} items Total</span>
        <span>
          $
          {listOfOrder.reduce((allprice, item) => {
            return (allprice += +(
              (item.discont_price ? item.discont_price : item.price) *
              item.count
            ).toFixed(2));
          }, 0)}
        </span>
        <form onSubmit={handleSubmit} className={style.register_form}>
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
            disabled={isSubmited}
            type="submit"
          >
            {isSubmited ? "Order Send" : "Order"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </section>
  );
}
