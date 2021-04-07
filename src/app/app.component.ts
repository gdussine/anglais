import {Component, OnInit} from '@angular/core';
import {ConfigService} from './config.service';
import {UserService} from './user.service';
import {AuthPage} from './auth/auth.page';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private configService: ConfigService, private userService: UserService, private popoverController: PopoverController) {}

  ngOnInit() {
  this.configService.getUser().then(user => {
      if (user === null || user === undefined){
        this.authPopover();
      }
    });
  }

  async authPopover() {
    const popover = await this.popoverController.create({
      component: AuthPage,
      cssClass: 'my-custom-class',
      translucent: true
    });
    return await popover.present();
  }

}
