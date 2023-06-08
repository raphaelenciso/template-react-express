import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

import router from "./router/router.js";

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json({ limit: "5mb", extended: true }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
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
