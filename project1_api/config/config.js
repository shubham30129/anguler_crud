const mysql=require("mysql");
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'test'
});

db.connect((error)=>{
    if(error) throw error;
   console.log('database is connect');
});
module.exports=db;