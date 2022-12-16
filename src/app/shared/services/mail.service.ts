import { NgPlural } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})

export class MailService{
  constructor(private http: HttpClient){}

  sendMail(object: any){
    let obj = {
      _catcha: false,
      ...object
    }
    return this.http.post("https://formsubmit.co/60d5c39beb1e847192d54b2d28e6e800", JSON.stringify(obj))
  }

}
