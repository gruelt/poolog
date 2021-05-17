import { Component, OnInit } from '@angular/core';
import { LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService) { }

  whoami : any;

  ngOnInit(): void {
  }

  loginAttempt(): void{
    console.log('attempt login');
    this.login.login();
  }

  getLogin(): void{
    console.log('get login');
    this.login.getLogin().subscribe(data => this.whoami = data);

  }

}
