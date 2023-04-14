import {config} from 'dotenv';

config();

export const port = process.env.PORT;
export const database = process.env.DATABASE;
export const password = process.env.DB_PASSWORD;
export const db_port = process.env.DB_PORT;
export const db_host = process.env.DB_HOST;
export const db_user = process.env.DB_USER;


