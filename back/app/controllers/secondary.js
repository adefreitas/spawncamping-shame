module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Secondary = mongoose.models.Secondary,
      api = {};

  // ALL
  api.secondarys = function (req, res) {
    Secondary.find(function(err, secondarys) {
      if (err) {
        res.json(500, err);
      } else {    
        res.json({secondarys: secondarys});
      }
    });
  };

  // GET
  api.secondary = function (req, res) {
    var id = req.params.id;
    Secondary.findOne({ '_id': id }, function(err, secondary) {
      if (err) {
        res.json(404, err);
      } else {
        res.json({secondary: secondary});
      }
    });
  };

  // POST
  api.addSecondary = function (req, res) {
    
    var secondary;
      
    if(typeof req.body.secondary == 'undefined'){
         res.status(500);
         return res.json({message: 'secondary is undefined'});
    }

    secondary = new Secondary(req.body.secondary);

    secondary.save(function (err) {
      if (!err) {
        console.log("created secondary");
        return res.json(201, secondary.toObject());
      } else {
        return res.json(500, err);
      }
    });

  };

  // PUT
  api.editSecondary = function (req, res) {
    var id = req.params.id;

    Secondary.findById(id, function (err, secondary) {


    
      if(typeof req.body.secondary["name"] != 'undefined'){
        secondary["name"] = req.body.secondary["name"];
      }  
    
      if(typeof req.body.secondary[" desc"] != 'undefined'){
        secondary[" desc"] = req.body.secondary[" desc"];
      }  
    
      if(typeof req.body.secondary[" cost"] != 'undefined'){
        secondary[" cost"] = req.body.secondary[" cost"];
      }  
    
      if(typeof req.body.secondary[" award"] != 'undefined'){
        secondary[" award"] = req.body.secondary[" award"];
      }  
    
      if(typeof req.body.secondary[" firerate"] != 'undefined'){
        secondary[" firerate"] = req.body.secondary[" firerate"];
      }  
    
      if(typeof req.body.secondary[" accuracy"] != 'undefined'){
        secondary[" accuracy"] = req.body.secondary[" accuracy"];
      }  
    
      if(typeof req.body.secondary[" movement"] != 'undefined'){
        secondary[" movement"] = req.body.secondary[" movement"];
      }  
    
      if(typeof req.body.secondary[" armor"] != 'undefined'){
        secondary[" armor"] = req.body.secondary[" armor"];
      }  
    
      if(typeof req.body.secondary[" ammo"] != 'undefined'){
        secondary[" ammo"] = req.body.secondary[" ammo"];
      }  
    
      if(typeof req.body.secondary[" magazine"] != 'undefined'){
        secondary[" magazine"] = req.body.secondary[" magazine"];
      }  
    
      if(typeof req.body.secondary[" dmg"] != 'undefined'){
        secondary[" dmg"] = req.body.secondary[" dmg"];
      }  
    
      if(typeof req.body.secondary[" team"] != 'undefined'){
        secondary[" team"] = req.body.secondary[" team"];
      }  
    

      return secondary.save(function (err) {
        if (!err) {
          console.log("updated secondary");
          return res.json(200, secondary.toObject());        
        } else {
         return res.json(500, err);
        }
        return res.json(secondary);
      });
    });

  };

  // DELETE
  api.deleteSecondary = function (req, res) {
    var id = req.params.id;
    return Secondary.findById(id, function (err, secondary) {
      return secondary.remove(function (err) {
        if (!err) {
          console.log("removed secondary");
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });

  };


  app.get('/api/secondaries', api.secondarys);
  app.get('/api/secondaries/:id', api.secondary);
  app.post('/api/secondaries', api.addSecondary);
  app.put('/api/secondaries/:id', api.editSecondary);
  app.delete('/api/secondaries/:id', api.deleteSecondary);
};