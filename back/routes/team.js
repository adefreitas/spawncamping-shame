module.exports = function(app) {
  // Module dependencies.
  var mongoose = require('mongoose'),
      Team = mongoose.models.Team,
      api = {};

  // ALL
  api.teams = function (req, res) {
    Team.find(function(err, teams) {
      if (err) {
        res.json(500, err);
      } else {    
        res.json({teams: teams});
      }
    });
  };

  // GET
  api.team = function (req, res) {
    var id = req.params.id;
    Team.findOne({ '_id': id }, function(err, team) {
      if (err) {
        res.json(404, err);
      } else {
        res.json({team: team});
      }
    });
  };

  // POST
  api.addTeam = function (req, res) {
    
    var team;
      
    if(typeof req.body.team == 'undefined'){
         res.status(500);
         return res.json({message: 'team is undefined'});
    }

    team = new Team(req.body.team);

    team.save(function (err) {
      if (!err) {
        console.log("created team");
        return res.json(201, team.toObject());
      } else {
        return res.json(500, err);
      }
    });

  };

  // PUT
  api.editTeam = function (req, res) {
    var id = req.params.id;

    Team.findById(id, function (err, team) {


    
      if(typeof req.body.team["name"] != 'undefined'){
        team["name"] = req.body.team["name"];
      }  
    

      return team.save(function (err) {
        if (!err) {
          console.log("updated team");
          return res.json(200, team.toObject());        
        } else {
         return res.json(500, err);
        }
        return res.json(team);
      });
    });

  };

  // DELETE
  api.deleteTeam = function (req, res) {
    var id = req.params.id;
    return Team.findById(id, function (err, team) {
      return team.remove(function (err) {
        if (!err) {
          console.log("removed team");
          return res.send(204);
        } else {
          console.log(err);
          return res.json(500, err);
        }
      });
    });

  };


  app.get('/api/teams', api.teams);
  app.get('/api/team/:id', api.team);
  app.post('/api/team', api.addTeam);
  app.put('/api/team/:id', api.editTeam);
  app.delete('/api/team/:id', api.deleteTeam);
};