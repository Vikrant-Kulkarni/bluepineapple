
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
 