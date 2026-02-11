import React, { useState } from "react";
import "../styles/PhysicalFitness.css";
import airForce from "../assets/airforce.png";

export default function PhysicalFitness() {
  const [formData, setFormData] = useState({
    svcNo: "NAF",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "svcNo") {
      // Always keep "NAF" prefix
      if (!value.startsWith("NAF ")) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully");
  };

  const ranks = [
    "AVM",
    "Air Commodore",
    "Group Captain",
    "Wing Commander",
    "Squadron Leader",
    "Flight Lieutenant",
    "Flying Officer",
    "Flight Sergeant",
    "Corporal",
    "Lance Corporal",
  ];

  const units = ["Armament", "Bursary", "Flight Line", "Logistics", "Medical"];
  const appointments = ["Commandant", "AOC", "RM", "Instructor"];

  return (
    <div className="page">
      <div className="form-container">
        <div className="header">
          <img src={airForce} alt="NAF Logo" />
          <h1>NIGERIA AIR FORCE ANNUAL PHYSICAL FITNESS REQUEST FORM</h1>
        </div>

        <form onSubmit={handleSubmit} className="form-grid">
          <input
            name="year"
            type="number"
            placeholder="Year"
            onChange={handleChange}
            required
          />

          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <select name="rank" onChange={handleChange} required>
            <option value="">Select Rank</option>
            {ranks.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>

          {/* Service Number with NAF prefix */}
          <input
            name="svcNo"
            type="text"
            value={formData.svcNo}
            onChange={handleChange}
            placeholder="NAF 12345"
            required
          />

          <select name="unit" onChange={handleChange} required>
            <option value="">Select Unit</option>
            {units.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>

          <input type="date" name="date" onChange={handleChange} required />

          <select name="appointment" onChange={handleChange} required>
            <option value="">Select Appointment</option>
            {appointments.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>

          <input
            name="height"
            type="number"
            step="0.1"
            placeholder="Height (m)"
            onChange={handleChange}
            required
          />

          <input
            name="weight"
            type="number"
            step="0.1"
            placeholder="Weight (kg)"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
            required
          />

          <select name="sex" onChange={handleChange} required>
            <option value="">Sex</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <select name="cardioType" onChange={handleChange} required>
            <option value="">Cardio Type</option>
            <option>Walk</option>
            <option>Jog</option>
          </select>

          <input
            name="cardioMinutes"
            type="number"
            placeholder="Cardio Minutes"
            onChange={handleChange}
            required
          />

          <input
            name="cardioSeconds"
            type="number"
            placeholder="Cardio Seconds"
            onChange={handleChange}
            required
          />

          <input
            name="stepUp"
            type="number"
            placeholder="3 Minutes Step-Up"
            onChange={handleChange}
            required
          />

          <input
            name="pushUp"
            type="number"
            placeholder="1 Minute Push-Up"
            onChange={handleChange}
            required
          />

          <input
            name="sitUp"
            type="number"
            placeholder="Sit-Up"
            onChange={handleChange}
            required
          />

          <input
            name="chinUp"
            type="number"
            placeholder="Chin-Up"
            onChange={handleChange}
            required
          />

          <input
            name="sitReach"
            type="number"
            placeholder="Sit and Reach(cm)"
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Submit Form
          </button>
        </form>

        <p style={{ textAlign: "center" }}>
          © {new Date().getFullYear()} Nigeria Air Force – Official Use Only
        </p>
      </div>
    </div>
  );
}
