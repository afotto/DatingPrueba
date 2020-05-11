import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-Nav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public _auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this._auth.login(this.model).subscribe( next => {
      this.alertify.success('Logeado satisfactoriamente');
    }, error => this.alertify.error(error));
  }

  loggedIn(){
    return this._auth.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }

}
