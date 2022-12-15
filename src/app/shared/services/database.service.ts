import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Database, ListData } from "../models/object";
import { BaseServices } from "./base.service";

@Injectable({
    providedIn:"root"
})
export class DatabaseServices extends BaseServices<Database>
{
    api:string = environment.apiUrl;
    constructor(override http:HttpClient){
        super(http,"api/Turismo")
    }

    getTurismo():Observable<any[]>{
        return this.http.get<any[]>(`${this.url}`);
    }

    getTurismoById(id:number):Observable<any[]>{
      return this.http.get<any[]>(`${this.url}/${id}`);
    }

    postTurismo(data:Database):Observable<Database>{
        return this.http.post<Database>(`${this.url}`, data);

    }

    putTurismo(data:any,id:number):Observable<Database>{
        return this.http.put<Database>(`${this.url}/${id}`, data);

    }

    deleteTurismo(id:number):Observable<Database>{
        return this.http.delete<Database>(`${this.url}/${id}`);

    }
}
