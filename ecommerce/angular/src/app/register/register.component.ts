import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UsersService]
})
export class RegisterComponent implements OnInit {
  public registerForm;
  constructor(public fb: FormBuilder, public registerService: UsersService, private router:Router) {
    this.registerForm=this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
   }

   save (){
    let data = this.registerForm.value;
    console.log(data);
    this.registerService.register(data).subscribe(datos=>{
      console.log(datos);
      if (datos.status == "success") {
        this.router.navigateByUrl ('/login');
      } else {

      }
      // localStorage.setItem('usuario', datos["data"]["user"]);
      // localStorage.setItem('token', datos["data"]["token"]);
      // let token = localStorage.getItem('usuario');
    });
   }
  ngOnInit() {
  }

}
