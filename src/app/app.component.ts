import { Component, OnInit } from '@angular/core';
import {TmdbApiService} from './tmdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TmdbApiService]
})
export class AppComponent implements OnInit {

    constructor(){}

   ngOnInit(){
   }
}
