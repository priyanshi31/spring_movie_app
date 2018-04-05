import { Component, OnInit } from '@angular/core';
import {TmdbApiService} from './../tmdb-api.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css'],
  providers:[TmdbApiService]
})
export class PopularMoviesComponent implements OnInit {
       public movieData: any=[];
    public imagePath: any;
    public baseUrl="http://image.tmdb.org/t/p/w200/";
  constructor(private tmdbApiService : TmdbApiService) { }
  ngOnInit() {
  this.getInfo();
}

getInfo(){
  this.tmdbApiService.getPopular().subscribe(data=>{
    this.movieData=data.results;
      },(error:any)=>{
        console.log(error)
      })
}
}

