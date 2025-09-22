Podcast API

Projeto: Gerenciador de Podcasts
API feita com Node.js + TypeScript + HTTP Module

🚀 Funcionalidades

Criação, leitura, atualização e remoção (CRUD) de podcasts
Endpoints RESTful
Validação de dados básica
Código organizado em módulos (controllers, models, etc)

🛠️ Tecnologias
Node.js
TypeScript
HTTP Module built-in (sem frameworks tipo Express)
TSConfig pra configurar compilação etc

📁 Estrutura
src/<br>
  ├─ controllers/    ← recebe req/res, valida dados e chama o service
  ├─ repositories/   ← acesso a dados
  ├─ services/       ← regras de negócio
  ├─ utils/          ← funções auxiliares
  ├─ models/         ← tipos/interfaces de dados
  ├─ routes/         ← definição de rotas/endpoints
  ├─ app.ts          ← monta a aplicação (Express, middlewares, rotas)
  └─ server.ts       ← só inicializa o servidor
  
⚙️ Como usar
Clona o repo
git clone https://github.com/MatheusMagalhaes-dev/podcast.git


Entra na pasta
cd podcast


Instala dependências
npm install


Compila o TypeScript (se necessário)
npm run build


Roda o servidor
npm start

🤝 Contribuição
Pull requests são bem-vindas.
Se for fazer algo, abre uma issue antes pra gente alinhar pra onde o projeto tá indo pra não duplicar trabalho.
