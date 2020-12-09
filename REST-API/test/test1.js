
  let chai = require ("chai");
  let chaiHttp = require ("chai-http");
  let server = require ("../index");


  chai.should();

  chai.use(chaiHttp);

    describe ('data' ,() => { 
      
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
      const id=3;
        chai.request(server)
        .get("/" + id)
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

  describe("post /addusers",() => {
    it("It should get a new task by ", (done) => {
      const id={
        
        FirstName: "mitali",
        LastName: "mahajan",
        email: "shreyas.i@bluepineapple.io"
      };
        chai.request(server)
        .post("/addusers"  )
        .send(id)
        .end((err, response) => {
            response.should.have.status(200);
            response.body.should.be.an('object');
            
            //  response.body.should.have.property('LastName').eq(pillai);
            console.log(response.body);
        done();
        });
    });
  });


  //......................................................................................

  describe("Delete User",() => {
    it("DELETE Users Data", (done) => {

        chai.request(server)
        .delete('/5')
        .end((err, response) => {
            response.should.have.status(200);
            console.log(response.body);
        done();
        });
    });
  });


  });
  