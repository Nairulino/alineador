import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: Object
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public db: AngularFireDatabase
  ) {}

  ngOnInit() {}
  
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(res.user.emailVerified) {
          this.router.navigate(['tabs'])
        } else {
          window.alert('El email no está verificado.')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
