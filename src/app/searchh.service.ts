import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchhService { 
 private username:string;            

  constructor( private http:HttpClient) { 
    this.username="danikard"
  }
  getRepo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id="+ "f67dba295a3cdb7653ca" + "&client_secret="+"ca675e84d042537389d8cd0fba3fef10bcc5cc26 ")
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/"+ this.username + "/repos?client_id="+ "f67dba295a3cdb7653ca"  + "&client_secret="+"ca675e84d042537389d8cd0fba3fef10bcc5cc26 ")
  }
  upDateUser(username:string){
    this.username=username;
  }
}


  

