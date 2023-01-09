// import { Pool } from "pg";
// const pool = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT || "5432")
// });

import { Sequelize } from 'sequelize';


export const connect = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false

})
