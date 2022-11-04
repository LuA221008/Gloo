import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../service/firebase-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-private',
  templateUrl: './navbar-private.component.html',
  styleUrls: ['./navbar-private.component.scss'],
})
export class NavbarPrivateComponent implements OnInit {
  constructor(
    private firebaseService: FirebaseServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logOut() {
    this.firebaseService
      .logOut()
      .then(() => this.router.navigate(['/gloo/home']));
  }
}
