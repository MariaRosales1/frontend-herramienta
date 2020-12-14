import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User, ROLETYPE } from '../shared/user.model';
import { UserService } from '../services/user.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  @ViewChild('fform') userFormDirective;
  userForm: FormGroup;
  roles = ROLETYPE;

  constructor(private userService: UserService, private fb: FormBuilder, private _snackBar: MatSnackBar,
    private router:Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])],
      samePassword: ['', Validators.compose([Validators.required, this.passwordsMatch.bind(this)])],
    });
  }

  passwordsMatch(samePasswordFormControl: FormControl) {
    if (this.userForm) {
      return (this.userForm.get("samePassword").value === this.userForm.get("password").value) ? null :
        { noMatchPassword: true };
    }
    return null;
  }

  isValidUserForm() {
    let valid: boolean = false;
    if (this.userForm) {
      valid = this.userForm.valid;
    }
    return valid;
  }

  onSubmit() {
    try {

      //insert the user
      let user = this.createUser();
      if (user) {
        this.userService.registerUser(user).subscribe(
          (res) => {
            console.log(res);
            let response:any = res;
            this.resertUserForm();
            this.configurationSnackBar();
            // localStorage.setItem('token', response.token);
            this.router.navigate(['/login']);
           // this.router.navigate([{outlets: {primary: '/tool', toolSupport: '/tool'}}]);
          },
          err => console.log(err));
      }
      else {
        console.log("El usuario no se pudo crear, la información del formulario no es correcta")
      }
    } catch (error) {
      console.log(error);
    }

  }

  resertUserForm() {
    this.userForm.reset({
      firstname: '',
      lastname: '',
      role: '',
      password: '',
      samePassword: '',
      email: ''
    });
    this.userFormDirective.resetForm();
  }

  createUser(): User {
    let user = null;
    if (this.isValidUserForm) {
      user = new User();
      user.firstname = this.userForm.get('firstname').value;
      user.lastname = this.userForm.get('lastname').value;
      user.email = this.userForm.get('email').value;
      user.password = this.userForm.get('password').value; //se envia el password en texto, mejorar esto
      user.role = this.userForm.get('role').value;
    }
    return user;
  }

  configurationSnackBar() {
    let config = new MatSnackBarConfig();
    config.duration = 4000;
    config.panelClass = ['success-message'];
    config.horizontalPosition = 'start';
    config.verticalPosition = 'bottom';
    this._snackBar.open("Usuario correctamente registrado", "", config);
  }

}
