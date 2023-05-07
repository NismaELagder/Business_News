import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({providedIn:"root"})
export class Authservice{
    constructor(private http: HttpClient){}
    userLoggerIn : boolean =false;
    newUser(user: {email:string, password:string}){
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJbPU1pFYvyYYR01fDq4ItYHGdYSRVsEo",{...user , returnSecureToken	:true});
}
    userLogin(user:{email:string, password:string}){

return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJbPU1pFYvyYYR01fDq4ItYHGdYSRVsEo", {...user, returnSecureToken	:true});
 }
}