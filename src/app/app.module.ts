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
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingFlatModule } from './app-routing--flat/app-routing--flat.module';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchformComponent,
    ReposComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    
    BrowserModule,
    AppRoutingModule,
    AppRoutingFlatModule
  ],
  providers: [SearchhService],
  bootstrap: [AppComponent]
})
export class AppModule { }

