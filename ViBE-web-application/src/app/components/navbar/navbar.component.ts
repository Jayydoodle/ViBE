import { Component, OnInit } from '@angular/core';
import { UserService} from "./../../services/user.service"
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from './../../models/user';
import { updateLocale } from 'moment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private userService:UserService,
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

  dummy(){
    console.log("dummy");
      let newUser:User = {username:"dummyMan", email:"dummy@update.edu", password:"waitaminute", location:{latitude: 0, longitude:0}};
      this.authService.register(newUser).subscribe((res)=>{
        console.log(res);
      });
  }

  swapButtons(){

    
  }

}
