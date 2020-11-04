import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AddproductService {
 
  constructor(private http:HttpClient) { }
  save(productDto): any {
    return this.http.post(environment.envUrl+"add", productDto);
  }

  getList(): any {
    return this.http.get(environment.envUrl);
  }
}
