import { Router, Request, Response } from 'express'
import { limiter } from '../Middlewares/rateLimit.js';



const router = Router();

router.get("/api",limiter,(req: Request, res: Response) => {
    res.send("API is working in route /api!");
})

export default router;