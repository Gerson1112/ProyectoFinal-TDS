import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginfireService } from './loginfire.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginstatus: boolean = false;

  constructor(public login: LoginfireService,
    private router:Router){

      this.login.stateUser().subscribe(res => {
        if(res) {
          this.loginstatus = true;
        }else{
          this.loginstatus = false;
        }
      })
  }



  async loginnn(correo: string, password: string) {
    const res = await this.login.login(correo, password).catch(err => {
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o password incorrectos!'
      })
    })
    if (res) {
      console.log('res', res);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido al sistema',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/']);

    }
  }
}
