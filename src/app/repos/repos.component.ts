import { Component, OnInit } from '@angular/core';
import { SearchhService } from '../searchh.service';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  profile:any;
  repositors:any;
  username: string;


  constructor(private search:SearchhService) {
    this.search.getRepo().subscribe(data=>{
      console.log(data)
        this.profile=data;
      });
      this.search.getProfileRepos().subscribe(repo=>{
        console.log(repo);
        this.repositors=repo;
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
      this.repositors=repo;
    })
  }

    ngOnInit(): void {
  }

}
