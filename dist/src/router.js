"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const user_controller_1 = require("./user.controller");
class ApiRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.controller = new controller_1.Controller();
        this.userController = new user_controller_1.UserController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        this.router.get("/hello", this.controller.getHello);
        this.router.post("/hello", this.controller.postSomething);
        this.router.get("/allusers", this.userController.allUsers);
        this.router.get("/user/:user_id", this.userController.userInfo);
        this.router.post("/createuser", this.userController.createUser);
        this.router.put("update/:user_id", this.userController.editUserInfo);
        this.router.delete("/user/:user_id", this.userController.deleteuser);
        return this.router;
    }
}
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=router.js.map