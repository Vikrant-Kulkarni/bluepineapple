
 const express = require('express');
 const router = express.Router();
 const mysql = require('mysql');
 var bodyParser = require ('body-parser');

 const Response = require ('./response');
 this.response = new Response();



 router.use(bodyParser.urlencoded({ extended : false}))

 router.use(bodyParser.json())

 const pool = mysql.createPool({
    connectionLimit: 10,
    host : 'localhost',
    user : "root",
    password : "" ,
    database : "employeeDB"
})


//TO GET ALL USER DATA
router.get('/getusers' , (req , res) => {

    pool.getConnection((err , connection) =>{         if(err) 
         console.log(err);
            else
            console.log(`connected as id ${connection.threadId}`);
   
          connection.query('SELECT * from employee', (err,rows) =>{
           connection.release();
            let returnValue = this;
            let self = this;
   
   
              if(err) {
                   returnValue = self.response.failure("error");
                   res.send(returnValue);
               } else {
                //  console.log(err);
                returnValue = self.response.success(rows);
                   res.send(returnValue);
             }
         })
      })
    })


    
//DISPLAY DATA WITH SPECIFIC ID
router.get('/:id' , (req , res) => {

  pool.getConnection((err , connection) =>{
      if(err) 
      console.log(err);
      else
      console.log(`connected as id ${connection.threadId}`);

      connection.query('SELECT * from employee WHERE ID=?',[req.params.id], (err,rows) =>{
      connection.release();
      let returnValue = this;
            let self = this;


          if(err) {
            returnValue = self.response.failure("error");
            res.send(returnValue);
          } else {
            returnValue = self.response.success(rows);
            res.send(returnValue);
          }
      })
  })
})


//DELETE DATA WITH SPECIFIC ID
router.delete('/:id' , (req , res) => {

  pool.getConnection((err , connection) =>{
      if(err) 
      console.log(err);
      else
      console.log(`connected as id ${connection.threadId}`);

      connection.query('DELETE from employee WHERE ID=?',[req.params.id], (err,rows) =>{
      connection.release();
      let returnValue = this;
      let self = this;




         if(err) {
          returnValue = self.response.failure("error");
          res.send(returnValue);
          } else {
            returnValue = self.response.success(rows);
            res.send(returnValue);
          }
     })
  })
})



//ADD DATA TO TABLE
router.post('/addusers' , (req , res) => {

  pool.getConnection((err , connection) =>{
      if(err) 
      console.log(err);
      else
      console.log(`connected as id ${connection.threadId}`);

      const params = req.body;
     connection.query('INSERT INTO employee SET ?',params, (err,rows) =>{
    connection.release();
    let returnValue = this;
      let self = this;


          if(err) {
            returnValue = self.response.failure("error");
          res.send(returnValue);
          } else {
            returnValue = self.response.success(rows);
            res.send(returnValue);
          }
      })
  })
})

//UPDATE DATA 

router.put('/update/:id' , (req , res) => {

  pool.getConnection((err , connection) =>{
      if(err) throw err
      console.log(`connected as id ${connection.threadId}`);
     
      const { ID, FirstName , LastName , email} = req.body;


      connection.query('UPDATE employee SET ID=?, FirstName=?, LastName=?, email=? WHERE id =?', [ID,FirstName,LastName,email, req.params.id], (err,rows) =>{
      connection.release();
      let returnValue = this;
      let self = this;


          if(err) {
            returnValue = self.response.failure("error");
          res.send(returnValue);
          } else {
            returnValue = self.response.success(rows);
            res.send(returnValue);
          }
      })
      console.log(req.body);
  })
})




module.exports = 
module.exports = router