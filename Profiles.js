import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Profiles() {
  // А тук се извеждат запазените данни
  const allFormData = JSON.parse(localStorage.getItem("allFormData")) || [];

  return (
    <div className="main-container">
      <h1>Данни на потребителите</h1>
      <div className="container">
        <div className="cards">
          {allFormData.map((formData, index) => (
            <div key={index} className="card">
              <h2>Име: {formData["Име"]}</h2>
              <p>Години: {formData["Възраст"]}</p>
              <p>Височина: {formData["Височина"]} см</p>
              <p>Тегло: {formData["Тегло"]} кг</p>
              <p>Пол: {formData["Пол"]}</p>
            </div>
          ))}
        </div>
        <div className="button-container">
          <Link to="/" className="button">
            Върни се към формата
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
