const { Pool } = require('pg');

const config = {
  user: 'seu_usuario',
  password: 'sua_senha',
  host: 'localhost',
  database: 'seu_banco_de_dados',
  port: 5432 
};

const pool = new Pool(config);

async function executeQuery(query) {
  let client;

  try {
 
    client = await pool.connect();


    const result = await client.query(query);


    return result.rows;
  } catch (error) {
    console.error('Erro ao executar consulta:', error);
    throw error;
  } finally {

    if (client) {
      client.release();
    }
  }
}


const consulta = 'SELECT * FROM tabela';
executeQuery(consulta)
  .then(result => {
    console.log('Resultado da consulta:', result);
  })
  .catch(error => {
    console.error('Erro na consulta:', error);
  });
