import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table-post',
  templateUrl: './table-post.component.html',
  styleUrls: ['./table-post.component.css']
})
export class TablePostComponent implements OnInit{

  displayedColumns: string[] = ['number', 'title', 'body'];
  dataSource!:IPost[]

  constructor (private service:PostService){}

  ngOnInit(): void {
    this.service.getPost().subscribe((post:any)=>{
      console.log(post);
      this.dataSource = post
    })
  }
}
