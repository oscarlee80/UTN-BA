import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]
})

export class LoginComponent implements OnInit {
  public loginForm;
  constructor(public fb: FormBuilder, public loginservice: UsersService) {
    this.loginForm=this.fb.group({
      email: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    })
   }

   login (){
     let data = this.loginForm.value;
     this.loginservice.login(data).subscribe(datos=>{
      console.log(datos);
      localStorage.setItem('usuario', datos["data"]["user"]);
       localStorage.setItem('token', datos["data"]["token"]);
       let token = localStorage.getItem('usuario');
       console.log(token);
     });
   }
  ngOnInit() {
  }

}
