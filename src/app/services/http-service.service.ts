import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { 

  }

  get(api){
    return new Promise((resolve,reject)=>{
      this.http.get(api).subscribe(response => {
       resolve(response)
      },(error)=>{
        reject(error);
      })
    })
   
  }

}
