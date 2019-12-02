import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { GooglemapApiService } from 'src/app/googlemap-api.service';
import { MapComponent } from '../map/map.component';
import {Event} from '../../models/event';


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
    let event = new Event;
  
    event.firstName = "shabir";
    event.lat="111";
    event.long="222";
    // event.title=this.desc;
    // event.description=this.title;
    event.category="sports"

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
  removeMarkers(){
    MapComponent.clearMarkers(this.markers);
  }
}
