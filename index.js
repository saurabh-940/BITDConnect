import express from "express";
import Connection from "./database/db.js";
import router from "./Route/routes.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
const PORT = 4000;
app.use(express.json({ limit: "10mb", extended: true }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 })
);


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cors({ origin: true, credentials: true }));
app.use("", router);
app.use("/uploads", express.static("uploads"));
Connection();

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
// D:\CODE\web\BITD Copy Image\server\uploads\imgae-1678342253266. IMG_20210424_111216.jpg
