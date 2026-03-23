# API Protegida com Middlewares de Segurança

---

API protegida com Node.js, TypeScript e middlewares de segurança.

---

## Descrição do Projeto

API simples com foco em segurança utilizando middlewares essenciais. O projeto foi desenvolvido com **Node.js** e **TypeScript**, aplicando boas práticas para proteção de rotas.

Middlewares utilizados:

* **CORS**: controle de acesso entre domínios
* **Helmet**: proteção de headers HTTP
* **Rate Limit**: limita requisições para evitar abuso
* **XSS Clean**: proteção contra ataques XSS
* **Morgan**: log de requisições

A estrutura separa responsabilidades e facilita manutenção.

---

## Status do Projeto

Finalizado (projeto de estudo).

---

## Funcionalidades e Demonstração da Aplicação

* API com rotas protegidas por middlewares
* Monitoramento de IP nas requisições
* Logs de acesso no terminal
* Proteção contra ataques comuns (XSS, brute force, etc.)

Rotas disponíveis:

### GET /

Retorna:

```
API is working!
```

### GET /list

* Exibe o IP da requisição no console
* Retorna:

```
{
  "message": "ok"
}
```

Fluxo:

1. Requisição chega na API
2. Passa pelos middlewares de segurança
3. É registrada no log (Morgan)
4. Retorna resposta ao cliente

---

## Acesso ao Projeto

Clone o repositório e instale as dependências:

```id="m8jv3q"
npm install
```

Execute o servidor:

```id="3n5m2v"
npm run dev
```

Acesse:

```id="j4l9zn"
GET /
GET /list
```

---

## Tecnologias utilizadas

* Node.js
* TypeScript
* Express
* CORS
* Helmet
* Express Rate Limit
* XSS Clean
* Morgan

---

## Pessoas Contribuidoras

Sem contribuidores externos.

---

## Pessoas Desenvolvedoras do Projeto

Pablo Antônio Mascena Da Silva

---

## Licença

Uso livre para fins de estudo.

---

## Conclusão

Projeto focado em segurança básica de APIs com Express. Demonstra como aplicar middlewares essenciais para proteger rotas e monitorar requisições. Base para APIs mais robustas e seguras.
