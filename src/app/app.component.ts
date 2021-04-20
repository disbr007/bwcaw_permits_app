import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {Image as ImageLayer} from 'ol/layer';
import {ImageArcGISRest} from 'ol/source';

import {ms_usfs_wilderness} from './constants/layer_constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  map: Map;

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [-10158150.05,6093622.87],
        zoom: 9,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new ImageLayer({
          source: new ImageArcGISRest({
            ratio: 1,
            params: {
              LAYERS: 'show:0'
            },
            url: ms_usfs_wilderness
          })
        })
      ],
      target: 'ol-map'
    });
  }
}
