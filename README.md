# 🧠 Jovem Trabalhador API

API do projeto **Jovem Trabalhador**, criada para um professor que precisava de um sistema capaz de registrar diversos alunos de várias instituições, mesmo em ambientes sem conexão com a internet (essa funcionalidade será tratada no front-end). A API permite o gerenciamento completo de alunos, instituições e usuários autenticados.

---

## 🔗 Front-end

[Repositório do Front-end](https://github.com/Kaua032/Jovem_Trabalhador_Front_End)

---

## ⚙️ Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (Token)
- bcrypt
- dotenv
- cors
- json2csv

---

## 🔐 Autenticação

Sistema de autenticação com JWT. O token é armazenado em cookies e validado nas rotas protegidas.

---

## 📦 Banco de Dados

- MongoDB com Mongoose.

---

## 📌 Funcionalidades

- Cadastro e login de usuários (JWT com cookies)
- Registro de alunos com vínculo a instituições
- Atualização, exclusão e geração de relatórios de alunos
- Cadastro e gerenciamento de instituições

---

## 📄 Rotas principais

### 👤 Usuário
- `POST /user/register`
- `POST /user/login`
- `GET /user/findById`

### 🧑‍🎓 Aluno
- `POST /student/register`
- `POST /student/generate`
- `PUT /student/update`
- `DELETE /student/delete/:id`

### 🏫 Instituição
- `POST /college/register`
- `GET /college/all`
- `PUT /college/update/:id`
- `POST /find`

---

## 🧪 Testando localmente

```bash
# Clone o projeto
git clone https://github.com/Kaua032/Jovem_Trabalhador_API.git

# Entre na pasta
cd Jovem_Trabalhador_API

# Instale as dependências
npm install

# Crie um arquivo .env com as variáveis:
MONGODB_URI=sua_string_de_conexão
JWT_SECRET=sua_chave_secreta
PORT=3000

# Execute o projeto
npm run dev

