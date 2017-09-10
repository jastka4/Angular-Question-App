import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleQuestionComponent } from './single-question/single-question.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';

import { QuestionsService } from './_services/questions.service';
import { ProfilesService } from './_services/profiles.service';

import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './_pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SingleQuestionComponent,
    AllQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule.forRoot()
  ],
  providers: [QuestionsService,ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
