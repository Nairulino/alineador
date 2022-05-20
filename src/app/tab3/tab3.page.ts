import { Component } from '@angular/core';
import { AuthenticationService } from '../services/auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  activeUser: any
  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.activeUser = JSON.parse(localStorage.getItem('user'))
  }

}
