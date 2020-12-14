import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  messageError:boolean;
  @ViewChild('fform') loginFormDirective;
  constructor(private fb: FormBuilder, private userService: UserService, private router:Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  isValidLoginForm() {
    let valid: boolean = false;
    if (this.loginForm) {
      valid = this.loginForm.valid;
    }
    return valid;
  }

  onSubmit() {
    try {
      //Verify the credentials
      console.log(this.loginForm);
      if(this.isValidLoginForm()){
        console.log("entro");
        this.userService.signin(this.loginForm.get('email').value, 
                                this.loginForm.get('password').value).subscribe(
          (res)=>{
            console.log("Estoy aquiiiii");
            console.log(res);
            let response:any = res;
            localStorage.setItem('token', response.token);
            this.userService.role = response.role;
            localStorage.setItem('role', response.role);
            this.router.navigate(['/tool']);


          },
          err => {
            console.log("Hubo un error en el Login");
            console.log(err);
            this.messageError = true;
            this.resertLoginForm();
          });
      }
      // this.userService.signin();
    }
    catch (error) {
      console.log(error);
    }
  }

  resertLoginForm() {
    this.loginForm.reset({
      email: '',
      password: ''
    });
    this.loginFormDirective.resetForm();
  }
}
