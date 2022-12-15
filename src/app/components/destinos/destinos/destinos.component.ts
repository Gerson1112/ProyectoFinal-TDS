import { Component, OnInit } from '@angular/core';
import { DatabaseServices } from 'src/app/shared/services/database.service';
import { Database } from 'src/app/shared/models/object';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {
  Datos:Database[]=[];
  constructor(private services:DatabaseServices){}

  ngOnInit() {
    this.get();  
  }

  get(){
    this.services.getTurismo().subscribe({
      next:(data)=>{
        this.Datos = data;
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
      }
    })
  }
}

