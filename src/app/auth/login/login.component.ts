import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  msg: string = "";

  constructor(private fb: FormBuilder,
              private router: Router
  ) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.msg = '';
    if (this.loginForm.valid) {
      let login = this.loginForm.value.login
      let senha = this.loginForm.value.senha
      if(login === 'teste' && senha === '123456') {
        this.router.navigate(['/pages/home/']);
      }
      else {
        this.msg = "Login é teste e a senha é 123456";
      }
    } else {
      console.log('Form is invalid');
    }
  }

}
