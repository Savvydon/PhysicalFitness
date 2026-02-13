import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function usePhysicalFitness() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ svcNo: "NAF " });
  const ranks = [
    "Air Man",
    "Air Woman",
    "Lance Corporal",
    "Corporal",
    "Sergeant",
    "Flight Sergeant",
    "Warrant Officer",
    "Master Warrant Officer",
    "Air Warrant Officer",
    "Flying Officer",
    "Flight Lieutenant",
    "Squadron Leader",
    "Wing Commander",
    "Group Captain",
    "Air Commodore",
    "Air Vice Marshal",
    "Vice Marshal",
    "Air Chief Marshal",
    "Marshal of the Air Force",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "svcNo") {
      const cleanedValue = value
        .replace(/\s/g, "")
        .replace(/[^a-zA-Z0-9]/g, "");
      if (cleanedValue.startsWith("NAF")) {
        return setFormData({ ...formData, svcNo: cleanedValue });
      } else {
        return setFormData({ ...formData, svcNo: `NAF${cleanedValue}` });
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      full_name: formData.fullName,
      rank: formData.rank,
      svc_no: formData.svcNo,
      unit: formData.unit,
      appointment: formData.appointment,
      age: Number(formData.age),
      sex: formData.sex.toLowerCase(),
      height: Number(formData.height),
      weight: Number(formData.weight),
      cardio_minutes: Number(formData.cardioMinutes),
      cardio_seconds: Number(formData.cardioSeconds),
      step_up: Number(formData.stepUp),
      push_up: Number(formData.pushUp),
      sit_up: Number(formData.sitUp),
      chin_up: Number(formData.chinUp),
      sit_reach: Number(formData.sitReach),
    };

    const res = await fetch("http://127.0.0.1:8000/compute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    {
      console.log(data);
    }

    navigate("/results", { state: data });
  };

  return { formData, handleChange, handleSubmit, ranks };
}
