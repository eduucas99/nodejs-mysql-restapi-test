//createPool es el equivalente a createConnection, pero este permite un conjunto de conexiones que se pueden reutilizar
import {createPool} from 'mysql2/promise'
import {db_host,database,db_port,db_user,password} from './config.js';

export const conection = createPool({
    host: db_host,
    user: db_user,
    password: password,
    port: db_port,
    database: database
});