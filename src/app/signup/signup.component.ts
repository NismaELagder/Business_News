import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import { catchError } from 'rxjs';
import { Authservice } from 'src/service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
constructor( private authService: Authservice){}
error: string ='';

signUp(form: NgForm){
  let user = {email: form.value.email, password: form.value.password};
this.authService.newUser(user).subscribe(user => {console.log(user)});
}

}
