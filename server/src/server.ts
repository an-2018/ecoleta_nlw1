
import express from 'express';
import routes from './routes';
import path from 'path';

import cors from 'cors';

import {errors} from 'celebrate'

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

// rota : endereco 
// Recurso : qual entidade estamos acessando

// Get: get info from backend
// Post: to create new info on the backend
// Put: edit|update content on the backend
// Delete: delete data from backend

// params
// Request Param: Parametros que vem na rota que identificam um recurso
// Query param: parametro que vem na rota opcionais para filtragens
// Request body: parametros para criacao e atualizacao de informations | send and get

// Database
// Select * From users WHere name = 'joao'
// knex('users').where('name', 'joao').select('*')