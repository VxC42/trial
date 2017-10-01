import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NewItemComponent } from "./new-item/new-item.component";
import { UserComponent } from "./user/user.component";
// import { AddAnswerComponent } from "./add-answer/add-answer.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new_item', pathMatch: 'full', component: NewItemComponent },
  // { path: 'question/:id/new_answer', component: AddAnswerComponent },
  { path: 'user/:id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
