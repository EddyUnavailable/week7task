import {useEffect, useState} from "react";
import React from "react";

export default function ShipData() {
  const [shipsData, setShipsData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await fetch(`https://week7taskserver.onrender.com/ships`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shipsData),
      });
      const message = await result.json();
      console.log(message);
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  const { data, error } = await supabase
  .from('ships')
  .insert([
    { some_column: 'someValue', other_column: 'otherValue' },
  ])
  .select()

  function handleChange(event) {
    // update my state variable
    // console.log({[event.target.name]: event.target.value})
    setShipsData({...shipsData, [event.target.name]: event.target.value});
    console.log(shipsData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
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
        name="launchdate"
        type="date"
        placeholder="Launch"
        onChange={handleChange}
        required
      />
      {/* <input
        name="img_url"
        placeholder="img_url"
        onChange={handleChange}
        required
      /> */}
      <button type="submit">submit</button>
    </form>
  );
}
