import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { NowPlayingMovieComponent } from './now-playing-movie/now-playing-movie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    
    TopRatedMoviesComponent,
    PopularMoviesComponent,
    UpcomingMoviesComponent,
    NowPlayingMovieComponent,
    NavbarComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
