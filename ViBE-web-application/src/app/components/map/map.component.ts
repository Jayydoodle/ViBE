import { Component, OnInit, Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from "./../../models/user";
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
    var user = new User();
    
    this.userService.getUserByEmail("Shabir").subscribe(userData =>{
        
        user = userData[0];

        navigator.geolocation.getCurrentPosition(position => {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }

          this.userService.setUserLocation(user[0].author, pos.lat, pos.lng).subscribe(x =>{

            console.log(x);
          });
          infoWindow.setPosition(pos);
          infoWindow.setContent('You are here');
          infoWindow.open(this.map);
          this.map.setCenter(pos);
          this.setHeatmapCurrent(pos);
          this.mapApi.changeMessage(this.map);
        });
    });
  }

  public configureMap(){}
  public getMap(){
      return this.map;
  }

  setHeatmapTest(pos): void{

    var heatmapData = [
      {location: new google.maps.LatLng(pos.lat, pos.lng), weight: 1},
      {location: new google.maps.LatLng(pos.lat, pos.lng + .01), weight: 1},
      {location: new google.maps.LatLng(pos.lat, pos.lng - .01), weight: 1}
    ];

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      radius: 50
    });

    heatmap.setMap(this.map);
  }
  setHeatmapCurrent(pos): void{
    var heatmapData = [
      {location: new google.maps.LatLng(pos.lat, pos.lng), weight: 1}
    ];
    console.log(heatmapData)
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      radius: 50
    });
    heatmap.setMap(this.map);
  }
  public hide(map){
    console.log(map.getCenter());
  }
  public static showEvents(result, map){
    
    let mapPoints = new Array<any>();
    for(var i = 0; i < result.length; i++){
        mapPoints.push({location: new google.maps.LatLng(result[i].latitude, result[i].longitude), weight: 1});
        
        console.log(mapPoints[i]);
    }

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: mapPoints,
      radius: 50
    });
    heatmap.setMap(map);
  }
}
