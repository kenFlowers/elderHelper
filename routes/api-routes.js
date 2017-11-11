var db = require("../models");

module.exports = function(app) {


    app.post("/api/patient", function(req, res) {
        // Create an patient with the data available to us in req.body
        console.log(req.body);
        db.Patient.create(req.body).then(function(dbPatient) {
            res.json(db);
        });
    });



};