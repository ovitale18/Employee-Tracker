const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306
    user: 'root',
    password: 'Deluxe666'
    database: 'employee_tracker_db'
});