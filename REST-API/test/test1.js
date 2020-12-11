
  let chai = require ("chai");
  let chaiHttp = require ("chai-http");
  let server = require ("../index");
let id;

  chai.should();

  chai.use(chaiHttp);

  let userID=0; 

    describe ('data' ,() => { 

      before(function() {
          console.log("........Before Test Start.............")

           id={
        
            FirstName: "demofirstname",
            LastName: "demolatname",
            email: "demo@bluepineapple.io"
          };

      })

      after(function() {
        console.log("........After Test Ended.............")
    })



    describe("post /addusers",() => {
        it("It should get a new task by ", (done) => {
          
            chai.request(server)
            .post("/addusers"  )
            .send(id)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                userID = response.body.data.insertId
                console.log(userID);
                //  response.body.should.have.property('LastName').eq(pillai);
                console.log(response.body);
            done();
            });
        });
      });
    



      
    describe("/getusers",() => {
        it("It should get all the data", (done) => {
            chai.request(server)
            .get("/getusers")
            .end((err, response) => {
                  response.should.have.status(200);
                  response.body.should.be.an('object');
                  console.log(response.body);
              done();
            });
        });
    });


  // ...................................................................

  describe("/:id",() => {
    it("It should get a task by id", (done) => {
      
        chai.request(server)
        .get("/" + userID)
        .end((err, response) => {
              response.should.have.status(200);
              response.body.should.be.an('object');
              response.body.should.have.property('success');
              // response.body.should.have.property('Lastname');
              console.log(response.body.data);
          done();
        });
    });


    
  });

  //..................................................................................


  //......................................................................................

  describe("Delete User",() => {
    it("DELETE Users Data", (done) => {

        chai.request(server)
        .delete("/" + userID)
        .end((err, response) => {
            response.should.have.status(200);
            console.log(response.body);
        done();
        });
    });
  });


  });
  
//   var should = require('chai').should();
// let server = require('../index');
// let chai = require('chai');
// const chaiHttp = require('chai-http');
// const { expect } = require('chai');
// var connection = require('../user');
// const { response } = require('express');
// let count = 1;
// let userID=0;
// let userID2=0;
// chai.use(chaiHttp);
// describe('API Test',()=>{

//     before(()=>{
//         console.log("Start test");
//         connection.query(' SELECT MAX(ID) as highest FROM employee',(err,result)=>{
//             if(err) throw err;
//             console.log(result[0].highest);
//             max_users = result[0].highest;
//         });
//         connection.query('INSERT INTO employee(FirstName, LastName, email) values("demo_name","demo_last","demo@gmail.com")',(err,result)=>{
//             if(err) throw err;
//             console.log(result);
//             userID = result.insertId;
//         });
        
//     });
    
//     after(()=>{
//         connection.query(`ALTER TABLE employee AUTO_INCREMENT=${max_users}`,(err,result)=>{
//             if(err) throw err;
//         });
//         console.log("reset the auto increment of table");
//         console.log("End test");
//     });
    
//     beforeEach(function () {
//         console.log("Currently checking for test number : " + count);
//     });

// /* -------------------------------------------GET ALL USERS---------------------------------------------------- */
    
//     describe('GET /getAllUsers',()=>{
//         it('should have list of all users',(done)=>{
//             chai.request(server)
//             .get("/getusers")
//             .end((err,response)=>{
//                 response.should.have.status(200);
//                 response.body.should.be.a('object');
//                 response.body.should.have.property('success',true);
//                 response.body.should.have.property('error');
//                 response.body.should.have.property('data');
//                 //response.body.should.have.property('data').to.be.an('array').with.lengthOf(5);
//                 done();
//             });
//         });
//         it('should return 404 status if not found',(done)=>{
//             chai.request(server)
//             .get("/getusers")
//             .end((err,response)=>{
//                 response.should.have.status(404);
//                 done();
//             });
//         });
//     });
    
//     /* ----------------------------------------GET USER BY ID------------------------------------------------- */
    
//     describe('GET /getUserById',()=>{
//         it('should give all the details of user having ID 1',(done)=>{
//             chai.request(server)
//             .get('/:id'+userID)
//             .end((err,response)=>{
                    
//                 response.should.have.status(200);
//                 response.body.should.be.a('object');
//                 response.body.should.have.property('success',true);
//                 response.body.should.have.property('error',null);
//                 response.body.should.have.property('data');
//                 response.body.should.have.property('data').to.be.an('array').with.lengthOf(1);
//                 response.body.data[0].should.have.property('ID');
//                 response.body.data[0].should.have.property('FirstName');
//                 response.body.data[0].should.have.property('LastName');
               
                    
//                 done();
//             });
//         });
//     });

//     /* -------------------------------------------ADD USER---------------------------------------------------- */

//     describe('POST',()=>{
//         it('should add a new user',(done)=>{
//             userID2 = userID +1;
//             const user = {
//                 ID: userID2,
//                 FirstName: "Testing",
//                 LastName: "Testing",
//                email: "testing@test.com"
//             }
//             chai.request(server)
//             .post('/addUser')
//             .send(user)
//             .end((err,response)=>{
//                 response.body.should.be.a('object');
//                 response.body.should.have.property('success',true);
//                 response.body.should.have.property('error',null);
//                 response.body.should.have.property('data');
//                 response.body.data.should.have.property('ID');
//                 response.body.data.should.have.property('FirstName','Testing');
//                 response.body.data.should.have.property('LastName','Testing');
               
//                 //userID2 = response.body.data.ID;
                
//             console.log(userID2);
//                 done();
//             });
            
//         });
//         it('should delete the newly created user by post method',(done)=>{
//             chai.request(server)
//             .delete('/:id'+userID2)
//             .end((err,response)=>{
//                 response.body.should.be.a('object');
//                 response.body.should.have.property('success',true);
//                 response.body.should.have.property('error',null);
//                 response.body.should.have.property('data');
//                 done();
//             });
//         });
//     });
    
//     /* -------------------------------------------UPDATE USER---------------------------------------------------- */

//     describe('PUT',()=>{
//         it('should update an existing user',(done)=>{
//             const user = {
//                 ID: userID,
//                 FirstName: "Updated",
//                 LastName: "User",
//                 email: "user@gmail.com"
//             }
//             chai.request(server)
//             .put('/update/:id'+userID)
//             .send(user)
//             .end((err,response)=>{

//                 response.body.should.be.a('object');
//                 response.body.should.have.property('success',true);
//                 response.body.should.have.property('error',null);
//                 response.body.should.have.property('data');
//                 response.body.data.should.have.property('ID').eq(userID);
//                 response.body.data.should.have.property('FirstName','Updated');
//                 response.body.data.should.have.property('LastName','User');
                

//                 done();
//             });
//         });
//     });
        
//     /* ----------------------------------------DELETE USER---------------------------------------------------- */
    
//     describe('DELETE',()=>{
//         it('should delete user from the list',(done)=>{
//             chai.request(server)
//             .delete('/:id'+userID)
//             .end((err,response)=>{
//                 response.body.should.be.a('object');
//                 response.body.should.have.property('success',true);
//                 response.body.should.have.property('error',null);
//                 response.body.should.have.property('data');
//                 done();
//             });
//         });
//     });
    

//     afterEach(function () {
//         console.log("Done with test number: " + count);
//         ++count;
//     });
    
// });
 