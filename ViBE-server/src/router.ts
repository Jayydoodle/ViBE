import express from "express";
import {Controller} from "./controllers/controller";
import {EventController} from "./controllers/eventController";

// tslint:disable-next-line:max-line-length
import { AuthenticateController } from "./controllers/authenticateController.";
import {UserController} from "./controllers/userController";

export class ApiRouter {
    private router: express.Router = express.Router();
    // private controller: Controller = new Controller();
    private userController: UserController = new UserController();
    private eventController: EventController = new EventController();
    private authController: AuthenticateController = new AuthenticateController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {

        // User
        const userLink = "/user";
        this.router.put(userLink + "/location", this.userController.UpdateUserLocation);

        // Event
        const eventLink = "/event";
        this.router.get(eventLink,this.eventController.getAllEvents);
        this.router.post(eventLink + "/create_event", this.eventController.createEvent);
        //this.router.get("/event", this.eventController.getAllEvents);

        // Authentication
        const authLink = "/authenticate";
        this.router.post(authLink + "/login", this.authController.login);
        this.router.post(authLink + "/register", this.authController.register);

        return this.router;
    }
}
