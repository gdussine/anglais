import { Component, OnInit } from '@angular/core';
import {AudioService} from '../audio.service';
import {JeuService} from '../jeu.service';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  soundClass: string;


  constructor(private audioService: AudioService, private jeuService: JeuService, private configService: ConfigService) {
  }

  ngOnInit() {
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

  public reset_click(){
    this.jeuService.reset();
    console.log("cc");
    this.configService.setUser(null).then(x => {
      console.log(x);
    });
  }
}
