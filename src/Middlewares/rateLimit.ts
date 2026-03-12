import rateLimit from 'express-rate-limit';
import { error } from 'node:console';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 req por ip
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many requests, please try again later.'
    });

    console.error(`Rate limit exceeded for IP: ${req.ip}`);
  }
});

// Para usarlo, simplemente importa el middleware y úsalo en tu aplicación Express
// import { limiter } from './rateLimit';
// app.use(limiter);

