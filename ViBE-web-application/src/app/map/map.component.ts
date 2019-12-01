import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  pos: any;

  ngOnInit(): void {

    var newarkDE = new google.maps.LatLng(39.6780, -75.7506);
    
    var infoWindow = new google.maps.InfoWindow;
    
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: newarkDE,
      zoom: 15,
      mapTypeId: 'roadmap'
    });
  
    this.setHeatmap();

    navigator.geolocation.getCurrentPosition(position => {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here');
      infoWindow.open(this.map);
      this.map.setCenter(pos);
    });

  }
  setHeatmap(): void{

    var heatmapData = [
      {location: new google.maps.LatLng(39.6780, -75.76), weight: 50},
      {location: new google.maps.LatLng(39.6780, -75.7506), weight: 50},
      {location: new google.maps.LatLng(39.6780, -75.74), weight: 50}
    ];

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData,
      radius: 50
    });

    heatmap.setMap(this.map);
    
  }

}
