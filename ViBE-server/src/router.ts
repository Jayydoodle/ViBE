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

        this.router.get("/users", this.userController.allUsers);
        this.router.get("/user/:user_id", this.userController.userInfo);
        this.router.post("/user", this.userController.createUser);
        this.router.put("user/:user_id/update", this.userController.editUserInfo);
        this.router.delete("/user/:user_id/delete", this.userController.deleteuser);
        this.router.post("/event/create_event", this.eventController.createEvent);
        this.router.put("/event/:event_id", this.eventController.updateEvent);
        // this.router.delete("/event/:event_id", this.eventController.deleteEvent);
        this.router.get("/event", this.eventController.getAllEvents);

        // Authentication
        const authLink = "/authenticate";
        this.router.post(authLink + "/login", this.authController.login);

        return this.router;
    }
}
