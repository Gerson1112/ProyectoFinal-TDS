import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginfireService {

  constructor(public autfirebase: AngularFireAuth) { }


  login(correo: any, password: any){
    return this.autfirebase.signInWithEmailAndPassword(correo, password)
  }

  stateUser(){
    return this.autfirebase.authState
  }

  singout(){
    this.autfirebase.signOut();
  }
}

