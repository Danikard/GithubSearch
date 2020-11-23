import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from '../repos/repos.component'; 
import { UserComponent } from '../user/user.component';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: 'repos', component: ReposComponent},
  { path: 'user', component: UserComponent},
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ]
  
  
})
export class AppRoutingFlatModule { }
