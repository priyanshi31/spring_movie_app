import { Component, OnInit } from '@angular/core';
import {TmdbApiService} from './../tmdb-api.service';
@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css'],
   providers:[TmdbApiService]
})
export class TopRatedMoviesComponent implements OnInit {
  public movieData: any=[];
    public imagePath: any;
    public baseUrl="http://image.tmdb.org/t/p/w185/";
  constructor(private tmdbApiService : TmdbApiService) { }
  ngOnInit() {
  this.getInfo();
}
 
getInfo(){
  this.tmdbApiService.gettoprated().subscribe(data=>{
    this.movieData=data.results;
      },(error:any)=>{
        console.log(error)
      })
}
}
