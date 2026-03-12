import helmet from "helmet";
import xss from "xss-clean";
//variavel
export const securityMiddleware = [
    helmet(), // adiciona automaticamente headers de segurança
    xss(), //evita xss
];
//evita xss 
// adiciona automaticamente headers de segurança 
// para proteger contra ataques comuns, como clickjacking, cross-site scripting (XSS) e outros.
