import { Component, OnInit } from '@angular/core';
import { SearchhService } from '../searchh.service';
@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  profile:any;
  repository:any;
  username: string;
  
  constructor(private search:SearchhService) {
    this.search.getRepo().subscribe(data=>{
      console.log(data)
      this.profile=data;
    });
    this.search.getProfileRepos().subscribe(repo=>{
      console.log(repo);
      this.repository=repo;
    })
   }
   profileUser(){
     this.search.upDateUser(this.username);
     this.search.getRepo().subscribe(data=>{
      console.log(data)
      this.profile=data;
    });
    this.search.getProfileRepos().subscribe(repo=>{
      console.log(repo);
      this.repository=repo;
  })
}
  

  ngOnInit(): void {
  }

}
