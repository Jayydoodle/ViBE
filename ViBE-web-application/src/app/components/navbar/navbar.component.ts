import { Component, OnInit } from '@angular/core';
import { UserService} from "./../../services/user.service"
import { AuthenticationService } from 'src/app/services/authentication.service';
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

  //function that gets sport events
  getSports(){
    
   this.eventService.getEventsByCategory("sports")
          .subscribe((result)=>{
            var i=0;
            alert("we here");
            while(result[i])
            {
              var x =result[i];
              console.log(JSON.stringify(x));
              i++;
            }
          })    
  }

  //function that gets party events
  getParty()
  {
    this.eventService.getEventsByCategory("party")
      .subscribe((result)=>{
        var i=0;
        while(result[i])
        {
          var x =result[i];
          console.log(JSON.stringify(x));
          i++;
        }
      })
  }

  //function that gets concert events
  getConcert()
  {
    this.eventService.getEventsByCategory("concert")
      .subscribe((result)=>{
        var i=0;
        while(result[i])
        {
          var x =result[i];
          console.log(JSON.stringify(x));
          i++;
        }
      })
  }

  //function that gets all the fundraiser events
  getFundraiser()
  {
    this.eventService.getEventsByCategory("Fundraiser")
      .subscribe((result)=>{
        var i=0;
            while(result[i])
            {
              var x =result[i];
              console.log(JSON.stringify(x));
              i++;
            }
      })
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


