
# 📝 Sistema de lembretes

O Gerenciador de Lembretes é uma aplicação web desenvolvida para organizar tarefas e compromissos diários de forma eficiente e intuitiva. O sistema permite a visualização e gerenciemento  de lembretes de maneira conveniente.

### Funcionalidades Principais

**Adicionar Lembretes:** Os usuários podem facilmente adicionar novos lembretes, especificando um nome e data para cada um.

**Visualizar Lembretes:** Os lembretes são exibidos de forma clara e organizada, agrupados por data, facilitando a visualização e acompanhamento das tarefas programadas.

**Excluir Lembretes:** Os usuários têm a opção de excluir lembretes que não são mais necessários, mantendo a lista de lembretes atualizada e organizada.

## 🚀 Tecnologias

- Frontend:

    - [React](https://react.dev/)
    - [SASS](https://sass-lang.com/)
    - [JavaScript](https://www.javascript.com/)

- Backend

    - [C#](https://dotnet.microsoft.com/pt-br/languages/csharp)
    - [.NET](https://dotnet.microsoft.com/pt-br/)

- Database:

    - [MySQL](https://www.mysql.com/)
    - [HeideSql](https://www.heidisql.com/)

---

## 💻 Instruções de utilização

**Passo 01: clone o repositório**

`$ git clone https://github.com/duda-amaral/sistema-de-lembretes.git`

**Passo 02: instalar REACT via CLI**

A instalação do React CLI pode ser acessada [aqui](https://create-react-app.dev/).

`npm install react react-dom`

**Passo 03: iniciar front-end via linha de comando**

- Passo 3.1: acesse a pasta clonada no **Passo 01** pelo CMD: `cd sistema-de-lembretes`;
- Passo 3.2: acesse a pasta front-end pelo CMD: `cd codigo/front-end/vite-project`;
- Passo 3.3: iniciar aplicação front-end: `npm run dev`

A aplicação vai estar rodando em <http://localhost:5173/>.

**Passo 04: iniciar back-end via linha de comando**

- Passo 4.1: acesse a pasta clonada no **Passo 01** pelo CMD: `cd sistema-de-lembretes`;
- Passo 4.2: acesse a pasta back-end pelo CMD: `cd codigo/back-end`;
- Passo 4.3: será necessário modificar o usuário e senha do banco de dados nos arquivos `ContextoDB.cs` e `appsettings.json`; 
- Passo 4.4: iniciar aplicação frontend: `dotnet run`

A aplicação vai estar rodando em <http://localhost:5103/>.
