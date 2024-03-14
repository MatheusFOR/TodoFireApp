# Projeto React Native com Expo e Firebase

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-brightgreen)](https://nodejs.org/)
[![Expo](https://img.shields.io/badge/Expo-CLI-blue)](https://docs.expo.io/get-started/installation/)
[![Firebase](https://img.shields.io/badge/Firebase-Config-red)](https://firebase.google.com/)

Bem-vindo ao nosso projeto React Native! Este é um guia passo a passo para configurar e instalar o projeto em sua máquina.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org) - Certifique-se de ter a versão LTS instalada.
- [Expo CLI](https://docs.expo.io/get-started/installation/) - Você pode instalá-lo globalmente via npm ou yarn.
- [Git](https://git-scm.com/downloads) - Para clonar este repositório, se ainda não o fez.
- Uma conta [Firebase](https://firebase.google.com/) - Para configurar e utilizar serviços como Firebase Authentication e Firebase Firestore.

## Instalação

1. Clone este repositório em sua máquina local:

    ```bash
    git clone https://github.com/MatheusFOR/TodoFireApp.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd TodoFireApp
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    # ou
    yarn install
    ```

4. Crie um arquivo `firebaseConfig.ts` na raiz do projeto e adicione suas chaves de configuração do Firebase:

    ```plaintext
    API_KEY=chave_api
    AUTH_DOMAIN=dominio_auth
    DATABASE_URL=url_do_database
    PROJECT_ID=id_do_projeto
    STORAGE_BUCKET=bucket_storage
    MESSAGING_SENDER_ID=id_sender
    APP_ID=id_do_aplicativo
    ```

5. Inicie o servidor Expo:

    ```bash
    expo start
    ```

6. Escaneie o código QR com o aplicativo Expo em seu dispositivo móvel ou utilize um emulador para visualizar o aplicativo.

## Configuração Adicional

Certifique-se de configurar corretamente as regras de segurança do Firebase para o Firestore e a autenticação, de acordo com suas necessidades de projeto.

## Contribuindo

Fique à vontade para contribuir para este projeto! Se você encontrar problemas ou tiver sugestões de melhoria, abra uma issue ou envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Esperamos que este guia seja útil para você começar com nosso projeto React Native utilizando Expo e Firebase. Se tiver alguma dúvida ou precisar de ajuda adicional, não hesite em entrar em contato conosco. Divirta-se codificando! 🚀
