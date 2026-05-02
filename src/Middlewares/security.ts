import helmet from "helmet";
import {Response, Request, NextFunction} from "express"

export const securityMiddleware = [
    helmet(),
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
