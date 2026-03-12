import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";
import route from "./routes/api.routes.js";

import { corsMiddleware } from "./Middlewares/cors.js";
import { limiter } from "./Middlewares/rateLimit.js";
import { securityMiddleware, xssMiddleware } from "./Middlewares/security.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(corsMiddleware);
app.use(securityMiddleware);
app.use(limiter);
app.use(xssMiddleware);

app.use(routes);
app.use("/api", route);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});