import helmet from "helmet";
import {Response, Request, NextFunction} from "express"

//variavel
export const securityMiddleware = [
    helmet(), // adiciona automaticamente headers de segurança
];
 import xss from "xss";

export function xssMiddleware(req: Request, res: Response, next: NextFunction) {

    if (req.body) {
        for (const key in req.body) {
            req.body[key] = xss(req.body[key]);
        }
    }

    next();
}
//evita xss 
// adiciona automaticamente headers de segurança 
// para proteger contra ataques comuns, como clickjacking, cross-site scripting (XSS) e outros.
