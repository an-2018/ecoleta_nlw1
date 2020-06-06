import knex from 'knex';
import path from 'path'; // return name / or \ 

const connection = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true

});

export default connection;

// Migrations: historico do banco de dados

// o que precisa ser feito na base de dados da aplicacao

// team work
// user1 => create table points
// user2 + create table users
// migrations create both