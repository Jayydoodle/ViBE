"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventController_1 = require("./controllers/eventController");
// tslint:disable-next-line:max-line-length
const authenticateController_1 = require("./controllers/authenticateController.");
const userController_1 = require("./controllers/userController");
class ApiRouter {
    constructor() {
        this.router = express_1.default.Router();
        // private controller: Controller = new Controller();
        this.userController = new userController_1.UserController();
        this.eventController = new eventController_1.EventController();
        this.authController = new authenticateController_1.AuthenticateController();
    }
    // Creates the routes for this router and returns a populated router object
    getRouter() {
        // User
        const userLink = "/user";
        this.router.put(userLink + "/location", this.userController.UpdateUserLocation);
        this.router.get(userLink, this.userController.getAllUsers);
        this.router.get(userLink + "/:userEmail", this.userController.getUserByEmail);
        // Event
        const eventLink = "/event";
        this.router.get(eventLink, this.eventController.getAllEvents);
        this.router.post(eventLink + "/create_event", this.eventController.createEvent);
        this.router.get(eventLink + "/:category", this.eventController.getEventbyCategory);
        // this.router.get("/event", this.eventController.getAllEvents);
        // Authentication
        const authLink = "/authenticate";
        this.router.post(authLink + "/login", this.authController.login);
        this.router.post(authLink + "/register", this.authController.register);
        return this.router;
    }
}
exports.ApiRouter = ApiRouter;
//# sourceMappingURL=router.js.map