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

  ngOnInit(): void {

    var newarkDE = new google.maps.LatLng(39.6780, -75.7506);
    
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: newarkDE,
      zoom: 15,
      mapTypeId: 'roadmap'
    });

    this.setHeatmap();
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
