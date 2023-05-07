import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({providedIn:'root'})
export class dataFetching {
    constructor(private http: HttpClient){
        
    }
getAllNews(){
   let header = new HttpHeaders().append("Access-Control-Allow-Origin", "*"); 
   return this.http.get("https://angular-app-addb3-default-rtdb.firebaseio.com/news", {headers:header})
}

getNewsById(id:"string"){
    
   return this.http.get(`https://angular-app-addb3-default-rtdb.firebaseio.com/news/${id}`)
}
}