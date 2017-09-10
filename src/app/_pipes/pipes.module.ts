import { NgModule } from '@angular/core';
import { DayDifferencePipe } from './day-difference.pipe';

 @NgModule({
     imports:        [],
     declarations:   [DayDifferencePipe],
     exports:        [DayDifferencePipe],
 })

 export class PipesModule {

   static forRoot() {
      return {
          ngModule: PipesModule,
          providers: [],
      };
   }
 } 