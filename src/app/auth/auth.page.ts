import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {from} from 'rxjs';
import {Storage} from '@ionic/storage-angular';
import {ConfigService} from '../config.service';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  username: string;

  constructor(private userService: UserService, private configService: ConfigService, private popoverController: PopoverController) { }

  ngOnInit() {
  }

  submit(){
    this.userService.loadUser(this.username).then( user => {
      this.popoverController.dismiss();
    });
  }

}
