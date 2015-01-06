var request = require('supertest'),
    express = require('express');

process.env.NODE_ENV = 'test';

var app = require('../app.js');
var _id = '';


describe('POST New Grenades', function(){
  it('creates new grenades and responds with json success message', function(done){
    request(app)
    .post('/api/grenades')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({"grenades": {}})
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

describe('GET List of Grenadess', function(){
  it('responds with a list of grenades items in JSON', function(done){
    request(app)
    .get('/api/grenadess')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('GET Grenades by ID', function(){
  it('responds with a single grenades item in JSON', function(done){
    request(app)
    .get('/api/grenades/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});


describe('PUT Grenades by ID', function(){
  it('updates grenades item in return JSON', function(done){
    request(app)
    .put('/api/grenades/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({ "grenades": { "title": "Hell Is Where There Are No Robots" } })    
    .expect(200, done);
  });
});

describe('DELETE Grenades by ID', function(){
  it('should delete grenades and return 200 status code', function(done){
    request(app)
    .del('/api/grenades/'+ _id) 
    .expect(204, done);
  });
});