import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../../service/firebase-service.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { updateProfile } from '@angular/fire/auth';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  nombreUsuario: string = '';
  registerForm!: FormGroup;
  private readonly EMAIL_REGEX: string =
    '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(
    private firebaseService: FirebaseServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.EMAIL_REGEX)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombreUsuario: ['', [Validators.required, Validators.max(20)]],
    });
  }
  get emailImput() {
    return this.registerForm.get('email')?.value;
  }

  get passwordImput() {
    return this.registerForm.get('password')?.value;
  }
  get nameImput() {
    return this.registerForm.get('nombreUsuario')?.value;
  }

  registerUser() {
    this.firebaseService
      .register(this.emailImput, this.passwordImput)
      .then((res) => {
        updateProfile(res.user, {
          displayName: this.nameImput,
        }).then(() => this.router.navigate(['/my-apps']));
      })
      .catch((error) => {
        Swal.fire(
          'Todos los campos son requeridos',
          'Verifica que todos los campos esten completos',
          'question'
        );
      });
  }
}
