module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Primary = mongoose.models.Primary,
      api = {};

  // ALL
  api.primarys = function (req, res) {
    Primary.find(function(err, primarys) {
      if (err) {
        res.json(500, err);
      } else {    
        res.json({primarys: primarys});
      }
    });
  };

  // GET
  api.primary = function (req, res) {
    var id = req.params.id;
    Primary.findOne({ '_id': id }, function(err, primary) {
      if (err) {
        res.json(404, err);
      } else {
        res.json({primary: primary});
      }
    });
  };

  // POST
  api.addPrimary = function (req, res) {
    
    var primary;
      
    if(typeof req.body.primary == 'undefined'){
         res.status(500);
         return res.json({message: 'primary is undefined'});
    }

    primary = new Primary(req.body.primary);

    primary.save(function (err) {
      if (!err) {
        console.log("created primary");
        return res.json(201, primary.toObject());
      } else {
        return res.json(500, err);
      }
    });

  };

  // PUT
  api.editPrimary = function (req, res) {
    var id = req.params.id;

    Primary.findById(id, function (err, primary) {


    
      if(typeof req.body.primary["name"] != 'undefined'){
        primary["name"] = req.body.primary["name"];
      }  
    
      if(typeof req.body.primary[" special"] != 'undefined'){
        primary[" special"] = req.body.primary[" special"];
      }  
    
      if(typeof req.body.primary[" desc"] != 'undefined'){
        primary[" desc"] = req.body.primary[" desc"];
      }  
    
      if(typeof req.body.primary[" type"] != 'undefined'){
        primary[" type"] = req.body.primary[" type"];
      }  
    
      if(typeof req.body.primary[" cost"] != 'undefined'){
        primary[" cost"] = req.body.primary[" cost"];
      }  
    
      if(typeof req.body.primary[" award"] != 'undefined'){
        primary[" award"] = req.body.primary[" award"];
      }  
    
      if(typeof req.body.primary[" firerate"] != 'undefined'){
        primary[" firerate"] = req.body.primary[" firerate"];
      }  
    
      if(typeof req.body.primary[" accuracy"] != 'undefined'){
        primary[" accuracy"] = req.body.primary[" accuracy"];
      }  
    
      if(typeof req.body.primary[" movement"] != 'undefined'){
        primary[" movement"] = req.body.primary[" movement"];
      }  
    
      if(typeof req.body.primary[" armor"] != 'undefined'){
        primary[" armor"] = req.body.primary[" armor"];
      }  
    
      if(typeof req.body.primary[" ammo"] != 'undefined'){
        primary[" ammo"] = req.body.primary[" ammo"];
      }  
    
      if(typeof req.body.primary[" magazine"] != 'undefined'){
        primary[" magazine"] = req.body.primary[" magazine"];
      }  
    
      if(typeof req.body.primary[" range"] != 'undefined'){
        primary[" range"] = req.body.primary[" range"];
      }  
    
      if(typeof req.body.primary[" dmg"] != 'undefined'){
        primary[" dmg"] = req.body.primary[" dmg"];
      }  
    
      if(typeof req.body.primary[" team"] != 'undefined'){
        primary[" team"] = req.body.primary[" team"];
      }  
    

      return primary.save(function (err) {
        if (!err) {
          console.log("updated primary");
          return res.json(200, primary.toObject());        
        } else {
         return res.json(500, err);
        }
        return res.json(primary);
      });
    });

  };

  // DELETE
  api.deletePrimary = function (req, res) {
    var id = req.params.id;
    return Primary.findById(id, function (err, primary) {
      return primary.remove(function (err) {
        if (!err) {
          console.log("removed primary");
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });

  };


  app.get('/api/primarys', api.primarys);
  app.get('/api/primary/:id', api.primary);
  app.post('/api/primary', api.addPrimary);
  app.put('/api/primary/:id', api.editPrimary);
  app.delete('/api/primary/:id', api.deletePrimary);
};