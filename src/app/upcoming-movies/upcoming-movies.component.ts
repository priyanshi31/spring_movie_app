import { Component, OnInit } from '@angular/core';
import {TmdbApiService} from './../tmdb-api.service';


@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css'],
  providers:[TmdbApiService]
})
export class UpcomingMoviesComponent implements OnInit {
  public movieData: any=[];
  public imagePath: any;
  public baseUrl="http://image.tmdb.org/t/p/w185/";
constructor(private tmdbApiService : TmdbApiService) { }
  ngOnInit() {
  this.getInfo();
}

getInfo(){
  this.tmdbApiService.getPosts().subscribe(data=>{
  this.movieData=data.results;
  },
  (error:any)=>{
  console.log(error)
  })
}
}
