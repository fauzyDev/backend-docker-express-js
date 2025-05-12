import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import connectDB from "./connection/database.ts";
import { userRouter } from "./routes/user.routes.ts";
import { authRouter } from "./routes/auth.routes.ts";

const app = express();
connectDB()

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());
app.use(cookieParser())

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "API V1 Ready"
  })
})

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter)

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
