import { Component, OnInit } from '@angular/core';
import { SearchhService } from '../searchh.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  profile:any;
  reposits:any;
  username: string;
  

  constructor(private search:SearchhService) {
    this.search.getRepo().subscribe(data=>{
      console.log(data)
      this.profile=data;
    });
    this.search.getProfileRepos().subscribe(repo=>{
      console.log(repo);
      this.reposits=repo;
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
      this.reposits=repo;
  })
}
  

  ngOnInit(): void {
  }

}
