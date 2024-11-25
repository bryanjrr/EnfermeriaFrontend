import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNursesComponent } from './list-nurses/list-nurses.component';

const routes: Routes = [
  { path: "Search", component: ListNursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
