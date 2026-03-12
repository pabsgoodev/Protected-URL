import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
const app = express();
import { corsMiddleware } from "./Middlewares/cors.js";
import { limiter } from "./Middlewares/rateLimit.js";
import { securityMiddleware } from "./Middlewares/security.js";
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);
app.use(corsMiddleware);
app.use(securityMiddleware);
app.use(limiter);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
