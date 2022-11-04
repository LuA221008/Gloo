import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-security',
  templateUrl: './module-security.component.html',
  styleUrls: ['./module-security.component.scss'],
})
export class ModuleSecurityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
