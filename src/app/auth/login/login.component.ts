import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../../service/firebase-service.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  formSingIn!: FormGroup;
  private readonly REGEX: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(
    private firebaseService: FirebaseServiceService,
    private router: Router,
    private formBuild: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formSingIn = this.formBuild.group({
      email: ['', [Validators.required, Validators.pattern(this.REGEX)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  loginGoogle() {
    this.firebaseService
      .loginWithGoogle()
      .then(() => this.router.navigate(['gloo/modules']));
  }

  login() {
    this.firebaseService
      .login(this.emailImput, this.passwordImput)
      .then(() => this.router.navigate(['gloo/modules']))
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El usuario no es valido',
        });
      });
  }

  get emailImput() {
    return this.formSingIn.get('email')?.value;
  }

  get passwordImput() {
    return this.formSingIn.get('password')?.value;
  }
}
