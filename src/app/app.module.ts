import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchformComponent } from './searchform/searchform.component';
import { ReposComponent } from './repos/repos.component';
import { SearchhService } from './searchh.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchformComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SearchhService],
  bootstrap: [AppComponent]
})
export class AppModule { }
