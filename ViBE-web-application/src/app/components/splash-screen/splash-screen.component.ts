import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from "./../../models/user";

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent implements OnInit {

  constructor(private authService:AuthenticationService) { }

  userName:string = "";
  userEmail:string = "";
  userPass:string = "";

  ngOnInit() {
  }

  setUsername(){
    console.log("woah");
  }

  onClick_Register() {
    let newUser:User = {
      id: 0, 
      username: this.userName,
      email: this.userEmail,
      password: this.userPass,
      location: { longitude: 0, latitude: 0}
    };

    console.log(newUser);
    this.authService.register(newUser)
     .subscribe((result)=>{
       console.log(result);
     });
  }

  onClick_Login() {
    //console.log("login was clicked");
    this.userName = "";
    this.userEmail = "";
    this.userPass = "";
    document.getElementById("login-toggle").style.backgroundColor="#57B846";
    document.getElementById("login-toggle").style.color="#fff";
    document.getElementById("signup-toggle").style.backgroundColor="#fff";
    document.getElementById("signup-toggle").style.color="#222";
    document.getElementById("signup-form").style.display="none";
    document.getElementById("login-form").style.display="block";
  }

  onClick_Signup() {
    //console.log("signup was clicked");
    this.userName = "";
    this.userEmail = "";
    this.userPass = "";
    document.getElementById("login-toggle").style.backgroundColor="#fff";
    document.getElementById("login-toggle").style.color="#222";
    document.getElementById("signup-toggle").style.backgroundColor="#57b846";
    document.getElementById("signup-toggle").style.color="#fff";
    document.getElementById("login-form").style.display="none";
    document.getElementById("signup-form").style.display="block";
  }

  onClick_CloseModal() {
    console.log("modal close clicked");
    document.getElementById('modal-login').style.display='none';
  }

  onClick_Authenticate() {
    console.log("modal close clicked");
    document.getElementById('modal-login').style.display='none';
    document.getElementById('Splash').style.display='none';
  }


}
