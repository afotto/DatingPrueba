import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  
  constructor(private authServ: AuthService) { }

  ngOnInit() {
  }

  register(){
    console.log(this.model );
    this.authServ.register(this.model).subscribe(() => {
      console.log('registrado');
    }, err => console.log(err));
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('canceled');
  }

}
