import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService:EventService) { }

  ngOnInit() {
  }

  OnClick_GetEvents(eventCategory){
        
    this.eventService.getEventsByCategory(eventCategory)
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
}
