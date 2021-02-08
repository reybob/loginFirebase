import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
// import { Auth } from 'firebase/auth';
// import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  // public user: User;

  constructor(public afAuth: AngularFireAuth) { }


  async login(mail: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(mail, password);
    } catch (error) {
      console.log(error);
    }
  }

  async register(mail: string, password: string) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(mail, password);
    } catch (error) {
      console.log(error);
    }
  }

  async logOut() {
    await this.afAuth.signOut();
  }

  getCurrentUser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
