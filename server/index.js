import express from "express";
import dotenv from "dotenv";

import router from "./router/router.js";
dotenv.config();
const app = express();

app.use(express.json({ limit: "5mb", extended: true }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Server is running");
});

let port = process.env.PORT || 4000;
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {

//     console.log("Connected to database.");
//   })
//   .catch((err) => {
//     console.log("Unable to connect to MongoDB. Error: " + err);
//   });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
