import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {NowPlayingMovieComponent} from './now-playing-movie/now-playing-movie.component';
import {PopularMoviesComponent} from './popular-movies/popular-movies.component';
import {TopRatedMoviesComponent} from './top-rated-movies/top-rated-movies.component';
import {UpcomingMoviesComponent} from './upcoming-movies/upcoming-movies.component';


const routes: Routes = [
  {path: '', redirectTo:'/upcoming',pathMatch:'full'},
  { path: 'upcoming', component:UpcomingMoviesComponent},
  { path: 'toprated', component:TopRatedMoviesComponent},
  { path: 'popular', component:PopularMoviesComponent},
  {path: 'nowplaying',component:NowPlayingMovieComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[ RouterModule],
  declarations: []

})
export class AppRoutingModule { }
