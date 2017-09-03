import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleQuestionComponent } from './single-question/single-question.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SingleQuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
