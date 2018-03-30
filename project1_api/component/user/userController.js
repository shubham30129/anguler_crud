let con=require('../../config/config');

// Add User
exports.addUser=(req,res)=>{

    var fname=req.body.fname;
    var lname=req.body.lname;
    var img=req.body.img;
    console.log('req.body',req.body);
   // var qry="insert into user(fname,lname) values('"+ fname +"','"+ lname +"') ";
    var qry="insert into emp(fname,lname,img) values('"+ fname +"','"+ lname +"','"+ img +"') ";
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw error;
        console.log('insert....');
        res.send(result);
    });
};

// show all users
exports.showUser=(req,res)=>{
    //let qry="select * from user";
    let qry="select * from emp";
    con.query(qry,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
};

// delete user
exports.deleteUser=(req,res)=>{
    let id=req.params.id;
    let qry="delete from user where id="+id;
    con.query(qry,(error,result)=>{
        if(error) throw  error;
        res.send(result);
        console.log('delete');
    });
};

// Find user by id for edit
exports.editUser=(req,res)=>{
    let id=req.params.id;
    let qry="select * from user where id="+id;
    console.log(qry);
    con.query(qry,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
};

// Update User
exports.updateUser=(req,res)=>{
    let id=req.body.id;
    let fname=req.body.fname;
    let lname=req.body.lname;
    console.log(fname+"\n"+lname+"\n"+id);
    let qry="update user set fname='"+ fname +"',lname='"+ lname +"' where id='"+ id +"'";
    console.log(qry);


    con.query(qry,(error,result)=>{
        if(error) throw error;
        console.log('update....');
        res.send(result);
    });

};
