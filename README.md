
<h1 align="center">
  <img alt="Ecoleta_home" src=".github/ecoleta.png" />
</h1>



<p align="center">
<img alt="Github language Count" src="https://img.shields.io/github/languages/count/an-2018/ecoleta_nlw1" />
</p>

# ecoleta_nlw1
O projeto ecoleta foi desenvolvido na Next Level Week da Rocketseat, a aplicacao demonstra a utilizacao da stack node no backend, reactjs no frontend web e react native no mobile.


---

## Tecnologias
- [ReactJS](https://reactjs.org/)
- [React-native](https://reactnative.dev/)
- [Sqlite](https://www.sqlite.org/index.html)
- [Typescript](https://www.typescriptlang.org/)
- [Expo](https://expo.io/)
- [Knex](http://knexjs.org/)

Uma lista completa das dependencias do projeto podera ser encontrada nos ficheiros package.json de cada um dos projetos, web, server e mobile. Esse mesmo ficheiro servira para a instalacao de cada aplicacao seguindo os passo na <a href="#instalacao">Instalacao<a/>. 

--- 

## Instalacao 

Para executar os projetos segue-se os seguintes passos
```bash
$ git clone https://github.com/an-2018/ecoleta_nlw1.git
# entrar em cada pasta server | mobile | web e intalar as dependencias

$ npm install

# Na pasta server executar os comandos a seguir para criar as tabelas necessarias da base de dados
$ npm run knex:migrate
$ yarn knex:seed

# Executar o codigo do sservidor
$ npm run dev

# Na pasta web executar o comando para iniciar a app web:
$ npm run start

# E para testar a app mobile executar:
$ expo start
```

Adicionalmente sera necessario alterar as configuracoes do endereco do servidor, que ate entao utiliza um endereco estatico, futuramente sera implementada a automacao desta funcionalidade.
Para implementar as alteracoes, basta mudar a url nos seguintes ficheiros
```js
    // mobile\src\services\api.ts
    baseURL: 'http://192.168.88.13:3333',
    
    // server\src\controllers\ItemsControllers.ts
    image_url: `http://192.168.88.13:3333/uploads/${item.image}`
    
    // server\src\controllers\PointsControllers.ts
    image_url: `http://192.168.88.13:3333/uploads/${point.image}` 
```
