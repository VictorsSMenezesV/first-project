import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "../models/user.models";
import { Observable } from "rxjs";
import { Icnpj } from "../models/cnps.models";

@Injectable({
    providedIn:'root'
})
export class UserService{


    constructor(private http: HttpClient){

    }

    getData():Observable<any>{
      const url = 'https://comercial.cnpj.ws/cnpj/18748484000117?token=rOc9NEDMzZSpsvRKbpwk3EW5Pm7VAMobUoZJs7sD4BmW';
      return this.http.get<any>(url);
    }
    
      
}