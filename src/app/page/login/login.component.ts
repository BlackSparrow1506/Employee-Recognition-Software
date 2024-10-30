import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Add your authentication logic here
      // For example, check username and password (mock example)
      if (username === 'admin' && password === 'password') {
        this.router.navigate(['/home']); // Redirect to home page after login
      } else {
        alert('Invalid credentials');
      }
    }
  }

}
