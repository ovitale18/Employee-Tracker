const inquirer = require('inquirer');
//IMPORT AND RQUIRE MYSQL2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//CONNECTION TO DATABASE
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Deluxe666',
    database: 'employee_tracker_db'
});