import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {} from 'googlemaps';

@Injectable({
  providedIn: 'root'
})
export class GooglemapApiService {

  public map: google.maps.Map;

  private messageSource = new BehaviorSubject(this.map);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: google.maps.Map){
    this.messageSource.next(message);
  }
}
