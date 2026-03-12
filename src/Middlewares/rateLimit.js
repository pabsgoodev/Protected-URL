import rateLimit from 'express-rate-limit';
export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 req por ip
});
// Para usarlo, simplemente importa el middleware y úsalo en tu aplicación Express
// import { limiter } from './rateLimit';
// app.use(limiter);
