# 🌍 WikiPaíses - Explorador Global

O **WikiPaíses** é uma aplicação web moderna desenvolvida em **React** que permite aos utilizadores explorar informações detalhadas sobre todos os países do mundo. O projeto consome dados em tempo real da [REST Countries API](https://restcountries.com/) e oferece uma interface intuitiva com suporte a modo escuro, filtros avançados e navegação fluida.

---

## 🏗️ Arquitetura do Sistema

A aplicação segue uma arquitetura baseada em componentes, estruturada para ser escalável e de fácil manutenção:

* **Camada de Visualização (Pages):**
    * `Home`: Gere a listagem global, estados de filtragem e lógica de paginação.
    * `Detail`: Extrai parâmetros da URL para buscar e exibir dados específicos de um país.
* **Componentes Reutilizáveis (Components):**
    * `Card`: Representação visual resumida de um país.
    * `InfoBlock`: Bloco atómico para exibição de pares rótulo/valor na tela de detalhes.
    * `Header`: Navegação principal e controlo de estado do tema (Dark/Light).
* **Serviços (Services):**
    * `CountriesService`: Centraliza as chamadas à API REST utilizando `fetch` ou `axios`, abstraindo a lógica de comunicação externa.
* **Encaminhamento (Routing):**
    * Utilização do `react-router-dom` para navegação entre rotas dinâmicas (`/country/:code`).

---

## 🚀 Funcionalidades Principais

1.  **Exploração Dinâmica:** Listagem de países com carregamento assíncrono.
2.  **Pesquisa em Tempo Real:** Filtragem instantânea por nome enquanto o utilizador digita.
3.  **Filtro por Continente:** Dropdown para segmentar países por região (Américas, Europa, Ásia, etc.).
4.  **Paginação:** Divisão inteligente da lista (20 países por página) para otimizar a performance e UX.
5.  **Modo Noturno (Dark Mode):** Alternância de temas utilizando variáveis CSS (`:root`) e manipulação de atributos no DOM.
6.  **Design Responsivo:** Layout adaptável para dispositivos móveis e desktop.

---

## 📦 Instalação e Configuração

### Pré-requisitos
* Node.js (v16 ou superior)
* npm ou yarn

### Passos para Instalação

1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/brenocmlo/WikiPaises.git
    cd wikipaises
    ```

2.  **Instalar as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Executar o projeto em ambiente de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

4.  **Aceder à aplicação:**
    Abra o seu navegador e aceda a `http://localhost:5173` (ou a porta indicada no terminal).

---

## 🛠️ Tecnologias Utilizadas

* **React 18** (Vite como build tool)
* **React Router Dom** (Navegação)
* **CSS Variables** (Temas e Estilização)
* **REST Countries API** (Fonte de dados)

---

**Desenvolvido como projeto de portfólio para demonstração de competências em Front-end moderno.**
