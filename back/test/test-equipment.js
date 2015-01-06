var request = require('supertest'),
    express = require('express');

process.env.NODE_ENV = 'test';

var app = require('../app.js');
var _id = '';


describe('POST New Equipment', function(){
  it('creates new equipment and responds with json success message', function(done){
    request(app)
    .post('/api/equipment')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({"equipment": {}})
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

describe('GET List of Equipments', function(){
  it('responds with a list of equipment items in JSON', function(done){
    request(app)
    .get('/api/equipments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});

describe('GET Equipment by ID', function(){
  it('responds with a single equipment item in JSON', function(done){
    request(app)
    .get('/api/equipment/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});


describe('PUT Equipment by ID', function(){
  it('updates equipment item in return JSON', function(done){
    request(app)
    .put('/api/equipment/'+ _id )
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .send({ "equipment": { "title": "Hell Is Where There Are No Robots" } })    
    .expect(200, done);
  });
});

describe('DELETE Equipment by ID', function(){
  it('should delete equipment and return 200 status code', function(done){
    request(app)
    .del('/api/equipment/'+ _id) 
    .expect(204, done);
  });
});