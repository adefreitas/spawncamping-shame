var request = require('supertest'),
    express = require('express');

process.env.NODE_ENV = 'test';

var app = require('../app.js');
var _id = '';


describe('POST New Secondary', function(){
  it('creates new secondary and responds with json success message', function(done){
    request(app)
    .post('/api/secondary')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({"secondary": {}})
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

describe('GET List of Secondarys', function(){
  it('responds with a list of secondary items in JSON', function(done){
    request(app)
    .get('/api/secondarys')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('GET Secondary by ID', function(){
  it('responds with a single secondary item in JSON', function(done){
    request(app)
    .get('/api/secondary/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});


describe('PUT Secondary by ID', function(){
  it('updates secondary item in return JSON', function(done){
    request(app)
    .put('/api/secondary/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({ "secondary": { "title": "Hell Is Where There Are No Robots" } })    
    .expect(200, done);
  });
});

describe('DELETE Secondary by ID', function(){
  it('should delete secondary and return 200 status code', function(done){
    request(app)
    .del('/api/secondary/'+ _id) 
    .expect(204, done);
  });
});