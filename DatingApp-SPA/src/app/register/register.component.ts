import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  
  constructor(private authServ: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.model );
    this.authServ.register(this.model).subscribe(() => {
      this.alertify.success('Registrado satisfactoriamente');
    }, err => this.alertify.error(err));
  }

  cancel(){
    this.cancelRegister.emit(false);
    this.alertify.warning('canceled');
  }

}
