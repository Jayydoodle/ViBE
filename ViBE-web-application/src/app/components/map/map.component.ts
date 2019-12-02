import { Component, OnInit, Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from "./../../models/user";
import { AuthenticationService } from '../../services/authentication.service';
import { GooglemapApiService } from 'src/app/googlemap-api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

@Injectable()
export class MapComponent implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  pos: any;

  constructor(private userService: UserService, private mapApi: GooglemapApiService){}

  ngOnInit(): void {

    this.mapApi.currentMessage.subscribe(x => this.map = x);

    var newarkDE = new google.maps.LatLng(39.6780, -75.7506);
    
    var infoWindow = new google.maps.InfoWindow;
    
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: newarkDE,
      zoom: 15,
      mapTypeId: 'roadmap'
    });
    
    var user;
    
    this.userService.getUserByEmail(AuthenticationService.getEmail()).subscribe(userData =>{
        
        user = userData;

        navigator.geolocation.getCurrentPosition(position => {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

          this.userService.setUserLocation(user[0].email, pos.lng, pos.lat).subscribe(x =>{

            console.log(x);
          });
          infoWindow.setPosition(pos);
          infoWindow.setContent('You are here');
          infoWindow.open(this.map);
          this.map.setCenter(pos);
          this.setHeatmapCurrentUser(pos.lat, pos.lng);
          this.mapApi.changeMessage(this.map);
        });
    });
    this.setHeatmapAllUsers();
  }

  public configureMap(){}
  public getMap(){
      return this.map;
  }
  setHeatmapCurrentUser(lat, long): void{
    var heatmapData = [
      {location: new google.maps.LatLng(lat, long), weight: 1}
    ];
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      radius: 50
    });
    heatmap.setMap(this.map);
  }
  setHeatmapAllUsers(){

    var users = [];
    this.userService.getAllUsers().subscribe(userData =>{
        
      users = userData;

      for(var i = 0; i < users.length; i++){

          this.setHeatmapCurrentUser(users[i].location.latitude, users[i].location.longitude);
      }
    });
  }
  public static showEvents(result, map): any{
    
    var markers = [];
    var marker;
    for(var i = 0; i < result.length; i++){
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(result[i].latitude, result[i].longitude),
          map: map,
          title: result[i].title
        });
        markers.push(marker);
    }

    return markers;

 /* google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));*/
  }
  public static clearMarkers(markers){

    for(var i = 0; i < markers.length; i++){

      markers[i].setMap(null);
    }
  }
}
