import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginModel } from 'src/app/models/loginModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: string = '';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginServiceService: LoginService,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); //form datasını login nesnesine bağlıyoruz(object.assing).javascript herşey fonksiyondur, class yoktur class gibi davranna fonksiyonlar vardır.boş bir obje oluşturup virgülden sonrasını onun içine assing etmiş oluyoruz.

      const loginModel: LoginModel = {
        ...this.loginForm.value,
      };
      this.loginServiceService.login(loginModel).subscribe({
        next: (response) => {
          //this.localStorageService.saveData(response);,JSON.stringify(JSON.stringify(response).split('"')[5])
          this.localStorageService.saveData('token', response.access_token);
          this.router.navigateByUrl('/services');
        },
        error: (err) => {
          this.toastr.error('Invalid User Name Or Password');
          this.error = err.statusText;
        },
        complete: () => {
          if (this.error) this.error = '';
          // this.categoryAddForm.reset();
          // this.getCategories();
        },
      });
    } else {
      this.toastr.error('Please fill the form correctly');
    }
  }
}
