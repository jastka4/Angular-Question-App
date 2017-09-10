import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../_services/questions.service';
import { ProfilesService } from '../_services/profiles.service';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.scss']
})
export class AllQuestionsComponent implements OnInit {
  questions = [];
  profiles = [];

  constructor(private questionsService: QuestionsService,
              private profilesService: ProfilesService) {}

  ngOnInit() {
    this.questions = this.questionsService.questions;
    this.profiles = this.profilesService.profiles;
  }

  getProfilePicture(username: string) {
  for(let i = 0; i < this.profiles.length; i++) {
      if (this.profiles[i].username === username)
          return this.profiles[i].picture
  }
 }

  getNumberOfPeers(id: number): number{
  return this.questions
    .reduce((res, item) => Object
      .assign(res, {
        [item['username']]: 1 + (res[item['username']] || 0)
      }), Object.create(null));
  }
}
