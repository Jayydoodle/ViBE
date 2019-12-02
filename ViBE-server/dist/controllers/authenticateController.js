"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const vibe_database_1 = require("../vibe.database");
class AuthenticateController {
    validateUser(email, password) {
        const bcrypt = require("bcryptjs");
        const user = AuthenticateController.database.getOne("vibe", "user", { email });
        if (user == null) {
            return false;
        }
        return bcrypt.compareSync(password, user.password);
    }
    // function to create event
    login(req, res) {
        const bcrypt = require("bcryptjs");
        const email = req.body.email;
        const password = req.body.password;
        AuthenticateController.database.connect(() => {
            AuthenticateController.database.getClient().db("vibe").collection("user")
                .find({ email: "\"" + email + "\"" })
                .toArray()
                .then((user) => {
                // console.log(user);
                console.log(email);
                console.log(password);
                if (0 !== user.length) {
                    console.log(user.length !== 0);
                    console.log(user);
                    console.log("ayoo");
                    // Found user
                    bcrypt.compare(password, user[0].password, function (err, bool) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            if (bool) {
                                // password matches
                                const jwtBearerToken = jwt.sign({}, "vibe-secret-key", {
                                    algorithm: "HS256",
                                    expiresIn: 120,
                                    subject: email
                                });
                                res.json(jwtBearerToken);
                            }
                            else {
                                res.json(null);
                            }
                        }
                    });
                }
                else {
                    // Didnt find user
                    res.json(null);
                }
            }).catch((err) => {
                console.log(err);
            });
        });
    }
    register(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        const bcrypt = require("bcryptjs");
        const saltRounds = 10;
        req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
        AuthenticateController.database.connect(() => {
            // Check if duplicate user exists
            AuthenticateController.database.getClient()
                .db("vibe")
                .collection("user")
                .find({ email: { $eq: email } }).limit(1)
                .toArray()
                .then((result1) => {
                console.log('"' + email + '"');
                if (0 === result1.length) {
                    AuthenticateController.database.connect(() => {
                        AuthenticateController.database.getClient()
                            .db("vibe")
                            .collection("user")
                            .insertOne(req.body)
                            .then(() => {
                            res.send({ success: true });
                        })
                            .catch((err) => {
                            console.log(err);
                        });
                    });
                }
                else {
                    res.send({ success: false, error: 200 });
                }
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
}
exports.AuthenticateController = AuthenticateController;
AuthenticateController.database = new vibe_database_1.VibeDatabase();
//# sourceMappingURL=authenticateController.js.map