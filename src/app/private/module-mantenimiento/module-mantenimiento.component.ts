import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-mantenimiento',
  templateUrl: './module-mantenimiento.component.html',
  styleUrls: ['./module-mantenimiento.component.scss'],
})
export class ModuleMantenimientoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
