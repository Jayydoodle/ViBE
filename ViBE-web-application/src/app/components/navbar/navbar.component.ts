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

   desc:string='';
   title:string='';  

  scrollIntoView(event:string){
    const element = document.getElementById(event);
    element.scrollIntoView()
  }

  createEvent()
  { 
    let event = new Event;
  
    event.firstName = "shabir";
    event.lat="111";
    event.long="222";
    event.title=this.desc;
    event.description=this.title;
    event.category="sports"

    this.eventService.createEvent(event)
    .subscribe((result)=>{
      console.log("we made it??");
    })

    // var ele = document.getElementsByName('name'); 
    // var cat;
    // for(let i = 0; i < ele.length; i++) { 
    //     if(ele[i].checked)
    //        cat= +ele[i].value; 
    // } 
    // let author="Shabir";

    
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

  onClick_Logout() {
    // logout user from server 
    console.log("Logging out:", AuthenticationService.getEmail());
    document.getElementById('Splash').style.display='block';
    document.getElementById('enterAnimation').style.display='block';
    this.authService.logout();
    //this.router.navigate(['/']);
  }
}


