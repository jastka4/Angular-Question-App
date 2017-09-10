import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleQuestionComponent } from './single-question/single-question.component';
import { AllQuestionsComponent } from './all-questions/all-questions.component';
import { ProfileComponent } from './profile/profile.component';

const routerConfig: Routes = [
    {
        path: '',
        component: AllQuestionsComponent
    },
    {
        path: 'question/:id',
        component: SingleQuestionComponent
    },
        {
        path: 'profile/:name',
        component: ProfileComponent
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
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