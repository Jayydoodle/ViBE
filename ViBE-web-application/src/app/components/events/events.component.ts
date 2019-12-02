import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { GooglemapApiService } from 'src/app/googlemap-api.service';
import { MapComponent } from '../map/map.component';
<<<<<<< HEAD
import {Event} from '../../models/event';
=======
import { User } from 'src/app/models/user';
import { Event } from 'src/app/models/event';
>>>>>>> 235a25c281e022d3d1ef7441976210aeb2904b75


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  map: google.maps.Map;
  autoComplete: google.maps.places.Autocomplete;
  markers: any;
  constructor(private eventService:EventService, private mapApi: GooglemapApiService ) {
  }

  ngOnInit() {
    
    this.mapApi.currentMessage.subscribe(x => this.map = x);
    this.locationAutoComplete();
  }

  createEvent()
  {
    var event = new Event();
  
    event.title = (<HTMLInputElement>document.getElementById("title")).value;
    event.description = (<HTMLInputElement>document.getElementById("description")).value;

    var ele = document.getElementsByTagName('input'); 
              
    for(var i = 0; i < ele.length; i++) { 
      if(ele[i].type="radio") { 
        if(ele[i].checked) {
          event.category = ele[i].value;
        }
      } 
    } 

    event.latitude = this.autoComplete.getPlace().geometry.location.lat();
    event.longitude = this.autoComplete.getPlace().geometry.location.lng(); 

    this.eventService.createEvent(event)
    .subscribe((result)=>{
      console.log("we made it??");
    })
  }

  locationAutoComplete(){

      var input = <HTMLInputElement>document.getElementById('locationAutoComplete');
      var options = {
      };
      
      this.autoComplete = new google.maps.places.Autocomplete(input, options);
  }

  OnClick_GetEvents(eventCategory){
        
    this.eventService.getEventsByCategory(eventCategory)
    .subscribe((result)=>{

        if(this.markers != null){
          this.removeMarkers();
        }
       this.markers = MapComponent.showEvents(result, this.map);
    })
  }
  onClick_CloseModal() {
    console.log("modal close clicked");
    document.getElementById('modal-login').style.display='none';
   
  }
  removeMarkers(){
    MapComponent.clearMarkers(this.markers);
  }
}
