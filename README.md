# API de Empréstimo de Livros

Este projeto implementa uma API de empréstimo de livros utilizando Node.js. A API permite que os usuários se cadastrem, façam login, consultem livros, façam empréstimos e realizem devoluções de livros. Toda a gestão dos livros e empréstimos é realizada de maneira eficiente e segura.

## Funcionalidades

- **Cadastro de Usuário**: Permite o registro de novos usuários.
- **Login de Usuário**: Autenticação dos usuários via JWT (JSON Web Token).
- **Gestão de Livros**: Cadastro, edição, visualização e remoção de livros.
- **Empréstimo de Livros**: Os usuários podem emprestar livros e informar a data de devolução.
- **Controle de Empréstimos**: A API gerencia os empréstimos de livros, com datas de empréstimo e devolução.
- **Segurança**: Todos os endpoints são protegidos com autenticação JWT.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework para construção de APIs.
- **JWT (JSON Web Tokens)**: Para autenticação de usuários.
- **Bcrypt**: Para encriptação de senhas.
- **Dotenv**: Para gerenciamento de variáveis de ambiente.
