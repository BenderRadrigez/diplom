import React, { useState } from "react";
import style from "./style.module.scss";
import image from "../../assets/images/image_for_the_discont_banner.svg";

export default function GetDiscount({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
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

    // Обработка отправки данных
    try {
      const response = await fetch("http://localhost:3333/sale/send", {
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

      // Вызов колбэка onSubmit, если передан
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={`${style.discount_section} discount_section`}>
      <h3>5% off on the first order</h3>
      <div className={style.conteiner}>
        <img src={image} alt="img" />
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
          <button className={isSubmited ? style.submited : ""} disabled={isSubmited} type="submit">
            {isSubmited ? "Request Submitted" : "Get a discount"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
