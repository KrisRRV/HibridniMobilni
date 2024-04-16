import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function App() {
  const [formData, setFormData] = useState({});
  const [calories, setCalories] = useState(null);
  const [showOutput, setShowOutput] = useState(false);
  const [allFormData, setAllFormData] = useState([]);

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("allFormData")) || [];
    setAllFormData(savedFormData);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const newData = {};

    for (const [key, value] of data.entries()) {
      newData[key] = value;
    }

    setFormData(newData);
    calculateCalories(newData);
    setShowOutput(true);

    // Тук запазваме данните локално
    const updatedFormData = [...allFormData, newData];
    setAllFormData(updatedFormData);
    localStorage.setItem("allFormData", JSON.stringify(updatedFormData));
  };

  const calculateCalories = (data) => {
    const age = parseInt(data["Възраст"]);
    const height = parseInt(data["Височина"]);
    const weight = parseInt(data["Тегло"]);
    const gender = data["Пол"];

    let calculatedCalories = 0;
    if (gender === "Мъж") {
      calculatedCalories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedCalories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setCalories(calculatedCalories);
  };

  return (
    <div className="main-container">
      <h1>Фитнес тракер</h1>
      <div className="container">
        <div className="output">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <b>Име:</b>
            </label>
            <input type="text" id="name" name="Име" required />
            <br />

            <label htmlFor="age">
              <b>Години:</b>
            </label>
            <input type="number" id="age" name="Възраст" required />
            <br />

            <label htmlFor="height">
              <b>Височина</b> (см):
            </label>
            <input type="number" id="height" name="Височина" required />
            <br />

            <label htmlFor="weight">
              <b>Тегло</b> (кг):
            </label>
            <input type="number" id="weight" name="Тегло" required />
            <br />

            <label htmlFor="gender">Пол:</label>
            <select id="gender" name="Пол">
              <option value="Мъж">Мъж</option>
              <option value="Жена">Жена</option>
            </select>
            <br />

            <button type="submit">Потвърди</button>
          </form>
        </div>
        {showOutput && (
          <div className="output-container">
            <div className="user-data">
              <h2>Въведени данни:</h2>
              {Object.keys(formData).map((key) => (
                <p key={key}>
                  {key}: {formData[key]}
                </p>
              ))}
            </div>
          </div>
        )}
        {showOutput && (
          <div className="calories">
            <h2>Изчислени калории:</h2>
            <p>{calories} калории на ден</p>
          </div>
        )}
        <div className="button-container">
        <Link to="/Profiles" className="button">
          Всички потребители
        </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
