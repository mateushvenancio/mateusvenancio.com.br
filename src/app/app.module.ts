import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { HomeAboutComponent } from './components/home/home-about/home-about.component';
import { HomeProjectsComponent } from './components/home/home-projects/home-projects.component';
import { HomeBlogComponent } from './components/home/home-blog/home-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeAboutComponent,
    HomeProjectsComponent,
    HomeBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
