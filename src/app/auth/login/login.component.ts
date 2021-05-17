import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService} from '../login.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService) { }

  whoami : any;
  token : any;
  username = new FormControl('');
  pass = new FormControl('');

  ngOnInit(): void {
  }

  loginAttempt(): void{
    console.log('attempt login with '+ this.username.value + ' - ' + this.pass.value);
    this.login.login(this.username.value, this.pass.value).subscribe(data =>this.token);
  }

  getLogin(): void{
    console.log('get login'+this.username);
    this.login.getLogin().subscribe(data => this.whoami = data);

  }


  console($event): void{
    console.log('event '+console.log($event));
  }

}
