import { Component, OnInit } from '@angular/core';
import {TmdbApiService} from './../tmdb-api.service';


@Component({
  selector: 'app-now-playing-movie',
  templateUrl: './now-playing-movie.component.html',
  styleUrls: ['./now-playing-movie.component.css'],
  providers: [ TmdbApiService ]
})
export class NowPlayingMovieComponent implements OnInit {
  public movieData: any=[];
  public imagePath: any;
  public baseUrl="http://image.tmdb.org/t/p/w200/";

  constructor(private tmdbApiService : TmdbApiService) {
  }
  
  ngOnInit() {
    this.getInfo();
  }

  // Get all movies from tmdb server based on searched text
  getInfo(){
    this.tmdbApiService.getnowplaying().subscribe(data=>{
      this.movieData=data.results;
      },(error:any)=>{
      console.log(error)
    })
  }
}


