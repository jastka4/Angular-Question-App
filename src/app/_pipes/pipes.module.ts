import { NgModule } from '@angular/core';
import { DayDifferencePipe } from './day-difference.pipe';
import { SearchPipe } from './search.pipe';

 @NgModule({
     imports:        [],
     declarations:   [DayDifferencePipe,SearchPipe],
     exports:        [DayDifferencePipe,SearchPipe],
 })

 export class PipesModule {

   static forRoot() {
      return {
          ngModule: PipesModule,
          providers: [],
      };
   }
 } 