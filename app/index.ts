import express from "express";
import cors from "cors";
import connectDB from "./connection/database.ts";
import { router } from "./routes/itemsRoute.ts";

const app = express();
connectDB()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "API V1 Ready"
  })
})

app.use("/items", router);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
