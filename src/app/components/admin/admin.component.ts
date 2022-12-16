import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Data } from '@angular/router';
import { forkJoin, from } from 'rxjs';
import { Database } from 'src/app/shared/models/object';
import { DatabaseServices } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  Datos:Database[]=[];
  ticketForms: FormGroup[] = [];
  editForm = this.fb.group({
    id: new FormControl(0, [Validators.required]),
    destino: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    foto: new FormControl('', [Validators.required]),
  });
  ticketFormsEdit: FormGroup[] = [];
  state:boolean = false;
  validateedit:boolean = false;
  validatecreate:boolean = false;
  validatetable:boolean = true;
  loading:boolean = false;
  ok = false;


  regiones = [
    { id: 1, name: "Norte" },
    { id: 2, name: "Sur" },
    { id: 3, name: "Este" },
  ];

  constructor(private services:DatabaseServices, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.ticketForms.push(this.buildForm(0));
    this.get()
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

  getById(id:number){
    this.services.getTurismoById(id).subscribe({
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

  deleteTurismo(id:number){
    this.services.deleteTurismo(id).subscribe({
      next:()=>{
        this.get()
      }
    })
  }

  buildForm(id:number) {
    if(this.state == true){
      return new FormGroup({
        destino: new FormControl('', [Validators.required]),
        region: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        foto: new FormControl('', [Validators.required]),
      });
    }
    else{
      return new FormGroup({
        destino: new FormControl('', [Validators.required]),
        region: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        foto: new FormControl('', [Validators.required]),
      });
    }
  }

  addForm() {
    this.ticketForms.push(this.buildForm(0));
  }

  get formsValid() {
    return this.ticketForms.some(form => form.valid == false);
  }

  change1() {
    this.validateedit = false;
    this.validatecreate = true;
  }

  change2(db:Database) {
    // this.validateedit = true;
    this.validatecreate = false;
    this.validatetable = false;
    this.ok = false;
    localStorage.setItem('id', db.id.toString());
    this.editForm.patchValue({
      id: db.id,
      destino: db.destino,
      region: db.region,
      descripcion: db.descripcion,
      foto: db.foto
    });

  }

  updateForm(){
    // console.log(this.editForm.value)
    // let Form = JSON.stringify(this.editForm.value);
    const id = localStorage.getItem('id');
    const Form = {
      descripcion: this.editForm.value.descripcion,
      destino: this.editForm.value.destino,
      foto: this.editForm.value.foto,
      id: this.editForm.value.id,
      region: this.editForm.value.region,
    };
    this.services.putTurismo(Form, Number(id)).subscribe((res) => {
      console.log(res);
      this.ok = true;
      localStorage.removeItem('id')
      this.get();
    })
  }

  submit() {
    let tickets = this.ticketForms.map(form => form.value);
    const observables = tickets.map(ticket => this.services.post(ticket));
    this.loading = true;
    forkJoin(observables).subscribe({
      next: (data) => {
        data.forEach((ticket:Database) => {
        })
      },
      complete: () => {
        this.ticketForms = [this.buildForm(0)];
        this.loading = false;
        this.validatecreate = false;
        this.get();
      }
    })
  }

  submitEdit() {
    let tickets = this.ticketForms.map(form => form.value);
    var id = localStorage.getItem('id');

    const observables = tickets.map(ticket => this.services.putTurismo(tickets,Number(id)));
    console.log(tickets)
    console.log(observables)
    this.loading = true;
    forkJoin(observables).subscribe({
      next: (data) => {
        data.forEach(() => {

        })
      },
      complete: () => {
        this.ticketForms = [this.buildForm(0)];
        this.loading = false;
        this.validateedit = false;
        this.validatetable = true;
        localStorage.removeItem('id')
        this.get()
      }
    })
  }

  removeForm(index: number) {
    this.ticketForms.splice(index, 1);
  }

  hasError(controlName: string, errorName: string, form: FormGroup) {
    return form.controls[controlName].hasError(errorName) &&
           form.controls[controlName].touched;
  }
}
