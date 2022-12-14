import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export class BaseServices<T> {
    url:string;
    endpoint =environment.apiUrl;

    constructor(protected http:HttpClient,
                protected controller:string){

        this.url =`${this.endpoint}/${controller}`;
    }

    get():Observable<T[]>{
        return this.http.get<T[]>(this.url);
    }
    
    post(entity:T):Observable<T>{
        return this.http.post<T>(this.url, entity);
    }

    put(entity:T):Observable<T>{
        return this.http.put<T>(`${this.url}`, entity);
    }

    delete(id:number | string):Observable<T>{
        return this.http.delete<T>(`${this.url}/${id}`);
    }
}
