import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Authservice } from 'src/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private authService:Authservice, private router: Router){}
error: string ='';
loggedIn: boolean
login(form:   NgForm){
  let user = {email: form.value.email,password: form.value.password}
this.authService.userLogin(user).subscribe(user => {localStorage.setItem("userData" , JSON.stringify(user))
this.authService.userLoggerIn =true;
this.router.navigate(["/"]);
}
)
}

}
