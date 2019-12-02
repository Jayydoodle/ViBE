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

     this.onClick_Login();
  }

  onClick_Login() {
    this.userName = "";
    this.userEmail = "";
    this.userPass = "";
    document.getElementById("login-toggle").style.backgroundColor="#F0AD4E";
    document.getElementById("login-toggle").style.color="#343A40";
    document.getElementById("signup-toggle").style.backgroundColor="#fff";
    document.getElementById("signup-toggle").style.color="#343A40";
    document.getElementById("signup-form").style.display="none";
    document.getElementById("login-form").style.display="block";
  }

  onClick_Signup() {
    this.userName = "";
    this.userEmail = "";
    this.userPass = "";
    document.getElementById("login-toggle").style.backgroundColor="#fff";
    document.getElementById("login-toggle").style.color="#343A40";
    document.getElementById("signup-toggle").style.backgroundColor="#F0AD4E";
    document.getElementById("signup-toggle").style.color="#343A40";
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
    document.getElementById('id-registerAlert').style.display='block';  
  }

  onClick_Enter() {
    console.log("Entered.");
    document.getElementById('enterAnimation').style.display='none';
    document.getElementById('modal-login').style.display='block';
  }

}
