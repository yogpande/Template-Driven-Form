import { Component } from '@angular/core';
import {Usermodel} from './models/usermodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 user = new Usermodel();

 onSubmit()
 {
   console.log(this.user.username + " " + this.user.usercity);
 }
}
