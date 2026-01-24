# Automação de Testes com Cypress

Este repositório contém um projeto de **automação de testes Web** desenvolvido com **Cypress**, aplicando boas práticas de **Quality Assurance (QA)** e utilizando o padrão **Page Object Model (POM)** para organização e manutenção dos testes.

O projeto faz parte do meu processo de formação em QA, com foco em testes manuais, automação E2E e validação de fluxos reais de uma aplicação web.

---

## 🎯 Objetivo do Projeto

- Automatizar cenários críticos de uma aplicação web
- Aplicar boas práticas de QA na escrita de testes
- Utilizar o padrão **Page Object Model (POM)** para separação de responsabilidades
- Desenvolver testes legíveis, reutilizáveis e de fácil manutenção
- Simular cenários reais de uso do sistema

---

## 🧪 Cenários Automatizados

- Login com credenciais válidas
- Login com credenciais inválidas
- Validação de acesso ao Dashboard
- Navegação pelo menu da aplicação
- Atualização de informações do usuário (My Info)
- Preenchimento e submissão de formulários
- Validação de mensagens de sucesso e feedbacks visuais

---

## 🚀 Tecnologias Utilizadas

- **Cypress**
- **JavaScript**
- **Node.js**
- **Chance.js** (geração de dados dinâmicos)
- **HTML / CSS** (aplicação testada)

---

## 🧱 Arquitetura de Testes

O projeto utiliza o padrão **Page Object Model (POM)**, separando a lógica dos testes da camada de interação com a interface.

- **Page Objects** centralizam seletores e ações das páginas
- **Specs** contêm apenas os cenários de teste
- **Fixtures** armazenam a massa de dados
- **Support** concentra comandos customizados e configurações globais

Essa abordagem melhora a legibilidade, reutilização de código e facilita a manutenção dos testes.

---

## 📂 Estrutura do Projeto

cypress/
├── e2e/ # Casos de teste automatizados (specs)
├── fixtures/ # Massa de dados para testes (JSON)
├── pages/ # Page Objects (POM) com seletores e ações
├── support/ # Comandos customizados e configurações globais
cypress.config.js
package.json

---

## 📊 Massa de Dados

A massa de dados é gerenciada via **fixtures**, evitando valores hardcoded nos testes e facilitando a manutenção e reutilização.

Exemplo:
- Usuário válido
- Usuário inválido

---

## ▶️ Como Executar os Testes

### Pré-requisitos
- Node.js instalado
- NPM ou Yarn

### Passos


```bash

1. Clone o repositório:
git clone https://github.com/Lucas1802/primeiros-passos-cypress.git

2. Acesse a pasta do projeto:
cd primeiros-passos-cypress

3. Instale as dependências:
npm install

4. Execute os testes:
npx cypress open

Ou em modo headless:
npx cypress run

```

## 📌 Boas Práticas Aplicadas

- Uso de Page Object Model (POM)
- Separação clara entre testes e lógica de interface
- Uso de fixtures para dados de teste
- Geração de dados dinâmicos com Chance.js
- Testes focados no comportamento do usuário
- Nomes de testes claros e objetivos

---

## 📚 Observações

Este projeto possui fins educacionais e práticos, sendo utilizado para consolidar conhecimentos em Quality Assurance (QA) e automação de testes durante minha formação.

---

## 🔗 Contato

LinkedIn: https://www.linkedin.com/in/lucas-gabriel2002/

GitHub: https://github.com/Lucas1802