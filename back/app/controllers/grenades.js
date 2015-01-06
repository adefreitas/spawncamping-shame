module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Grenades = mongoose.models.Grenades,
      api = {};

  // ALL
  api.grenadess = function (req, res) {
    Grenades.find(function(err, grenadess) {
      if (err) {
        res.json(500, err);
      } else {    
        res.json({grenadess: grenadess});
      }
    });
  };

  // GET
  api.grenades = function (req, res) {
    var id = req.params.id;
    Grenades.findOne({ '_id': id }, function(err, grenades) {
      if (err) {
        res.json(404, err);
      } else {
        res.json({grenades: grenades});
      }
    });
  };

  // POST
  api.addGrenades = function (req, res) {
    
    var grenades;
      
    if(typeof req.body.grenades == 'undefined'){
         res.status(500);
         return res.json({message: 'grenades is undefined'});
    }

    grenades = new Grenades(req.body.grenades);

    grenades.save(function (err) {
      if (!err) {
        console.log("created grenades");
        return res.json(201, grenades.toObject());
      } else {
        return res.json(500, err);
      }
    });

  };

  // PUT
  api.editGrenades = function (req, res) {
    var id = req.params.id;

    Grenades.findById(id, function (err, grenades) {


    
      if(typeof req.body.grenades["name"] != 'undefined'){
        grenades["name"] = req.body.grenades["name"];
      }  
    
      if(typeof req.body.grenades[" desc"] != 'undefined'){
        grenades[" desc"] = req.body.grenades[" desc"];
      }  
    
      if(typeof req.body.grenades[" cost"] != 'undefined'){
        grenades[" cost"] = req.body.grenades[" cost"];
      }  
    
      if(typeof req.body.grenades[" dmg"] != 'undefined'){
        grenades[" dmg"] = req.body.grenades[" dmg"];
      }  
    

      return grenades.save(function (err) {
        if (!err) {
          console.log("updated grenades");
          return res.json(200, grenades.toObject());        
        } else {
         return res.json(500, err);
        }
        return res.json(grenades);
      });
    });

  };

  // DELETE
  api.deleteGrenades = function (req, res) {
    var id = req.params.id;
    return Grenades.findById(id, function (err, grenades) {
      return grenades.remove(function (err) {
        if (!err) {
          console.log("removed grenades");
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });

  };


  app.get('/api/grenadess', api.grenadess);
  app.get('/api/grenades/:id', api.grenades);
  app.post('/api/grenades', api.addGrenades);
  app.put('/api/grenades/:id', api.editGrenades);
  app.delete('/api/grenades/:id', api.deleteGrenades);
};