import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-use',
  templateUrl: './module-use.component.html',
  styleUrls: ['./module-use.component.scss'],
})
export class ModuleUseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
