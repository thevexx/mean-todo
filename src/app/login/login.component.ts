import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private apiService: ApiService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  loginBtn(form) {
    if (form.valid) {
      this.apiService.login(form.value).subscribe(res => {
        if (res.json().message === 'ok') {
          this.router.navigateByUrl('/home');
          localStorage.setItem('token', res.json().token);
        }
      });
    }
  }

}
