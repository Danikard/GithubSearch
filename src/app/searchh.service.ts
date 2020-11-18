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
    return this.http.get (`http://api.github.om/users/"+ this.username +/repos`)
  }
  getProfileRepos(){
    return this.http.get(`"https://api.github.com/users/"+ this.username +`)
  }
  upDateUser(username:string){
    this.username=username;
  }
}
