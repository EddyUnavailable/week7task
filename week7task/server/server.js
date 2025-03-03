import express from "express";
import dotenv from "dotenv";
import pg from "pg";
import cors from "cors";
import {createClient} from "@supabase/supabase-js";
const app = express();
import "dotenv/config";
// env.config();
console.log("Hello world!");

const port = process.env.PORT || 3000;
const supabaseUrl = "https://ecdllxbjyrmdglcntjdl.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(process.env.SUPABASE_KEY);

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

// app.get("/", async (_, response) => {
//   try {
//     const {data, error} = await supabase.from("ships").select();
//     console.log(data);
//     return response.send(data);
//   } catch (error) {
//     return response.send({error});
//   }
// });

// app.get("/*/:id", async (req, res) => {
//   try {
//     const {data, error} = await supabase
//       .from("ships")
//       .select("*")
//       .eq("id", req.params.id)
//       .single();
//     if (error) throw error;
//     console.log(error);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// });

let {data: ships, error} = await supabase.from("ships").select("name");
console.log("name");

app.listen(process.env.PORT, () =>
  console.log(
    new Date().toLocaleTimeString() +
      `: Server is running on port ${process.env.PORT}...`
  )
);
