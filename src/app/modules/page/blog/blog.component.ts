import { Component, OnInit } from '@angular/core';
import { contents, IBlogContent } from './contents';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  contents: IBlogContent[] = []

  constructor() { 
    this.contents = contents
  }

  ngOnInit(): void {
  }

}
