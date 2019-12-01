import { Component, OnInit } from '@angular/core';
import { UserService} from "./../../services/user.service"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(private userService:UserService) { 
    
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

}
