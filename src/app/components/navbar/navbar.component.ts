import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginfireService } from '../login/loginfire.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loginstatus: boolean = false;

  constructor(public login: LoginfireService,
    private router:Router) {
    this.login.stateUser().subscribe((res) => {
      if (res) {
        this.loginstatus = true;
      } else {
        this.loginstatus = false;
      }
    });
  }
  singtOut() {
    Swal.fire({
      title: 'Esta seguro de cerrar sesion?',
      text: "una vez cerrada la sesion se tendra que volver a loguear para disfrutar de ciertos privilegios...",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesion!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Cerrar Sesion!',
          'Cerrando sesion...',
          'success'
        )
        this.login.singout();
        this.router.navigate(["/"])
      }
    })



  }
}
