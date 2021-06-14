var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_hor',
  password        : '0681',
  database        : 'cs340_hor'
});
module.exports.pool = pool;
