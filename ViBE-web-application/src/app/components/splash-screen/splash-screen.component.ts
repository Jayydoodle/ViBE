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

  userEmailLogin:string = "";
  userPassLogin:string = "";

  userExistsRegister:boolean;
  noFieldSpecified:boolean;
  noRecord:boolean;

  ngOnInit() {
  }

  setUsername(){
    console.log("woah");
  }

  resetError(){
    this.userExistsRegister = false;
    this.noFieldSpecified = false;
    this.noRecord = false;
  }

  resetFields(){
    this.userName = "";
    this.userEmail = "";
    this.userPass = "";

    this.userEmailLogin = "";
    this.userPassLogin = "";
  }

  onClick_Register() {
    let newUser:User = {
      username: this.userName,
      email: this.userEmail,
      password: this.userPass,
      location: { longitude: 0, latitude: 0}
    };

    this.resetError();
    if(this.userEmail==="" || this.userPass==="" || this.userName===""){
      this.noFieldSpecified = true;
      return;
    }
    this.authService.register(newUser)
     .subscribe((result)=>{
        if(result.success === false){
          this.userExistsRegister = true;
          return;
        }else{
          this.userEmailLogin = this.userEmail;
          this.userPassLogin = this.userPass;
          this.onClick_Authenticate();
        }
     });
  }

  onClick_Login() {
    this.userName = "";
    this.userEmail = "";
    this.userPass = "";
    this.resetError();
    this.resetFields();
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
    this.resetError();
    this.resetFields();
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
    this.resetError();
    if(this.userEmail==="" || this.userPass==="" || this.userName===""){
      this.noFieldSpecified = true;
      return;
    }
    return this.authService.login(this.userEmailLogin, this.userPassLogin)
      .subscribe((result)=>{
        if(result==null){
          this.noRecord = true;
          return false;
        }else{
          //enter
          document.getElementById('modal-login').style.display='none';
          document.getElementById('Splash').style.display='none';
          //document.getElementById('id-registerAlert').style.display='block';
          this.resetError();
          this.resetFields();
          return true;
        }
      });

  }

  onClick_Enter() {
    console.log("Entered.");
    document.getElementById('enterAnimation').style.display='none';
    document.getElementById('modal-login').style.display='block';
  }

}
