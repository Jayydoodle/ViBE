import express from "express";
import {Controller} from "./controller";
import {UserController} from "./user.controller";
export class ApiRouter {
    private router: express.Router = express.Router();
    private controller: Controller = new Controller();
    private userController=new UserController();

    // Creates the routes for this router and returns a populated router object
    public getRouter(): express.Router {
        this.router.get("/hello", this.controller.getHello);
        this.router.post("/hello", this.controller.postSomething);
        this.router.get('/allusers',this.userController.allUsers);
        this.router.get('/user/:user_id',this.userController.userInfo);
        this.router.post('/createuser',this.userController.createUser);
        this.router.put('update/:user_id',this.userController.editUserInfo);
        this.router.delete('/user/:user_id',this.userController.deleteuser);

        return this.router;
    }
}
