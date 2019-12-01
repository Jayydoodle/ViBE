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
        const email = req.body.email;
        const password = req.body.password;
        if (this.validateUser(email, password)) {
            // const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');
            const RSA_PRIVATE_KEY = "secret-key";
            const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: "RS256",
                expiresIn: 120,
                subject: email
            });
            res.send(jwtBearerToken);
        }
        else {
            res.send(null);
        }
    }
}
exports.AuthenticateController = AuthenticateController;
AuthenticateController.database = new vibe_database_1.VibeDatabase();
//# sourceMappingURL=authenticateController..js.map