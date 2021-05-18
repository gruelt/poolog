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

    const data = {
      username: this.username.value,
      password: this.pass.value,
      grant_type: 'password',
      client_id: 5,
      client_secret: 'AbRdX0n0A7TwlHaGp1A9FfkNGhua24suDb9dBVud',
      scope: '*'
    };

    this.login.login(data).subscribe(data =>
      this.token = data.access_token
    );
    localStorage.setItem('token', this.token );
  }

  getLogin(): void{
    console.log('get login'+this.username);
    this.login.getLogin().subscribe(data => this.whoami = data);

  }


  console($event): void{
    console.log('event '+console.log($event));
  }

  consoletoken(): void{
    let user = localStorage.getItem('token');
    console.log('token ' + user );
  }

}
