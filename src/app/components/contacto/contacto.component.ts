import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/shared/services/mail.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  form:FormGroup = new FormGroup({})
  html:string = ""
  constructor(private mailService: MailService){
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      agencia: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email]),
      numero: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
  }

  sendEmail(){
    if(this.form.invalid){
      return
    }

    let value = this.form.value;

    this.mailService.sendMail(value).subscribe({
      next: (result: any) =>{
        console.log(result)
        this.html = result?.error.error

      },
      error:(error) =>{
        console.log(error?.error.text)
        this.html = error?.error.text

      }
    })
  }

  get hasError(){
    return this.form.invalid && (this.form.touched || this.form.dirty)
  }
}
