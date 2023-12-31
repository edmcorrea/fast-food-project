
<div align="center">

 # Fast Food Project
  
  <div align="center">
    <img width="700" height="400" src="./frontend/src/assets/capa.png">
  </div>
  
  <br />
  
  <p align="center">
    <a href="https://fast-food-project-one.vercel.app/"><strong>Navegue pela versão de demonstração na web »</strong></a>
  </p>
</div>


Esta é a minha solução de projeto para um Fast Food com recursos interativos e funcionalidade principal de cadastro de pedidos. O Fast Food foi pensado para *acelerar o atendimento dos clientes*, além de *automatizar o processo dentro da cozinha* e também aviso de *status* para os clientes que aguardam.

<br>

## Tecnologias Utilizadas
---

- Frontend: **Vite + React.js, JavaScript**
- Backend: **Node.js, TypeScript**
- Outras Bibliotecas: **React-Hooks, Node-Thermal-Printer, SASS, React-Icons, Prisma, Jest, React-Testing-Library (RTL).**

<br>

## Processo de criação
---

Durante o processo de criação do projeto foram realizadas algumas etapas para atender aos principais objetivos e necessidades propostas no desafio. A história a seguir relata o desenvolvimento do projeto, desde o entendimento inicial até o final do projeto.

<details>

<summary><strong>Clique para mais detalhes</strong></summary>

- Leitura e Compreensão do Projeto:
Após receber o desafio Full Stack, foi realizada uma leitura aprofundada dos requisitos apresentados. Isso incluiu a compreensão das funcionalidades esperadas, como a necessidade de pesquisa personalizada, adicionar/remover pedidos, ver o total e o troco, incluir o nome do cliente, inserir observações nos pedidos, efetuar impressora térmica. Esta etapa foi essencial para definir a direção do desenvolvimento.

- Utilização de novas tecnologias: O desafio propõe a criação de um sistema de fastFood. Inicialmente então, dediquei tempo ao aprendizado de tecnologias relacionadas, através de tutoriais, documentação e exemplos de código para adquirir o conhecimento necessário para implementar o projeto. Por fim, resolvi implementar a biblioteca `Node-Thermal-Printer` e `Vite` para sua construção, pois apresentava o que era necessário para o desenvolvimento do projeto.

- Criação do MVP: Finalizadas as decisões de design, foi criado um MVP (Produto Mínimo Viável). Nesta fase foram desenvolvidos os componentes básicos da aplicação frontend para garantir um código funcional, enquanto analisava quais dados eram necessários trafegar entre o back-end e o front-end.

- Revisão de Componentes e Funcionalidades: Com as funcionalidades básicas implementadas, foi realizada uma revisão dos componentes desenvolvidos. Melhorias de código, ajustes de estilo e refatorações foram feitas para garantir a qualidade e usabilidade da aplicação.

- Criação de Testes: Para garantir a qualidade e estabilidade do código, foram desenvolvidos testes utilizando a Jest e React Testing Library.

</br>

</details>

<br>

## Características
---
- `Seleção rápida de pedidos`: O usuário vê uma pequena quantidade de produtos na tela para seleção rápida

- `Busca Personalizada`: O usuário tem a opção de digitar o nome ou código para encontrar o produto

- `Adição e remoção de produtos`: O usuário pode adicionar/remover itens e acompanhar o resumo do pedido

- `Selecionar vários produtos`: O usuário pode pedir mais de um produto em um mesmo pedido

- `Inserir itens adicionais ao pedido`: O usuário pode inserir adicionais ao pedido escolhido

- `Armazenamento no localStorage`: Os pedidos não são perdidos caso a página seja reinicializada automaticamente.

- `Troco e Total do Pedido`: O usuário pode ver o total e o troco.

- `Incluir o nome`: O usuário pode incluir o nome do cliente para ser entregue o pedido

- `Impressora térmica`: O pedido é impresso em uma via para o cliente (impressora térmica), liberando a tela para o próximo pedido ao finalizar.

- `Cozinha acessa os dados do pedido`: O pedido aparece para a cozinha junto ao nome do cliente

- `Baixa no Pedido`: A cozinha poderá dar baixa nos pedidos concluídos

- `Observação no pedido`: O usuário pode incluir uma observação a cozinha

- `Atribuir formas de pagamento`: O usuário pode atribuir múltiplas formas de pagamento na finalização do pedido

- `Tela com nome do cliente`: Os pedidos baixados devem aparecem em uma tela com o nome do cliente

- `Responsividade`: O design do código é responsivo, ou seja, navegável em ambiente web e mobile.

<br>

## Como começar
---


### Configurando o Banco de Dados usando Docker (MySQL)

1. Certifique-se de ter o Docker instalado na sua máquina. Se ainda não o tiver, você pode baixá-lo e instalá-lo a partir do [site oficial do Docker](https://www.docker.com/get-started).

2. Crie do container Docker - MySQL através do comando: `docker run --name db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=db -p 3306:3306 -d mysql:5.7`

<br>

### Para executar o projeto localmente:

1. **Execute o passo anterior** `Configurando o Banco de Dados usando Docker (MySQL)`
2. **Clone** este repositório: `git clone git@github.com:edmcorrea/fast-food-project.git`
3. **Navegue até o diretório** do projeto backend: `cd fast-food-project/` e `cd backend/`
4. Dentro da pasta `backend`, **renomeie** o arquivo `.env.example` para `.env`
5. OBSERVAÇÃO: Dentro de arquivo .env, **renomeie a variável** `interface` (substituindo 'tcp://xxx.xxx.xxx.xxx' pelo caminho onde a impressora térmica está instalada)! Ele é responsável por fazer a impressão térmica quando um novo pedido é criado.
6. **Instale as dependências** necessárias usando `npm install`
7. **Construa e povoe** o banco de dados através do comando `npx prisma migrate dev`
8. **Inicie a aplicação BackEnd** usando `npm start` 
9. Em outro terminal, **navegue até o diretório** do projeto frontend: `cd fast-food-project/` e `cd frontend/`
10. **Instale as dependências** necessárias usando `npm install`
11. **Inicie a aplicação FrontEnd** usando `npm run dev`
12. O projeto estará sendo executado em `http://localhost:5173/`

<br>

<details>

<br>

<summary><strong>Para executar o projeto (Com Docker)</strong></summary>

1. **Clone** este repositório: `git clone git@github.com:edmcorrea/fast-food-project.git`
2. **Navegue até o diretório** do projeto: `cd fast-food-project/`
3. Dentro da pasta `backend`, **renomeie** o arquivo `.env.example` para `.env`
4. OBSERVAÇÃO: Dentro de arquivo .env, **renomeie a variável** `interface` (substituindo 'tcp://xxx.xxx.xxx.xxx' pelo caminho onde a impressora térmica está instalada)! Ele é responsável por fazer a impressão térmica quando um novo pedido é criado.
5. Na raiz do projeto, **execute o comando** `docker-compose up -d` ou `docker compose up -d`
6. O projeto estará sendo executado em `http://localhost:5173/`

<br>

</details>

<br>

## Como usar
---

1. `Digite o produto que deseja consumir na pesquisa`. Assim que escolhido o produto, clique nele.
2. Na página seguinte, `selecione a quantidade de produtos` que deseja e `insira uma observação do produto`.
3. `Adicione mais algum produto` ao pedido se achar necessário.
4. No `resumo dos pedidos`, você pode `remover um produto, cancelar todo o pedido` feito ou `ir para a área de Pagamento`.
5. Na área de pagamento, é `obrigatório inserir o nome do cliente` e `a forma de pagamento` para concluir o pedido.
6. Caso escolha a `forma de pagamento "dinheiro"`, será aberta uma `calculadora automática de troco` para facilitar as contas.
7. Clique em `Finalizar Pedido` para a cozinha iniciar o preparo do pedido. Além disso, será impressa a comanda pela `impressão térmica`.
8. Na cozinha, é possível `remover um pedido` ou `mudar o status` de um pedido para "Pronto".


<br>

## Documentação da API
---

<details>

<summary><strong>Clique para mais detalhes</strong></summary>

  #### Coleta de todos os pedidos

  - Requisição (Request)
  ```http
    GET => /customer
  ```

  - Resposta (Response)

  ```

  "message": [
    {
      codCustomer: 1,
      customerName: "Ricardo",
      products: [{ name:"Hamburguer Novo", observation: "", quantity: 1}, { name:"Smash da Casa", observation: "", quantity: 1}],
      status: "Preparing"
    },
    {
      codCustomer: 2,
      customerName: "Luiza",
      products: [{ name:"Smash da Casa", observation: "", quantity: 2}],
      status: "Preparing"
    },
    (...)
  ]
  ```

</br>

  #### Criação de pedido

  - Requisição (Request)
  ```http
    POST => /customer
  ```

  - body
  ```
    {
      customerName: "Bruna",
      products: [{ name:"Hamburguer Novo", observation: "sem molho", quantity: 1}],
      status: "Preparing"
    }
  ```

  - Resposta (Response)

  ```
  "message": {
    codCustomer: 3,
    customerName: "Bruna",
    products: [{ name:"Hamburguer Novo", observation: "sem molho", quantity: 1}],
    status: "Preparing"
  }
  ```

</br>

  #### Atualização do status do pedido

  - Requisição (Request)
  ```http
    PATCH => /customer/:id
  ```
  - Params - :id
  ```
    { id: 1 }
  ```

  - body
  ```
    {
      "status": "Completed"
    }
  ```

  - Resposta (Response)

  ```
  "message": {
      codCustomer: 1,
      customerName: "Ricardo",
      products: [{ name:"Hamburguer Novo", observation: "", quantity: 1}, { name:"Smash da Casa", observation: "", quantity: 1}],
      status: "Completed"
    },
  ```

</br>

  #### Remova um pedido em Preparo ou Pronto

  - Requisição (Request)
  ```http
    DELETE => /customer/:id
  ```
  - Params - :id
  ```
    { id: 1 }
  ```

</br>

</details>

</br>

## External Documentation

- Vite + React: `https://vitejs.dev/guide/`
- SASS: `https://sass-lang.com/documentation/`
- Node-Thermal-Printer: `https://github.com/Klemen1337/node-thermal-printer`
- Prisma: `https://www.prisma.io/`
