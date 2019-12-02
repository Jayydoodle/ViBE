"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vibe_database_1 = require("../vibe.database");
class UserController {
    getAllUsers(req, res) {
        UserController.database.connect(() => {
            const Users = UserController.database.getClient().db("vibe").collection("user")
                .find({})
                .toArray()
                .then((result) => {
                res.json(result);
            });
        });
    }
    getUserByEmail(req, res) {
        UserController.database.connect(() => {
            const Users = UserController.database.getClient().db("vibe").collection("user")
                .find({ author: req.params.userEmail })
                // .find({email : req.params.userEmail})
                .toArray()
                .then((result) => {
                res.json(result);
            });
        });
    }
    // function to create event
    createUser(req, res) {
        UserController.database.connect(() => {
            UserController.database.getClient().db("vibe").collection("user").insertOne(req.body);
            res.send(req.body);
        });
    }
    UpdateUserLocation(req, res) {
        UserController.database.connect(() => {
            UserController.database.getClient().db("vibe").collection("user").updateOne({ author: req.body.author }, { $set: { long: req.body.long, lat: req.body.lat }
            })
                .then(function (result) {
                console.log(result + "updated");
            });
        });
    }
}
exports.UserController = UserController;
UserController.database = new vibe_database_1.VibeDatabase();
//# sourceMappingURL=userController.js.map