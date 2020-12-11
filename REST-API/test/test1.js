
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

      beforeEach(()=>{
        console.log("................Test case Started.......................")
      })

      afterEach(()=>{
        console.log("................Test case Ended.......................")
      })

   //......................................Add User....................................................  



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
               
                console.log(response.body);
            done();
            });
        });
      });
    
   //......................................Get All Users....................................................  



      
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


   //......................................Get  User By Specific id....................................................  

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



     //......................................delete User....................................................  

  after(function() {
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
  
})
  

  });
 