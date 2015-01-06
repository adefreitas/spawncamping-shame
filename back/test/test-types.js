var request = require('supertest'),
    express = require('express');

process.env.NODE_ENV = 'test';

var app = require('../app.js');
var _id = '';


describe('POST New Types', function(){
  it('creates new types and responds with json success message', function(done){
    request(app)
    .post('/api/types')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({"types": {"name":"Without the Chronicle and Bede's Historia ecclesiastica gentis Anglorum (the Ecclesiastical History of the English People), it would be impossible to write the history of the English from the Romans to the Norman Conquest."}})
    .expect(201)
    .end(function(err, res) {
      if (err) {
        throw err;
      }
      _id = res.body._id;
      done();
    });
  });
});

describe('GET List of Typess', function(){
  it('responds with a list of types items in JSON', function(done){
    request(app)
    .get('/api/typess')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('GET Types by ID', function(){
  it('responds with a single types item in JSON', function(done){
    request(app)
    .get('/api/types/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});


describe('PUT Types by ID', function(){
  it('updates types item in return JSON', function(done){
    request(app)
    .put('/api/types/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({ "types": { "title": "Hell Is Where There Are No Robots" } })    
    .expect(200, done);
  });
});

describe('DELETE Types by ID', function(){
  it('should delete types and return 200 status code', function(done){
    request(app)
    .del('/api/types/'+ _id) 
    .expect(204, done);
  });
});