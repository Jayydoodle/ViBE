import { Component, OnInit } from '@angular/core';
import { UserService} from "./../../services/user.service"
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from './../../models/user';
import { updateLocale } from 'moment';
import { EventService } from 'src/app/services/event.service';
import {Event} from '../../models/event';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  //eventService:EventService;
  constructor(
    private userService:UserService,
    private eventService:EventService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onClick_Login() {
    console.log("login was clicked");
    document.getElementById('modal-login').style.display='block';
 
  }

  onClick_Logout() {
    // logout user from server 
    console.log("Logging out:", AuthenticationService.getEmail());
    document.getElementById('Splash').style.display='block';
    document.getElementById('enterAnimation').style.display='block';
    this.authService.logout();
    //this.router.navigate(['/']);
  }
}


