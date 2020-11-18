import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchformComponent } from './searchform/searchform.component';
import { ReposComponent } from './repos/repos.component';
import { SearchhService } from './searchh.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchformComponent,
    ReposComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SearchhService],
  bootstrap: [AppComponent]
})
export class AppModule { }

