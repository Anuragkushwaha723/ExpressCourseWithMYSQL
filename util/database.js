const sql=require('mysql2');

const pool=sql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Anurag@9839'
});

module.exports=pool.promise();
