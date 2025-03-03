import React from "react";
import {useState} from "react";

export default function NewShipForm() {
  const [bookData, setBookData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await fetch(`http://localhost:7070/ships`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ships),
      });
      const message = await result.json();
      console.log(message);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  function handleChange(event) {
    setBookData({...ships, [event.target.name]: event.target.value});
    console.log(ships);
  }
  return (
    <div
      className="ship_grid"
      style={{display: "flex", flexDirection: "collumn"}}
    >
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          name="country"
          placeholder="Country"
          onChange={handleChange}
          required
        />
        <input
          name="class"
          placeholder="Class"
          onChange={handleChange}
          required
        />
        <input
          name="launch date"
          type="date"
          placeholder="launch date"
          onChange={handleChange}
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

// 1. run handle change everyime the user writes something in the input
// 2. handleChange will spread the previous data of the form and add in the new input field
// 3. handleSubmti will submit/POST the final formData object to our server
