import { Component, OnInit } from '@angular/core';
import {AudioService} from '../audio.service';
import {ConfigService} from '../config.service';
import {UserService} from '../user.service';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  soundClass: string;
  username: string;


  constructor(private audioService: AudioService,
              private configService: ConfigService,
              private userService: UserService,
              private popoverController: PopoverController) {

  }

  ngOnInit() {
    this.configService.getUser().then(x => {this.username = x.name;} );
    if (this.audioService.areSoundsEnabled()) {
      this.soundClass = 'volume-medium-outline';
    }
    else {
      this.soundClass = 'volume-mute-outline';
    }
  }

  public sound_click(){
    if(this.audioService.areSoundsEnabled()){
      this.soundClass = 'volume-mute-outline';
    } else {
      this.soundClass = 'volume-medium-outline';
    }
    this.audioService.toggleSoundsEnable();
  }

  public submit(){
    this.userService.loadUser(this.username).then(x => this.popoverController.dismiss());
  }

}
