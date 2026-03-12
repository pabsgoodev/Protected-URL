import cors from 'cors'; // importa o pacote necessario
//variavel
const corsMiddleware = cors({
    origin: ["http//localhost:3000"], // Define que a rota http//localhost:3000 pode acessar a API
    methods: ["GET"], // Mas apenas com o metodo de REQ GET
    credentials: true // Permite o envio de cookies e credenciais de autenticação
});
export { corsMiddleware };
// Define que a rota http//localhost:3000 pode acessar a API
// Mas apenas com o metodo de REQ GET
