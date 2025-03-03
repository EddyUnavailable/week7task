import express, {response} from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";
import {createClient} from "@supabase/supabase";
const app = express();
import "dotenv/config";
// env.config();
console.log("Hello world!");

const port = process.env.PORT || 3000;
const supabaseUrl = "https://ecdllxbjyrmdglcntjdl.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// const fetchShips = async () => {
//   try {
//     let {data: ships, error} = await supabase.from("ships").select("id, name");
//     if (ships) {
//       console.log(ships);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchShips();

app.get("/ships", async (_, response) => {
  try {
    const {data, error} = await supabase.from("ships").select();
    console.log(ships);
    return response.send(data);
  } catch (error) {
    return response.send({error});
  }
});

// app.get("/ships/:id", async (request, response) => {
//   try {
//     const { data, error } = await supabase
//       .from("ships")
//       .select()
//       .eq("id", request.params.id)
//     console.log(data);
//     return response.send(data);
//   } catch (error) {
//     return response.send({ error });
//   }
// });

// add stuff
app.put("/ships/:id", async (request, response) => {
  console.log(request.params);
  try {
    const {data: updatedData, error: updatedError} = await supabase
      .from("ships")
      .update({
        name: request.body.name ? request.body.name : data[0].name,
        country: request.body.country ? request.body.country : data[0].country,
        class: request.body.class ? request.body.class : data[0].class,
        launchdate: request.body.launchdate
          ? request.body.launchdate
          : data[0].launchdate,
      })
      .eq("id", request.params.id);
    const {data, err} = await supabase.from("ships").select();
    return response.status(200).send(data);
  } catch (error) {
    response.send({error});
  }
});

//delete stuff
app.delete("/ships/:id", async (request, response) => {
  try {
    const {data, error} = await supabase
      .from("ships")
      .delete()
      .eq("id", request.params.id);
    const {datar, errorr} = await supabase.from("ships").select();
    if (error) {
      return response.status(400).json(error);
    }
    return response.send(datar);
  } catch (error) {
    response.send({error});
  }
});

app.listen(process.env.PORT, () =>
  console.log(
    new Date().toLocaleTimeString() +
      `: Server is running on port ${process.env.PORT}...`
  )
);
