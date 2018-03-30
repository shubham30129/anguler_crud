const express= require("express");
    const bodyparser=require("body-parser");
const app=express();
const router=require('./rout/rout');
const cors = require('cors');

app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({limit: '50mb'}));
router.route(app);
app.listen(1010,()=>{
    console.log("server is start");
});
