var request = require('supertest'),
    express = require('express');

process.env.NODE_ENV = 'test';

var app = require('../app.js');
var _id = '';


describe('POST New Primary', function(){
  it('creates new primary and responds with json success message', function(done){
    request(app)
    .post('/api/primary')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({"primary": {}})
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

describe('GET List of Primarys', function(){
  it('responds with a list of primary items in JSON', function(done){
    request(app)
    .get('/api/primarys')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('GET Primary by ID', function(){
  it('responds with a single primary item in JSON', function(done){
    request(app)
    .get('/api/primary/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});


describe('PUT Primary by ID', function(){
  it('updates primary item in return JSON', function(done){
    request(app)
    .put('/api/primary/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({ "primary": { "title": "Hell Is Where There Are No Robots" } })    
    .expect(200, done);
  });
});

describe('DELETE Primary by ID', function(){
  it('should delete primary and return 200 status code', function(done){
    request(app)
    .del('/api/primary/'+ _id) 
    .expect(204, done);
  });
});