import { Injectable } from '@angular/core';
import { ProfilesService } from '../_services/profiles.service';
import * as moment from 'moment';

@Injectable()
export class QuestionsService {
    questions = [
        {   
            id: 0,
            username: 'Eva',
            date: moment("5.09.2017 12:55", "DD.MM.YYYY HH.mm").toDate(),
            topic: 'Will insulin make my patient gain weight?',
            content: 'All my patients with diabetes should see an opthalmologist yearly for a dialated eye examination- beginning at diagnosis inpeople with type 2 diabetes, and after 5 years in people with type 1 diabeters after puberty. Patients with know eye disease, symptoms of blurred vision in one eye, or blind spots may need to see their opthalmologist more frequently.',
            votes: 19,
            answers: [
                {
                    username: 'Patricia',
                    date: moment().toDate(),
                    content: 'Numbers or tingling in your feet should be reported to your doctor at your regular visits.',
                    votes: 8,
                    comments: [
                        {
                            username: 'David',
                            date: moment().toDate(),
                            content: 'You should check your feet daily for redness, caluses, cracks, or skin breakdown.',
                            votes: 2,  
                        }
                    ]
                },
                {
                    username: "Joseph's",
                    date: moment().add(-1, 'days').toDate(),
                    content: 'When your blood sugar is low , your body gives out signs that you need food. Different people have different symptoms. You will learn to know your symptoms.',
                    votes: -3
                }
            ]
        }
    ]

    constructor(private profilesService: ProfilesService) {
        this.profilesService = profilesService;
    }

}