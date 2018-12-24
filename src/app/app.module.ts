import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {CvService} from './service/service';



import { AppComponent } from './app.component';
import { Experience } from './exp/app.exp';
import { Formation } from './formation/app.formation';
import { Resume } from './resume/app.resume';
import { Skill } from './skill/app.skill';


@NgModule({
  declarations: [
    AppComponent,
    Experience,
    Formation,
    Resume,
    Skill,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
