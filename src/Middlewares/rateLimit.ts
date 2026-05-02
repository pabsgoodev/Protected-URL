import rateLimit from 'express-rate-limit';
import { error } from 'node:console';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests, please try again later.'
    });

    console.error(`Rate limit exceeded for IP: ${req.ip}`);
  }
});
