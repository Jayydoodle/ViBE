import { Component, OnInit, Input } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { GooglemapApiService } from 'src/app/googlemap-api.service';
import { MapComponent } from '../map/map.component';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  map: google.maps.Map;
  constructor(private eventService:EventService, private mapApi: GooglemapApiService ) {
  }

  ngOnInit() {
    
    this.mapApi.currentMessage.subscribe(x => this.map = x);
  }

  OnClick_GetEvents(eventCategory){
        
    this.eventService.getEventsByCategory(eventCategory)
    .subscribe((result)=>{
        
       MapComponent.showEvents(result, this.map);
    })
  }
}
