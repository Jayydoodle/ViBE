import express from "express";
import {Controller} from "./controller";
import {EventController} from './event.controller'

// tslint:disable-next-line:max-line-length
import {UserController} from "./userController";

export class ApiRouter {
    private router: express.Router = express.Router();
    //private controller: Controller = new Controller();
    private userController: UserController = new UserController();
    private eventController: EventController = new EventController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {

        this.router.get("/users", this.userController.allUsers);
        this.router.get("/user/:user_id", this.userController.userInfo);
        this.router.post("/user", this.userController.createUser);
        this.router.put("user/:user_id/update", this.userController.editUserInfo);
        this.router.delete("/user/:user_id/delete", this.userController.deleteuser);
        this.router.post('/event',this.eventController.createEvent);
        this.router.put('/event/:event_id',this.eventController.updateEvent);
        this.router.delete('/event/:event_id',this.eventController.deleteEvent);
        this.router.get('/event/zip',this.eventController.getEventbyZip);
        this.router.get('/event/state',this.eventController.getEventsbyState);


        return this.router;
    }
}
