import { Component, OnInit } from '@angular/core';
import { UserService} from "./../../services/user.service"
import { AuthenticationService } from 'src/app/services/authentication.service';

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

  postSomething(){
    this.authService.login("me", "you").subscribe((result)=>{
      console.log(result);
    });

    // this.userService.getUsers().subscribe((result)=>{
    //   console.log(result);
    // })
    
  }
}
