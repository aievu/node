# Node Videos API

Uma API RESTful simples construída com **Fastify**, **PostgreSQL (Neon)** e **Node.js** para gerenciar uma coleção de vídeos.  
Ela oferece operações **CRUD**: criar, listar, atualizar e deletar registros de vídeos.  


Este projeto expõe uma **API de gerenciamento de vídeos**, permitindo que clientes:  
- Criem novos vídeos  
- Listem todos os vídeos ou pesquisem por título  
- Atualizem informações de vídeos  
- Removam vídeos  

O backend usa **Fastify** para lidar com as requisições e **PostgreSQL** (via **Neon serverless**) como banco de dados.

---

## Funcionalidades
- Endpoints RESTful para `/videos`  
- Persistência em PostgreSQL  
- Busca de vídeos por título usando query parameters  
- Suporte a banco serverless (Neon)  
- Construído em **ES Modules** modernos  
