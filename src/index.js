const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors({
  
}));
app.use(express.json());
app.use(routes);

/**
 * Rota  / Recurso
 *  
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * 
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: parâmetros utiizados para identificar recursos 
  * Request Body: Corpo de requesição, utilizado para criar e alterar recursos 
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc 
 */

/**
 * Driver: SELECT * FROM users
 * Query: Builder: table('useres').select('*').where()
 */



app.listen(process.env.PORT || 3000);

//app.listen(3333);