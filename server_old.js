var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
var config = require('./config');
var postDB = require('./models/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));

router.get("/", function (req, res) {
    res.json({"error": false, "message": "Hello World"});
});

router.route("/posts")
    .get(function (req, res) {
        var response = {};
        postDB.find({}, function (err, data) {
            // Mongo command to fetch all data from collection.
            if (err) {
                response = {"error": true, "message": "Error fetching data"};
            } else {
                response = {"error": false, "message": data};
            }
            res.json(response);
        });
    })
    .post(function(req,res){
        var db = new postDB();
        var response = {};
        db.userEmail = req.body.email;
        db.userPassword =  req.body.email;
        db.save(function(err){
            // save() will run insert() command of MongoDB.
            // it will add new data in collection.
            if(err) {
                response = {"error" : true,"message" : "Error adding data"};
            } else {
                response = {"error" : false,"message" : "Data added"};
            }
            res.json(response);
        });
    });



app.use('/', router);

app.listen(config.get('port'));
console.log("Listening to PORT", config.get('port'));
