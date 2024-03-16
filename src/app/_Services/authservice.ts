import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';
// import fireApp, { database } from './firebase/firebase'
// import { auth } from '@angular/firebase/compat/app'; 
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private eventAuthError = new BehaviorSubject<string>("");
    eventAuthError$ = this.eventAuthError.asObservable();

    newUser: any;

    constructor(
        private afAuth: AngularFireAuth,
        private db: AngularFirestore,
        private router: Router, private toastr: ToastrService,) { }

    getUserState() {
        return this.afAuth.authState;
    }

    login(email: string, password: string) {
        this.afAuth.signInWithEmailAndPassword(email, password)
            .catch(error => {
                console.log(error.erros);
                this.eventAuthError.next(error);
                this.toastr.error("Please enter the valid email Or password")

            })
            .then((userCredential: any) => {
                if (userCredential) {
                    this.router.navigate(['/pages']);
                }
            })
    }

    createUser(user: any) {
        this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential: any) => {
                this.router.navigate(['/pages']);
            })
            .catch(error => {
                this.eventAuthError.next(error);
            });
    }

    logout() {
        return this.afAuth.signOut();
    }
}
