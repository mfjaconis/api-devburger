# DevBurger API

Bem-vindo à **DevBurger API**, o backend de uma aplicação para gerenciamento de pedidos e cardápio de uma hamburgueria. Este projeto foi desenvolvido para facilitar a administração de produtos, categorias e pedidos, integrando funcionalidades essenciais de um sistema de delivery.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para o servidor.
- **Express**: Framework para criação de rotas e APIs RESTful.
- **Sequelize**: ORM para manipulação do banco de dados.
- **PostgreSQL**: Banco de dados relacional.
- **Docker**: Contêineres para garantir um ambiente consistente.
- **TypeScript**: Para tipagem estática e maior confiabilidade no desenvolvimento.



## 🌟 Funcionalidades

- **Gestão de Produtos**:
  - CRUD completo (criação, leitura, atualização e exclusão).
  - Relacionamento com categorias.
- **Gestão de Pedidos**:
  - Criação e acompanhamento de pedidos.
  - Alteração do status de pedidos.
- **Autenticação e Autorização**:
  - Sistema de login e tokens JWT.

## ⚙️ Configuração e Execução

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js**
- **Docker e Docker Compose**

### Passos para executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/mfjaconis/api-devburger.git
   cd api-devburger
2. Instale as dependência:
   ```bash
   npm install
3. Suba o ambiente com Docker: 
   ```bash
   docker-compose up

4. Execute as migrações para configurar o banco de dados: 
   ```bash
   npx sequelize-cli db:migrate

5.Inicie a API:
 ```bash
   npm run dev
