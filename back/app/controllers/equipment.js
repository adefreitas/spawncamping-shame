module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Equipment = mongoose.models.Equipment,
      api = {};

  // ALL
  api.equipments = function (req, res) {
    Equipment.find(function(err, equipments) {
      if (err) {
        res.json(500, err);
      } else {    
        res.json({equipments: equipments});
      }
    });
  };

  // GET
  api.equipment = function (req, res) {
    var id = req.params.id;
    Equipment.findOne({ '_id': id }, function(err, equipment) {
      if (err) {
        res.json(404, err);
      } else {
        res.json({equipment: equipment});
      }
    });
  };

  // POST
  api.addEquipment = function (req, res) {
    
    var equipment;
      
    if(typeof req.body.equipment == 'undefined'){
         res.status(500);
         return res.json({message: 'equipment is undefined'});
    }

    equipment = new Equipment(req.body.equipment);

    equipment.save(function (err) {
      if (!err) {
        console.log("created equipment");
        return res.json(201, equipment.toObject());
      } else {
        return res.json(500, err);
      }
    });

  };

  // PUT
  api.editEquipment = function (req, res) {
    var id = req.params.id;

    Equipment.findById(id, function (err, equipment) {


    
      if(typeof req.body.equipment["name"] != 'undefined'){
        equipment["name"] = req.body.equipment["name"];
      }  
    
      if(typeof req.body.equipment[" desc"] != 'undefined'){
        equipment[" desc"] = req.body.equipment[" desc"];
      }  
    
      if(typeof req.body.equipment[" cost"] != 'undefined'){
        equipment[" cost"] = req.body.equipment[" cost"];
      }  
    
      if(typeof req.body.equipment[" dmg"] != 'undefined'){
        equipment[" dmg"] = req.body.equipment[" dmg"];
      }  
    
      if(typeof req.body.equipment[" team"] != 'undefined'){
        equipment[" team"] = req.body.equipment[" team"];
      }  
    

      return equipment.save(function (err) {
        if (!err) {
          console.log("updated equipment");
          return res.json(200, equipment.toObject());        
        } else {
         return res.json(500, err);
        }
        return res.json(equipment);
      });
    });

  };

  // DELETE
  api.deleteEquipment = function (req, res) {
    var id = req.params.id;
    return Equipment.findById(id, function (err, equipment) {
      return equipment.remove(function (err) {
        if (!err) {
          console.log("removed equipment");
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });

  };


  app.get('/api/equipment', api.equipments);
  app.get('/api/equipment/:id', api.equipment);
  app.post('/api/equipment', api.addEquipment);
  app.put('/api/equipment/:id', api.editEquipment);
  app.delete('/api/equipment/:id', api.deleteEquipment);
};