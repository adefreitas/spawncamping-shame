module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Types = mongoose.models.Types,
      api = {};

  // ALL
  api.typess = function (req, res) {
    Types.find(function(err, typess) {
      if (err) {
        res.json(500, err);
      } else {    
        res.json({typess: typess});
      }
    });
  };

  // GET
  api.types = function (req, res) {
    var id = req.params.id;
    Types.findOne({ '_id': id }, function(err, types) {
      if (err) {
        res.json(404, err);
      } else {
        res.json({types: types});
      }
    });
  };

  // POST
  api.addTypes = function (req, res) {
    
    var types;
      
    if(typeof req.body.types == 'undefined'){
         res.status(500);
         return res.json({message: 'types is undefined'});
    }

    types = new Types(req.body.types);

    types.save(function (err) {
      if (!err) {
        console.log("created types");
        return res.json(201, types.toObject());
      } else {
        return res.json(500, err);
      }
    });

  };

  // PUT
  api.editTypes = function (req, res) {
    var id = req.params.id;

    Types.findById(id, function (err, types) {


    
      if(typeof req.body.types["name"] != 'undefined'){
        types["name"] = req.body.types["name"];
      }  
    

      return types.save(function (err) {
        if (!err) {
          console.log("updated types");
          return res.json(200, types.toObject());        
        } else {
         return res.json(500, err);
        }
        return res.json(types);
      });
    });

  };

  // DELETE
  api.deleteTypes = function (req, res) {
    var id = req.params.id;
    return Types.findById(id, function (err, types) {
      return types.remove(function (err) {
        if (!err) {
          console.log("removed types");
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });

  };


  app.get('/api/types', api.typess);
  app.get('/api/types/:id', api.types);
  app.post('/api/types', api.addTypes);
  app.put('/api/types/:id', api.editTypes);
  app.delete('/api/types/:id', api.deleteTypes);
};