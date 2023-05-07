import { Component , DoCheck} from '@angular/core';
import { Authservice } from 'src/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements DoCheck  {
  loggedIn: boolean;
constructor(private authService: Authservice ){};
ngDoCheck(): void {
  this.loggedIn = this.authService.userLoggerIn ;  
}
}
