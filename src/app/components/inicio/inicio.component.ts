import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  carrousel = ["BaniPlayaSalinas.jpg","Bonao Salto de Jima.jpg","Santiago de los Caballeros Monumeto.jpg"];

  activeImage:number = 0;

  imgNext(){
    if(this.activeImage == this.carrousel.length - 1) {
      this.activeImage = 0
      return
    }

    this.activeImage++
  }

  imgPrev(){
    if(this.activeImage == 0) {
      this.activeImage = this.carrousel.length -1
      return
    }

    this.activeImage--
  }

}
