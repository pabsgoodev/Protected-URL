import { Router } from 'express';
import { limiter } from '../Middlewares/rateLimit.js';

const route = Router();

route.get('/list', limiter, (req, res) => {
    console.log(`IP: ${req.ip}`);
    res.json({ message: "ok" });
});

export default route;