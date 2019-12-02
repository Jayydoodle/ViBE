import { Component, OnInit } from '@angular/core';
import { UserService} from "./../../services/user.service"
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from './../../models/user';
import { updateLocale } from 'moment';
import { EventService } from 'src/app/services/event.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  //eventService:EventService;
  constructor(private userService:UserService,
              private eventService:EventService,
              private authService: AuthenticationService) { 
  }

  ngOnInit() {
  }

  onClick_Login() {
    console.log("login was clicked");
    document.getElementById('modal-login').style.display='block';
 
  }

  onClick_CloseModal() {
    console.log("modal close clicked");
    document.getElementById('modal-login').style.display='none';
   
  }

  swapButtons(){

    
  }

}


