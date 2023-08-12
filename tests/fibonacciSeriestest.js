"use strict";

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../main");
const should = require("should");

chai.use(chaiHttp);

describe("Fibonacci Series", () => {
    describe("Get Fibonacci Series", () => {
        it("it should get fibonacci series", (done) => {
            chai
                .request(server)
                .get("/fibonacci/8")
                .end((err, res) => {
                    if (err) done(err)
                    should(res.status).be.exactly(200);
                    done();
                });
        });
    });

})
