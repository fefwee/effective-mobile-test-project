import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit{

  constructor(private service:PostService,private location:Location){}

  ngOnInit(): void {
  
  }
  goBack(): void {
    this.location.back();
  }
}
