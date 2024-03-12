import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public forms: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formulary()
  }
  ngOnDestroy() {
  }

  public formulary() {
    this.forms = this.fb.group({
      login: ['', [Validators.required]],
      senha: ['', Validators.required],
    });
  }

  public onSubmit() {
    if (this.forms.valid) {
      this.authService.onLogin(this.forms.value).subscribe({
        next: (value) => {
          console.log(value);

          this.router.navigate(['dashboard'])
        }
      })

      console.log(this.forms.value);

    } else {
      this.forms.markAllAsTouched();
    }
  }

}
