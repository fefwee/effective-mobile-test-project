import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { IPost } from 'src/app/models/IPost';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css'],
})
export class DetailPostComponent implements OnInit {

  private id!:number;
  public detailPost!:IPost

  constructor(
    private service: PostService, 
    private location: Location,
    private postId:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = Number(this.postId.snapshot.paramMap.get('id'));
    this.service.getPostId(this.id).subscribe((item:IPost)=>{
      this.detailPost = item;
    })
  }
  goBack(): void {
    this.location.back();
  }
}
