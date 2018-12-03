import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Skill } from './menu/skill/app.skill';
import { Exp } from './menu/exp/app.exp';
import { Formation } from './menu/formation/app.formation';
import { Lang } from './menu/lang/app.lang';
import { Resume } from './menu/resume/app.resume';
import { Contact } from './menu/Contact/app.contact';

@NgModule({
  declarations: [
    AppComponent,
    Contact,
    Exp,
    Formation,
    Lang,
    Resume,
    Skill
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
