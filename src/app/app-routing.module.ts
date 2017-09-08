import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleQuestionComponent } from './single-question/single-question.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { ProfileComponent } from './profile/profile.component';

const routerConfig: Routes = [
    {
        path: 'questions',
        component: AllQuestionsComponent
    },
    {
        path: 'single-question',
        component: SingleQuestionComponent
    },
        {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: '',
        redirectTo: '/questions',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/questions',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routerConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }