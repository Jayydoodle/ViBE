"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vibe_database_1 = require("../vibe.database");
class AuthenticateController {
    validateUser(email, password) {
        //    const username = req.body.username,
        //          password = req.body.password;
        /*
            This is where we connect to the database and search for the user
            with matching password
            */
        // AuthenticateController.database.getOne
    }
    // function to create event
    login(req, res) {
        res.send(req.body);
        //    const email = req.body.email,
        //          password = req.body.password;
        //    if(this.validateUser(email, password)){
        //       const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');
        // const userId = getUserId();
        //        const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
        //            algorithm: 'RS256',
        //            expiresIn: 120,
        //            subject: userId;
        //        }
        //    }
        //  res.send(req.body);
    }
}
exports.AuthenticateController = AuthenticateController;
AuthenticateController.database = new vibe_database_1.VibeDatabase();
//# sourceMappingURL=authenticateController..js.map