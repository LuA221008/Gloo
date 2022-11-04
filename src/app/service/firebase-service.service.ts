import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  getAuth,
} from '@angular/fire/auth';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseServiceService {
  user!: User | null;
  constructor(private auth: Auth, private router: Router) {
    this.onAuthStateChanged((user) => (this.user = user));
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logOut() {
    return signOut(this.auth);
  }

  getUser() {
    return this.auth.currentUser;
  }

  getDataUser() {
    const auth = getAuth();
    return auth;
  }

  returnUser() {
    return this.auth.currentUser;
  }

  loggedUSer(): User {
    if (this.user !== null) {
      return this.user;
    }
    alert('you must be logged in');
    this.router.navigate(['/']);
    return {} as User;
  }

  onAuthStateChanged(func: (user: User | null) => void) {
    return this.auth.onAuthStateChanged(func);
  }
}
